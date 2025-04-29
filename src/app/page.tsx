
'use client';

import * as React from 'react';
import { codeConversion, type CodeConversionInput } from '@/ai/flows/code-conversion';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader2, Zap, CheckCircle, Settings, Rocket } from 'lucide-react';

export default function Home() {
  const [inputCode, setInputCode] = React.useState('');
  const [outputCode, setOutputCode] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const converterRef = React.useRef<HTMLDivElement>(null);

  const handleConvert = async () => {
    if (!inputCode.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please enter some code to convert.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setOutputCode(''); // Clear previous output

    try {
      const input: CodeConversionInput = { code: inputCode };
      const result = await codeConversion(input);
      setOutputCode(result.reactComponentCode);
      toast({
        title: 'Conversion Successful!',
        description: 'Your React component is ready.',
      });
    } catch (error) {
      console.error('Conversion failed:', error);
      toast({
        title: 'Conversion Error',
        description: 'Failed to convert the code. Please check the console for details.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

   const scrollToConverter = () => {
    converterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Effortlessly Convert Code to React
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our AI-powered tool instantly transforms your HTML, CSS, and JavaScript into clean, optimized React functional components. Save time and modernize your codebase.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  onClick={scrollToConverter}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <Wand2 className="mr-2 h-5 w-5" /> Start Converting
                </Button>
                 <Button
                  size="lg"
                  variant="outline"
                   onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
             <div className="hidden lg:flex items-center justify-center">
                {/* Placeholder for an illustrative image or animation */}
                <Wand2 size={200} className="text-accent opacity-30" />
              </div>
          </div>
        </div>
      </section>

       {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Why Use Our Converter?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Streamline your development workflow with intelligent code conversion.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-12">
            <div className="grid gap-1 text-center md:text-left">
               <div className="flex justify-center md:justify-start items-center gap-2">
                 <Zap className="h-8 w-8 text-accent" />
                 <h3 className="text-xl font-bold text-foreground">Instant Conversion</h3>
               </div>
              <p className="text-sm text-muted-foreground">
                Get functional React code in seconds. Paste your legacy code and let our AI handle the rest.
              </p>
            </div>
             <div className="grid gap-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-2">
                 <CheckCircle className="h-8 w-8 text-accent" />
                 <h3 className="text-xl font-bold text-foreground">Optimized Output</h3>
               </div>
              <p className="text-sm text-muted-foreground">
                Generates clean, modern React code following best practices, including hooks (useState, useEffect).
              </p>
            </div>
             <div className="grid gap-1 text-center md:text-left">
               <div className="flex justify-center md:justify-start items-center gap-2">
                 <Settings className="h-8 w-8 text-accent" />
                 <h3 className="text-xl font-bold text-foreground">Handles Complexity</h3>
                </div>
              <p className="text-sm text-muted-foreground">
                Intelligently refactors JavaScript DOM manipulations and CSS styles into appropriate React patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
       <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">Simple Steps to Modern Code</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Converting your code is straightforward. Follow these simple steps to generate your React component instantly.
            </p>
             <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
               <li>Paste your combined HTML, CSS, and JavaScript code into the input area.</li>
               <li>Click the "Convert to React" button.</li>
               <li>Review and copy the generated React component from the output area.</li>
             </ol>
          </div>
           <div className="flex items-center justify-center">
            {/* You could replace this with a simple graphic or steps visualization */}
            <Rocket size={150} className="text-accent opacity-30" />
          </div>
        </div>
      </section>


      {/* Converter Section */}
      <section ref={converterRef} className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
           <Card className="w-full max-w-3xl mx-auto shadow-xl border border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Try the Converter</CardTitle>
              <CardDescription className="text-muted-foreground pt-2">
                Paste your HTML, CSS, and JavaScript code below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid w-full gap-2">
                <Label htmlFor="input-code" className="text-foreground font-semibold">Input Code</Label>
                <Textarea
                  id="input-code"
                  placeholder="<!-- Your HTML here -->
<style>
/* Your CSS here */
</style>
<script>
// Your JavaScript here
</script>"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="min-h-[250px] font-mono text-sm resize-y bg-background border-input focus:border-accent focus:ring-accent transition-colors duration-200"
                  disabled={isLoading}
                  aria-label="Input code area"
                />
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={handleConvert}
                  disabled={isLoading || !inputCode.trim()}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  aria-label="Convert code"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-6 w-6" />
                  )}
                  Convert to React
                </Button>
              </div>

              <div className="grid w-full gap-2">
                 <Label htmlFor="output-code" className="text-foreground font-semibold">Output React Component</Label>
                 <CodeBlock id="output-code" code={outputCode} isLoading={isLoading} aria-live="polite" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} React Component Converter. All rights reserved.</p>
        {/* Add any footer links if needed */}
      </footer>
    </div>
  );
}
 
   