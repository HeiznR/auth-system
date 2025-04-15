"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SafeThemeProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
