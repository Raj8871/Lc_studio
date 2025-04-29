
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

export default function ConverterPage() {
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
      toast({
        title: 'Conversion Successful!',
        description: 'Your React component is ready.',
      });
    } catch (error) {
      console.error('Conversion failed:', error);
      toast({
        title: 'Conversion Error',
        description: 'Failed to convert the code. Please try again or check the console.',
        variant: 'destructive',
      });
      // Optionally display the error message in the output or a dedicated area
      // setOutputCode(`// Conversion Error:\n${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4 md:p-8">
      <Card className="w-full max-w-4xl shadow-xl border border-border/50">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground">React Component Converter</CardTitle>
          <CardDescription className="text-muted-foreground pt-2">
            Paste your HTML, CSS, and JavaScript code below to convert it into a React component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full gap-2">
            <Label htmlFor="input-code" className="text-foreground font-semibold">Input Code (HTML, CSS, JS)</Label>
            <Textarea
              id="input-code"
              placeholder="<!-- Your HTML here -->
<style>
/* Your CSS here */
.my-class { color: blue; }
</style>
<script>
// Your JavaScript here
function handleClick() { console.log('Clicked!'); }
document.querySelector('button')?.addEventListener('click', handleClick);
</script>
<button class='my-class'>Click Me</button>
"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="min-h-[300px] font-mono text-sm resize-y bg-background border-input focus:border-accent focus:ring-accent transition-colors duration-200"
              disabled={isLoading}
              aria-label="Input code area for HTML, CSS, and JavaScript"
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
             <CodeBlock id="output-code" code={outputCode} isLoading={isLoading} aria-live="polite" />
          </div>
        </CardContent>
      </Card>
       {/* Footer (optional for converter page) */}
       <footer className="mt-8 text-center text-xs text-muted-foreground">
         <p>&copy; {new Date().getFullYear()} React Component Converter.</p>
       </footer>
    </div>
  );
}
