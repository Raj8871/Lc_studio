
'use client';

import Link from 'next/link';
import { CodeXml } from 'lucide-react'; // Using a relevant icon
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <CodeXml className="h-6 w-6 text-accent" />
                        <span className="font-bold text-foreground">React Converter</span>
                    </Link>
                </div>
                <nav className="flex flex-1 items-center space-x-4">
                    <Link
                        href="/"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            pathname === '/' ? 'text-primary' : 'text-muted-foreground'
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href="/converter"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            pathname === '/converter' ? 'text-primary' : 'text-muted-foreground'
                        )}
                    >
                        Converter
                    </Link>
                </nav>
                {/* Optional: Add a theme toggle or other actions here */}
                {/* <Button variant="ghost" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button> */}
            </div>
        </header>
    );
}
