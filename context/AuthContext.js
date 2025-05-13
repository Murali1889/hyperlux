// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithCredential,
//   signOut,
//   onAuthStateChanged
// } from 'firebase/auth';
// import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

// const OAUTH_SCOPES = [
//   'https://www.googleapis.com/auth/userinfo.email',
//   'https://www.googleapis.com/auth/userinfo.profile',
//   // 'https://www.googleapis.com/auth/drive.file'
// ];

// const SHEET_SCOPES = [
//   'https://www.googleapis.com/auth/userinfo.email',
//   'https://www.googleapis.com/auth/userinfo.profile',
//   'https://www.googleapis.com/auth/drive.file'
// ];

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export const storage = getStorage(app);
// const db = getFirestore(app);

// const AuthContext = createContext(null);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// const formatUserProfile = (profileData) => ({
//   name: profileData.n || '',
//   email: profileData.e || '',
//   avatar: profileData.av || '',
//   createdAt: profileData.ca || null,
//   lastLogin: profileData.ll || null,
//   theme: profileData.th || 'light',
//   team: profileData.t || [],
//   language: profileData.lg || 'en',
//   notifications: profileData.ne || false,
//   plan: profileData.p || 'free',
//   planExpiry: profileData.pe || null,
//   data: {
//     labels: Array.isArray(profileData.d?.l)
//       ? profileData.d.l.map(item => {
//         if (typeof item === 'object' && item !== null) {
//           return {
//             a: item.a || null,
//             ps: item.ps || null,
//             sa: item.sa || null,
//             sb: item.sb || null,
//             sbn: item.sbn || null,
//             ca: item.ca || null,
//             id: item.id || '',
//             t: item.t || ''
//           };
//         }
//         return { id: item || '', q: '', ps: null, sa: null, sb: null, sbn: null, ca: null, t: '' };
//       })
//       : [],
//     notes: Array.isArray(profileData.d?.n)
//       ? profileData.d.n.map(item => {
//         if (typeof item === 'object' && item !== null) {
//           return {
//             a: item.a || null,
//             ps: item.ps || null,
//             sa: item.sa || null,
//             sb: item.sb || null,
//             sbn: item.sbn || null,
//             ca: item.ca || null,
//             id: item.id || '',
//             t: item.t || ''
//           };
//         }
//         return { id: item || '', q: '', ps: null, sa: null, sb: null, sbn: null, ca: null, t: '' };
//       })
//       : [],
//     shortcuts: Array.isArray(profileData.d?.s)
//       ? profileData.d.s.map(item => {
//         if (typeof item === 'object' && item !== null) {
//           return {
//             a: item.a || null,
//             ps: item.ps || null,
//             sa: item.sa || null,
//             sb: item.sb || null,
//             sbn: item.sbn || null,
//             ca: item.ca || null,
//             id: item.id || '',
//             t: item.t || ''
//           };
//         }
//         return { id: item || '', q: '', ps: null, sa: null, sb: null, sbn: null, ca: null, t: '' };
//       })
//       : [],
//     spreadsheet: {
//       id: profileData.d?.sd?.id || null,
//       createdAt: profileData.d?.sd?.ca || null,
//       lastSynced: profileData.d?.sd?.ls || null
//     }
//   },
// });

// export const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState({
//     status: 'in_progress',
//     user: null,
//     userProfile: null,
//     error: null
//   });

//   const chrome = window.chrome;

//   // Check token status and validity
//   const checkAuthStatus = async () => {
//     // console.log('checkAuthStatus')
//     try {
//       const response = await new Promise((resolve, reject) => {
//         chrome.runtime.sendMessage({ type: 'GET_TOKEN' }, (response) => {
//           // console.log(response)
//           if (chrome.runtime.lastError) {
//             // console.log(chrome.runtime.lastError)
//             reject(new Error(chrome.runtime.lastError.message));
//             return;
//           }
//           resolve(response);
//         });
//       });

//       // console.log(response)
//       if (response.type === 'logged_in' && response.data?.accessToken) {
//         const credential = GoogleAuthProvider.credential(null, response.data.accessToken);
//         await signInWithCredential(auth, credential);
//         return true;
//       } else {
//         await handleSignOut();
//         return false;
//       }
//     } catch (error) {
//       console.error('Token check failed:', error);
//       // await handleSignOut();
//       return false;
//     }
//   };

//   const updateUserProfile = (snapshot) => {
//     if (snapshot.exists()) {
//       const formattedProfile = formatUserProfile(snapshot.data());
//       setAuthState(prev => ({
//         ...prev,
//         userProfile: formattedProfile
//       }));
//     } else {
//       setAuthState(prev => ({
//         ...prev,
//         userProfile: null
//       }));
//     }
//   };

//   useEffect(() => {
//     let profileUnsubscribe = null;

//     const messageListener = (message) => {
//       if (message.type === 'LOGGED_OUT') {
//         // handleSignOut();
//       }
//     };

//     const authUnsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       try {
//         if (firebaseUser) {
//           // Set in_progress while checking token
//           setAuthState(prev => ({
//             ...prev,
//             status: 'in_progress'
//           }));

//           const isTokenValid = await checkAuthStatus();
//           if (!isTokenValid) {
//             return;
//           }

//           profileUnsubscribe = onSnapshot(
//             doc(db, 'users_v2', firebaseUser.uid),
//             updateUserProfile
//           );

//           setAuthState(prev => ({
//             ...prev,
//             status: 'logged_in',
//             user: firebaseUser,
//             error: null
//           }));
//         } else {
//           setAuthState(prev => ({
//             ...prev,
//             status: 'logged_out',
//             user: null,
//             userProfile: null,
//             error: null
//           }));
//         }
//       } catch (error) {
//         console.error('Auth state change error:', error);
//         // await handleSignOut();
//       }
//     });

//     // Add message listener
//     chrome.runtime.onMessage.addListener(messageListener);

//     return () => {
//       authUnsubscribe();
//       if (profileUnsubscribe) {
//         profileUnsubscribe();
//       }
//       chrome.runtime.onMessage.removeListener(messageListener);
//     };
//   }, []);

//   const handleSignIn = async (isSheetPage = false) => {
//     console.log(isSheetPage)
//     if (!isSheetPage) {
//       setAuthState(prev => ({
//         ...prev,
//         status: 'in_progress',
//         error: null
//       }));
//     }

//     try {
//       const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
//       const clientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
//       const redirectUri = chrome.identity.getRedirectURL();

//       const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
//       authUrl.searchParams.append('client_id', clientId);
//       authUrl.searchParams.append('redirect_uri', redirectUri);
//       authUrl.searchParams.append('response_type', 'code');
//       if (!isSheetPage) {
//         console.log(OAUTH_SCOPES)
//         authUrl.searchParams.append('scope', OAUTH_SCOPES.join(' '));
//       }
//       else {
//         console.log(SHEET_SCOPES)
//         authUrl.searchParams.append('scope', SHEET_SCOPES.join(' '));
//       }

//       authUrl.searchParams.append('access_type', 'offline');
//       authUrl.searchParams.append('prompt', 'consent');

//       const authCode = await new Promise((resolve, reject) => {
//         chrome.identity.launchWebAuthFlow({
//           url: authUrl.toString(),
//           interactive: true
//         }, (redirectUrl) => {
//           if (chrome.runtime.lastError || !redirectUrl) {
//             reject(new Error(chrome.runtime.lastError?.message || 'Authorization failed'));
//             return;
//           }
//           const code = new URL(redirectUrl).searchParams.get('code');
//           if (!code) {
//             reject(new Error('No authorization code received'));
//             return;
//           }
//           resolve(code);
//         });
//       });

//       const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: new URLSearchParams({
//           code: authCode,
//           client_id: clientId,
//           client_secret: clientSecret,
//           redirect_uri: redirectUri,
//           grant_type: 'authorization_code'
//         })
//       });

//       if (!tokenResponse.ok) {
//         throw new Error('Token exchange failed');
//       }

//       const { access_token, refresh_token, expires_in } = await tokenResponse.json();

//       await chrome.runtime.sendMessage({
//         type: 'STORE_TOKEN',
//         token: access_token,
//         refreshToken: refresh_token,
//         expiresIn: expires_in,
//         clientId,
//         clientSecret
//       });

//       if (!isSheetPage) {
//         const credential = GoogleAuthProvider.credential(null, access_token);
//         await signInWithCredential(auth, credential);
//         await chrome.runtime.sendMessage({ type: 'SIGNED_IN' });
//       }

//       // return;

//     } catch (error) {
//       console.error('Sign in failed:', error);
//       setAuthState(prev => ({
//         ...prev,
//         status: 'logged_out',
//         error: 'Authentication failed'
//       }));
//       // await handleSignOut();
//     }
//   };

//   const handleSignOut = async () => {
//     setAuthState(prev => ({
//       ...prev,
//       status: 'in_progress',
//       error: null
//     }));

//     try {
//       // First notify background about signout
//       await chrome.runtime.sendMessage({ type: 'SIGNED_OUT' });

//       // Then clear all tokens and state
//       await Promise.all([
//         chrome.runtime.sendMessage({ type: 'CLEAR_TOKEN' }),
//         signOut(auth),
//         chrome.storage.local.clear(),
//         new Promise(resolve => {
//           localStorage.clear();
//           sessionStorage.clear();
//           resolve();
//         })
//       ]);

//       // console.log({
//       //   status: 'logged_out',
//       //   user: null,
//       //   userProfile: null,
//       //   error: null
//       // })

//       setAuthState({
//         status: 'logged_out',
//         user: null,
//         userProfile: null,
//         error: null
//       });
//     } catch (error) {
//       console.error('Sign out failed:', error);
//       // setAuthState(prev => ({ 
//       //   ...prev, 
//       //   status: 'logged_out',
//       //   error: 'Sign out failed'
//       // }));
//     }
//   };

//   const contextValue = {
//     status: authState.status,
//     user: authState.user,
//     userProfile: authState.userProfile,
//     error: authState.error,
//     signIn: handleSignIn,
//     signOut: handleSignOut
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;