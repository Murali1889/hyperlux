import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import { Camera, X, Send, Loader, CheckCircle } from 'lucide-react';
import '../styles/feedback.css';
import html2canvas from 'html2canvas';
import { submitFeedback } from '@/lib/feedback';

// Feedback Context
const FeedbackContext = createContext(null);

// Utility functions
const getElementSelector = (element) => {
  if (!element || element === document.body) return 'body';

  const path = [];
  let current = element;

  while (current && current !== document.body) {
    let selector = current.tagName.toLowerCase();

    if (current.id) {
      selector += `#${current.id}`;
      path.unshift(selector);
      break;
    }

    if (current.className) {
      const classes = current.className.split(' ').filter(c => c.trim());
      if (classes.length > 0) {
        selector += `.${classes[0]}`;
      }
    }

    const siblings = Array.from(current.parentElement?.children || [])
      .filter(el => el.tagName === current.tagName);

    if (siblings.length > 1) {
      const index = siblings.indexOf(current) + 1;
      selector += `:nth-of-type(${index})`;
    }

    path.unshift(selector);
    current = current.parentElement;
  }

  return path.join(' > ');
};

const getElementInfo = (element) => {
  const rect = element.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(element);

  return {
    tagName: element.tagName.toLowerCase(),
    id: element.id || null,
    className: element.className || null,
    textContent: element.textContent?.slice(0, 100) || null,
    selector: getElementSelector(element),
    position: {
      x: Math.round(rect.x),
      y: Math.round(rect.y),
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    },
    styles: {
      backgroundColor: computedStyle.backgroundColor,
      color: computedStyle.color,
      fontSize: computedStyle.fontSize,
      fontFamily: computedStyle.fontFamily
    }
  };
};

// Screenshot utilit

const captureElementScreenshot = async (element) => {
  const canvas = await html2canvas(element, {
    backgroundColor: null,
    scale: 2,
    useCORS: true,
    logging: false,
  });
  return canvas.toDataURL('image/png');
};


// Feedback Modal Component
const FeedbackModal = ({
  isOpen,
  onClose,
  elementInfo,
  screenshot,
  onSubmit
}) => {
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!feedback.trim()) return;

    setIsSubmitting(true);

    const feedbackData = {
      feedback: feedback.trim(),
      element: elementInfo,
      screenshot,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Feedback submitted:', feedbackData);
    onSubmit(feedbackData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFeedback('');
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="feedback-backdrop" onClick={onClose} />
      <div className="feedback-modal">
        <div className="feedback-modal-content">
          <div className="feedback-header">
            <h3 className="feedback-title">
              <Camera size={20} className="feedback-icon" />
              Element Feedback
            </h3>
            <button onClick={onClose} className="feedback-close">
              <X size={20} />
            </button>
          </div>

          {screenshot && (
            <div className="feedback-screenshot">
              <img
                src={screenshot}
                alt="Element screenshot"
                className="feedback-screenshot-img"
              />
            </div>
          )}

          <div className="feedback-element-info">
            <div className="feedback-element-detail"><strong>Element:</strong> {elementInfo?.tagName}</div>
            {elementInfo?.id && <div className="feedback-element-detail"><strong>ID:</strong> {elementInfo.id}</div>}
            {elementInfo?.className && <div className="feedback-element-detail"><strong>Class:</strong> {elementInfo.className}</div>}
            <div className="feedback-element-detail"><strong>Position:</strong> {elementInfo?.position.x}, {elementInfo?.position.y}</div>
          </div>

          <div className="feedback-form">
            <label className="feedback-label">Your Feedback</label>
            <textarea
              ref={textareaRef}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe the issue or suggestion..."
              className="feedback-textarea"
              rows={4}
              disabled={isSubmitting || isSubmitted}
            />
          </div>

          <div className="feedback-actions">
            <button
              type="button"
              onClick={onClose}
              className="feedback-btn feedback-cancel"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!feedback.trim() || isSubmitting || isSubmitted}
              className="feedback-btn feedback-submit"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={16} />
                  Submitted!
                </>
              ) : isSubmitting ? (
                <>
                  <Loader size={16} className="feedback-loading" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Submit Feedback
                </>
              )}
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

// Main Feedback Provider Component
const FeedbackProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [tooltipStyle, setTooltipStyle] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);

  const overlayRef = useRef(null);
  const highlightRef = useRef(null);

  // Element validation
  const isValidElement = useCallback((element) => {
    if (!element || element === document.body || element === document.documentElement) {
      return false;
    }

    // Skip feedback system elements
    if (element.closest('.feedback-overlay, .feedback-modal, .feedback-backdrop, .feedback-instruction, .feedback-exit-hint')) {
      return false;
    }

    // Skip hidden elements
    const rect = element.getBoundingClientRect();
    if (rect.width < 10 || rect.height < 10) {
      return false;
    }

    return true;
  }, []);

  // Mouse move handler
  const handleMouseMove = useCallback((e) => {
    if (!isActive) return;

    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (!isValidElement(element) || element === hoveredElement) return;

    setHoveredElement(element);

    const rect = element.getBoundingClientRect();
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    setHighlightStyle({
      left: rect.left + scrollX,
      top: rect.top + scrollY,
      width: rect.width,
      height: rect.height,
    });

    // Position tooltip
    const tooltipX = Math.min(e.clientX + 10, window.innerWidth - 200);
    const tooltipY = e.clientY - 40;

    setTooltipStyle({
      left: tooltipX,
      top: Math.max(tooltipY, 10),
    });
  }, [isActive, hoveredElement, isValidElement]);

  // Element click handler
  const handleElementClick = useCallback(async (e) => {
    if (!isActive || !hoveredElement) return;

    e.preventDefault();
    e.stopPropagation();

    setIsCapturing(true);
    setSelectedElement(hoveredElement);

    try {
      const screenshotData = await captureElementScreenshot(hoveredElement);
      console.log(screenshotData);
      setScreenshot(screenshotData);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to capture screenshot:', error);
      setIsModalOpen(true);
    } finally {
      setIsCapturing(false);
      setHoveredElement(null);
    }
    setIsCapturing(false);
    setHoveredElement(null);
  }, [isActive, hoveredElement]);

  // Keyboard event handler
  const handleKeyDown = useCallback((e) => {
    // Ctrl + Alt + F to activate feedback mode
    if (e.ctrlKey && e.key.toLowerCase() === 'q') {
      e.preventDefault();
      if (!isActive) {
        setIsActive(true);
      }
      return;
    }

    // Escape to exit feedback mode
    if (e.key === 'Escape' && isActive) {
      e.preventDefault();
      setIsActive(false);
      setIsModalOpen(false);
    }
  }, [isActive]);

  // Keyboard listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Mouse listeners when active
  useEffect(() => {
    if (!isActive) {
      setHoveredElement(null);
      setSelectedElement(null);
      return;
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('click', handleElementClick, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleElementClick, true);
    };
  }, [isActive, handleMouseMove, handleElementClick]);

  // Handle feedback submission - deactivates feedback mode
  const handleFeedbackSubmit = useCallback(async (feedbackData) => {
    try {
      const result = await submitFeedback(feedbackData);
      if (!result.success) {
        console.error('Failed to submit feedback:', result.error);
        // Optionally: show error to user here
        return;
      }
      console.log('Feedback saved with ID:', result.id);

      // Close modal and deactivate feedback mode
      setIsModalOpen(false);
      setIsActive(false);
      setSelectedElement(null);
      setScreenshot(null);
      setHoveredElement(null);
    } catch (error) {
      console.error('Unexpected error submitting feedback:', error);
      // Optionally handle error UI here
    }
  }, []);

  // Close modal handler
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedElement(null);
    setScreenshot(null);
  }, []);



  return (
    <FeedbackContext.Provider value={{ isActive }}>

      {children}

      {isActive && (
        <>
          <div
            ref={overlayRef}
            className="feedback-overlay"
          />

          {hoveredElement && (
            <>
              <div
                ref={highlightRef}
                className="feedback-highlight"
                style={highlightStyle}
              />
              <div
                className="feedback-tooltip"
                style={tooltipStyle}
              >
                {hoveredElement.tagName.toLowerCase()}
                {hoveredElement.id && `#${hoveredElement.id}`}
                {isCapturing && ' (Capturing...)'}
              </div>
            </>
          )}
        </>
      )}

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        elementInfo={selectedElement ? getElementInfo(selectedElement) : null}
        screenshot={screenshot}
        onSubmit={handleFeedbackSubmit}
      />
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };

// Export the context hook for advanced usage
export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within FeedbackProvider');
  }
  return context;
};
