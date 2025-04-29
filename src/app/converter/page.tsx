
'use client';

import * as React from 'react';
import { codeConversion, type CodeConversionInput } from '@/ai/flows/code-conversion';
import { CodeBlock } from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // Import Textarea
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader2, Info } from 'lucide-react';

// Key for storing input code in local storage
const LOCAL_STORAGE_INPUT_KEY = 'react-converter-input-code';

export default function ConverterPage() {
  const [inputCode, setInputCode] = React.useState('');
  const [outputCode, setOutputCode] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  // Load input code from local storage on component mount (client-side only)
  React.useEffect(() => {
    try {
      const savedCode = localStorage.getItem(LOCAL_STORAGE_INPUT_KEY);
      if (savedCode) {
        setInputCode(savedCode);
      }
    } catch (error) {
      console.error("Failed to read from localStorage:", error);
      toast({
        title: 'Local Storage Error',
        description: 'Could not load previously saved code.',
        variant: 'destructive',
      });
    }
  }, [toast]); // Empty dependency array ensures this runs only once on mount

  // Save input code to local storage whenever it changes (client-side only)
  React.useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_INPUT_KEY, inputCode);
    } catch (error) {
      console.error("Failed to write to localStorage:", error);
      // Consider adding a toast notification here if saving fails
    }
  }, [inputCode]); // Dependency array ensures this runs when inputCode changes

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
        description: `Failed to convert the code. ${error instanceof Error ? error.message : 'Please try again or check the console.'}`,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCode(event.target.value);
  };

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4 md:p-8">
      <Card className="w-full max-w-4xl shadow-xl border border-border/50">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground">React Component Converter</CardTitle>
          <CardDescription className="text-muted-foreground pt-2 flex items-center justify-center gap-1">
            <Info size={14}/> Paste HTML, CSS, JS. Your input is saved locally.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full gap-2">
            <Label htmlFor="input-code-editor" className="text-foreground font-semibold">Input Code (HTML, CSS, JS)</Label>
            {/* Replace Monaco Editor with standard Textarea */}
            <Textarea
              id="input-code-editor"
              value={inputCode}
              onChange={handleInputChange}
              placeholder="Paste your HTML, CSS, or JavaScript here..."
              className="h-[350px] resize-y font-mono text-sm" // Apply similar height and styling
              disabled={isLoading}
              aria-label="Input code editor"
            />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleConvert}
              disabled={isLoading || !inputCode.trim()}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              aria-label="Convert code to React component"
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
             {/* Ensure CodeBlock uses a language prop if needed for highlighting */}
             <CodeBlock id="output-code" code={outputCode} isLoading={isLoading} language="javascript" aria-live="polite" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
