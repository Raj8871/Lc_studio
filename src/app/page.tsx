
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Zap, CheckCircle, Settings, Copy, Rocket, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Footer from '@/components/Footer'; // Import Footer

export default function LandingPage() {
  const router = useRouter(); // Initialize router

  const navigateToConverter = () => {
    router.push('/converter'); // Navigate to the converter page
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/30 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary dark:text-primary-foreground">
                   Convert HTML/CSS/JS to React Instantly!
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl dark:text-slate-400">
                  Save time. Get clean React code in seconds.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  onClick={navigateToConverter} // Updated onClick handler
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <Wand2 className="mr-2 h-5 w-5" /> Try the Converter
                </Button>
                 <Button
                  size="lg"
                  variant="outline"
                   onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                   className="dark:text-white dark:border-slate-600 dark:hover:bg-slate-700"
                >
                  Learn More
                </Button>
              </div>
            </div>
             <div className="hidden lg:flex items-center justify-center">
                {/* Placeholder for an illustrative image or animation */}
                <Wand2 size={200} className="text-accent opacity-30 dark:text-teal-500" />
              </div>
          </div>
        </div>
      </section>

       {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-slate-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground dark:bg-slate-700 dark:text-slate-300">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary dark:text-primary-foreground">Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Leverage powerful features designed for developers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 pt-12">
             {/* Feature Card 1 */}
             <Card className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-700 dark:border-slate-600">
              <CardHeader>
                 <div className="flex justify-center items-center mb-2">
                   <Zap className="h-10 w-10 text-accent dark:text-teal-400" />
                 </div>
                <CardTitle className="text-lg font-bold text-foreground dark:text-white">Fast & Accurate Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground dark:text-slate-400">
                  Get functional React code in seconds with high accuracy.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Feature Card 2 */}
             <Card className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-700 dark:border-slate-600">
              <CardHeader>
                 <div className="flex justify-center items-center mb-2">
                   <CheckCircle className="h-10 w-10 text-accent dark:text-teal-400" />
                 </div>
                <CardTitle className="text-lg font-bold text-foreground dark:text-white">Clean JSX Output</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground dark:text-slate-400">
                  Generates modern, readable React code following best practices.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Feature Card 3 */}
             <Card className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-700 dark:border-slate-600">
               <CardHeader>
                 <div className="flex justify-center items-center mb-2">
                   <Settings className="h-10 w-10 text-accent dark:text-teal-400" />
                 </div>
                <CardTitle className="text-lg font-bold text-foreground dark:text-white">Developer Friendly Interface</CardTitle>
               </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground dark:text-slate-400">
                  Simple and intuitive UI designed for ease of use.
                </CardDescription>
              </CardContent>
            </Card>
             {/* Feature Card 4 */}
             <Card className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-700 dark:border-slate-600">
               <CardHeader>
                 <div className="flex justify-center items-center mb-2">
                   <Copy className="h-10 w-10 text-accent dark:text-teal-400" />
                 </div>
                <CardTitle className="text-lg font-bold text-foreground dark:text-white">Easy Copy to Clipboard</CardTitle>
               </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground dark:text-slate-400">
                   Quickly copy the generated React component code with a single click.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
       <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-background">
        <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground dark:bg-slate-700 dark:text-slate-300">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary dark:text-primary-foreground">Simple Steps to Modern Code</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
             Converting your code is straightforward. Follow these simple steps.
            </p>
          </div>
           <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-8 sm:grid-cols-3 sm:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-accent/10 p-3 dark:bg-teal-900/30">
                 <Wand2 className="h-8 w-8 text-accent dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold dark:text-white">1. Paste Your Code</h3>
              <p className="text-sm text-muted-foreground dark:text-slate-400">Enter your HTML, CSS, and JavaScript into the input area.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-accent/10 p-3 dark:bg-teal-900/30">
                 <ArrowRight className="h-8 w-8 text-accent dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold dark:text-white">2. Click Convert</h3>
              <p className="text-sm text-muted-foreground dark:text-slate-400">Hit the convert button and let the AI do the magic.</p>
            </div>
             {/* Step 3 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-accent/10 p-3 dark:bg-teal-900/30">
                 <Rocket className="h-8 w-8 text-accent dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold dark:text-white">3. Get React Code</h3>
              <p className="text-sm text-muted-foreground dark:text-slate-400">Receive a clean, ready-to-use React component.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add Footer specifically to this page */}
      <Footer />
    </div>
  );
}
