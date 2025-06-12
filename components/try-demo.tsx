"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card"
import { Button } from "./ui/button"
import { Sparkles, Upload, Search, CreditCard, Receipt, FileText, Cpu, ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
export default function TryDemo() {


    return (
        <AnimatePresence>
            <motion.section id="demo" className="w-full py-16 md:py-24 professional-gradient">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 animate-fade-in-up">
                            Try DocsAPI
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                            Experience the power of our enterprise OCR software. Upload a sample document to see data extraction in
                            action.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <Card className="border border-gray-200 bg-white professional-hover transition-all duration-200 animate-fade-in-up animation-delay-300">
                            <CardHeader className="text-center">
                                <CardTitle className="flex items-center justify-center gap-2 text-slate-900">
                                    <Sparkles className="h-5 w-5 text-blue-600" />
                                    Interactive OCR Demo
                                </CardTitle>
                                <CardDescription className="text-slate-600">
                                    Upload a bank statement, invoice, or pay stub to see our OCR technology in action
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors duration-200 bg-gray-50">
                                    <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                                    <p className="text-slate-600 mb-4">Drag and drop your document here, or click to browse</p>
                                    <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                                        <Search className="mr-2 h-4 w-4" />
                                        Choose File
                                    </Button>
                                </div>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <Button
                                        variant="outline"
                                        className="h-16 flex-col border-slate-300 text-slate-700 hover:bg-slate-50 professional-hover transition-all duration-200"
                                    >
                                        <CreditCard className="h-5 w-5 mb-2" />
                                        Bank Statement
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-16 flex-col border-slate-300 text-slate-700 hover:bg-slate-50 professional-hover transition-all duration-200"
                                    >
                                        <Receipt className="h-5 w-5 mb-2" />
                                        Invoice
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-16 flex-col border-slate-300 text-slate-700 hover:bg-slate-50 professional-hover transition-all duration-200"
                                    >
                                        <FileText className="h-5 w-5 mb-2" />
                                        Pay Stub
                                    </Button>
                                </div>
                                <div className="text-center">
                                    <Button
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 professional-hover transition-all duration-200"
                                    >
                                        <Cpu className="mr-2 h-4 w-4" />
                                        Process Document
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.section>
        </AnimatePresence>
    )
}
