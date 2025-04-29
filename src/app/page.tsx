
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
      {/* Use theme background gradient */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                 {/* Use primary foreground for heading */}
                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                   Convert HTML/CSS/JS to React Instantly!
                </h1>
                 {/* Use muted foreground for paragraph */}
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Save time. Get clean React code in seconds.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  onClick={navigateToConverter} // Updated onClick handler
                  // Use accent colors for primary button
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <Wand2 className="mr-2 h-5 w-5" /> Try the Converter
                </Button>
                 <Button
                  size="lg"
                  variant="outline" // Outline uses border and background, text inherits foreground
                   onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
             <div className="hidden lg:flex items-center justify-center">
                {/* Use accent color for icon */}
                <Wand2 size={200} className="text-accent opacity-30" />
              </div>
          </div>
        </div>
      </section>

       {/* Features Section */}
      {/* Use muted background */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
               {/* Use secondary colors for badge */}
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Key Features</div>
              {/* Use primary foreground for heading */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Features</h2>
              {/* Use muted foreground for paragraph */}
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Leverage powerful features designed for developers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 pt-12">
             {/* Feature Card 1 - Uses Card component which adapts */}
             <Card className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                 <div className="flex justify-center items-center mb-2">
                   {/* Use accent color for icon */}
                   <Zap className="h-10 w-10 text-accent" />
                 </div>
                 {/* CardTitle inherits foreground */}
                <CardTitle className="text-lg font-bold">Fast & Accurate Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                 {/* CardDescription uses muted-foreground */}
                <CardDescription className="text-sm">
                  Get functional React code in seconds with high accuracy.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Feature Card 2 */}
             <Card className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                 <div className="flex justify-center items-center mb-2">
                   <CheckCircle className="h-10 w-10 text-accent" />
                 </div>
                <CardTitle className="text-lg font-bold">Clean JSX Output</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Generates modern, readable React code following best practices.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Feature Card 3 */}
             <Card className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
               <CardHeader>
                 <div className="flex justify-center items-center mb-2">
                   <Settings className="h-10 w-10 text-accent" />
                 </div>
                <CardTitle className="text-lg font-bold">Developer Friendly Interface</CardTitle>
               </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Simple and intuitive UI designed for ease of use.
                </CardDescription>
              </CardContent>
            </Card>
             {/* Feature Card 4 */}
             <Card className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
               <CardHeader>
                 <div className="flex justify-center items-center mb-2">
                   <Copy className="h-10 w-10 text-accent" />
                 </div>
                <CardTitle className="text-lg font-bold">Easy Copy to Clipboard</CardTitle>
               </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                   Quickly copy the generated React component code with a single click.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
       {/* Use default background */}
       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
             {/* Use secondary colors for badge */}
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">How It Works</div>
             {/* Use primary foreground for heading */}
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">Simple Steps to Modern Code</h2>
             {/* Use muted foreground for paragraph */}
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Converting your code is straightforward. Follow these simple steps.
            </p>
          </div>
           <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-8 sm:grid-cols-3 sm:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-2">
               {/* Use accent background for icon container */}
              <div className="rounded-full bg-accent/10 p-3">
                 {/* Use accent color for icon */}
                 <Wand2 className="h-8 w-8 text-accent" />
              </div>
               {/* Use foreground for heading */}
              <h3 className="text-lg font-bold">1. Paste Your Code</h3>
               {/* Use muted foreground for text */}
              <p className="text-sm text-muted-foreground">Enter your HTML, CSS, and JavaScript into the input area.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-accent/10 p-3">
                 <ArrowRight className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold">2. Click Convert</h3>
              <p className="text-sm text-muted-foreground">Hit the convert button and let the AI do the magic.</p>
            </div>
             {/* Step 3 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-accent/10 p-3">
                 <Rocket className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold">3. Get React Code</h3>
              <p className="text-sm text-muted-foreground">Receive a clean, ready-to-use React component.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add Footer specifically to this page */}
      <Footer />
    </div>
  );
}
