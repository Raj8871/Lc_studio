
'use client';

import * as React from 'react';
import { Check, Copy, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  isLoading?: boolean;
}

export function CodeBlock({ code, isLoading, className, ...props }: CodeBlockProps) {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = async () => {
    if (!code || isLoading) return;
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      toast({
        title: 'Copied!',
        description: 'React component code copied to clipboard.',
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
      toast({
        title: 'Error',
        description: 'Failed to copy code to clipboard.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div
      className={cn(
        'relative w-full rounded-md border bg-muted/30 p-4 font-mono text-sm shadow-inner', // Added inner shadow
        className
      )}
      {...props}
    >
      <ScrollArea className="h-[350px] max-h-[60vh]"> {/* Increased height */}
        {isLoading ? (
          <div className="flex h-full items-center justify-center text-muted-foreground">
             <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            <span>Converting...</span>
          </div>
        ) : code ? (
          <pre className="whitespace-pre-wrap break-words"> {/* Ensure wrapping */}
            <code>{code}</code>
          </pre>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Converted React code will appear here.
          </div>
        )}
      </ScrollArea>
      {!isLoading && code && (
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground" // Adjusted styling
          onClick={handleCopy}
          aria-label={isCopied ? 'Copied' : 'Copy code'}
        >
          {isCopied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  );
}

 
   