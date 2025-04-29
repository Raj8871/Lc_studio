// src/ai/flows/code-conversion.ts
'use server';
/**
 * @fileOverview Converts HTML, CSS, and JavaScript code into a functional React component.
 *
 * - codeConversion - A function that handles the code conversion process.
 * - CodeConversionInput - The input type for the codeConversion function.
 * - CodeConversionOutput - The return type for the codeConversion function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const CodeConversionInputSchema = z.object({
  code: z.string().describe('The HTML, CSS, and JavaScript code to convert.'),
});
export type CodeConversionInput = z.infer<typeof CodeConversionInputSchema>;

const CodeConversionOutputSchema = z.object({
  reactComponentCode: z.string().describe('The converted React component code.'),
});
export type CodeConversionOutput = z.infer<typeof CodeConversionOutputSchema>;

export async function codeConversion(input: CodeConversionInput): Promise<CodeConversionOutput> {
  return codeConversionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'codeConversionPrompt',
  input: {
    schema: z.object({
      code: z.string().describe('The HTML, CSS, and JavaScript code to convert to a React component.'),
    }),
  },
  output: {
    schema: z.object({
      reactComponentCode: z.string().describe('The converted React component code.'),
    }),
  },
  prompt: `You are an expert React Developer.
Convert the following HTML, CSS, and JavaScript code into a complete, clean, optimized React functional component.
Follow the best React practices including:
- Correct JSX syntax.
- Preserving CSS classes or converting to inline/styled-components if asked.
- Refactoring JavaScript DOM logic into React\'s state/hooks.
- Using useEffect/useState where necessary.
- Ensuring accessibility and optimization.
- Importing necessary hooks and modules automatically.
- Outputting only the final ready-to-use React component.
No extra explanations; just perfect, production-quality code.\n\nHere is the code to convert:\n\n{{{code}}}`,
});

const codeConversionFlow = ai.defineFlow<
  typeof CodeConversionInputSchema,
  typeof CodeConversionOutputSchema
>({
  name: 'codeConversionFlow',
  inputSchema: CodeConversionInputSchema,
  outputSchema: CodeConversionOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
