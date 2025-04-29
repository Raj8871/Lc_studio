'use client';

import * as React from 'react';
import { codeConversion, type CodeConversionInput } from '@/ai/flows/code-conversion';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader2 } from 'lucide-react';

export default function Home() {
  const [inputCode, setInputCode] = React.useState('');
  const [outputCode, setOutputCode] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-background">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground">React Component Converter</CardTitle>
          <CardDescription className="text-muted-foreground">
            Paste your HTML, CSS, and JavaScript code below and convert it into a React functional component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full gap-2">
            <Label htmlFor="input-code" className="text-foreground">Input Code</Label>
            <Textarea
              id="input-code"
              placeholder="Paste your HTML, CSS, JS code here..."
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="min-h-[200px] font-mono text-sm resize-none bg-muted/30 focus:bg-background transition-colors"
              disabled={isLoading}
              aria-label="Input code area"
            />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleConvert}
              disabled={isLoading || !inputCode.trim()}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 text-base rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              aria-label="Convert code"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-5 w-5" />
              )}
              Convert to React
            </Button>
          </div>

          <div className="grid w-full gap-2">
             <Label htmlFor="output-code" className="text-foreground">Output React Component</Label>
             <CodeBlock id="output-code" code={outputCode} isLoading={isLoading} aria-live="polite" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
