# **App Name**: React Component Converter

## Core Features:

- Code Input: Accept HTML, CSS, and JavaScript code as input.
- Code Conversion: Convert the given HTML, CSS, and JavaScript code into a functional React component using an LLM tool. Ensure JSX syntax, CSS styling, and React hooks are implemented correctly.
- Code Output: Display the converted React component code in a formatted, copyable code block.

## Style Guidelines:

- Primary color: Light gray (#f0f0f0) for a clean background.
- Secondary color: Dark gray (#333) for text and important elements.
- Accent: Teal (#008080) for interactive elements and highlights.
- Use a simple, centered layout for the input and output areas.
- Use clear and simple icons for actions like 'Convert' and 'Copy'.
- Subtle loading animations while the code is being converted.

## Original User Request:
# **Super Advanced Prompt to Convert HTML, CSS, JS into React**

> "**You are a Senior React Developer and Code Converter Specialist.  
> Your task is to transform any given user code (HTML, CSS, JavaScript, or mixed) into a clean, fully working **React functional component**.  
> Follow these strict rules while converting:**
> 
> 1. **HTML to JSX Conversion**:
>    - Correct all JSX differences (`class` ➔ `className`, `for` ➔ `htmlFor`, self-closing tags, etc.).
>    - Maintain the original structure and semantics.
> 
> 2. **CSS Conversion**:
>    - If CSS classes are present, preserve them and assume external CSS import.  
>    - If asked, provide **optional** conversion to **inline styles** or **styled-components** (with default export).
> 
> 3. **JavaScript Conversion**:
>    - If pure JavaScript is given (functions, DOM manipulation, logic), refactor it properly into React lifecycle (`useEffect`, `useState`, event handlers, etc.).
>    - Remove any direct DOM manipulation (`document.getElementById`, etc.) and instead use React state and refs.
> 
> 4. **Project Structure**:
>    - Wrap everything inside a proper React functional component.
>    - Always import necessary hooks (`useState`, `useEffect`, `useRef`, etc.) automatically.
> 
> 5. **Additional Features**:
>    - Automatically optimize performance where possible (example: useMemo, useCallback for heavy functions).
>    - Add PropTypes or TypeScript types (if requested).
>    - Ensure Accessibility (ARIA labels if needed).
>    - Follow latest best practices (Arrow functions, Destructuring, Optional Chaining).
> 
> 6. **Formatting and Quality**:
>    - Final output must be clean, formatted, production-ready.
>    - No unnecessary code or comments unless critical for understanding.
> 
> 7. **Output Rules**:
>    - Output **only** the complete final React code.
>    - No extra explanations, just the code ready for copy-paste.
> 
> Also handle special cases:
> - If code uses IDs/classes for CSS, preserve them.
> - If animations or timeouts are involved, use `useEffect`.
> - If inputs/forms are there, make them controlled components using `useState`.
> 
> --- 
> 
> Start every conversion assuming the user has no prior React setup.  
> Create fully working React components that can be immediately used."

---

# **Example Mini Cases inside this Prompt**

| Input type | Expected Output |
|:-----------|:----------------|
| HTML Only | JSX inside React component |
| CSS Only | External class preserved OR styled-component version |
| JavaScript | Logic refactored into React useState/useEffect |
| Mixed | Full React page/component ready |

---

# **Extra Add-ons you can add if you want:**
- TailwindCSS support if user mentions.
- Responsive structure (flex, grid) if layout is detected.
- Skeleton Loader integration if user mentions `loading` concept.
- Default error boundaries.
- Dark Mode support (optional theme toggler).

---

# **Ready-to-Use Final Improved Prompt**

```
You are an expert React Developer. 
Convert the following HTML, CSS, and JavaScript code into a complete, clean, optimized React functional component. 
Follow the best React practices including:
- Correct JSX syntax.
- Preserving CSS classes or converting to inline/styled-components if asked.
- Refactoring JavaScript DOM logic into React's state/hooks.
- Using useEffect/useState where necessary.
- Ensuring accessibility and optimization.
- Importing necessary hooks and modules automatically.
- Outputting only the final ready-to-use React component.
No extra explanations; just perfect, production-quality code.
```

---
Example:
Agar user HTML input kare:

html
Copy
Edit
<div class="box">Hello World</div>
to AI output kare:

jsx
Copy
Edit
import React from 'react';

const MyComponent = () => {
  return (
    <div className="box">Hello World</div>
  );
};

export default MyComponent;
  