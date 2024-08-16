import NextAuthProvider from "@/providers/next-auth-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import NextIntlProvider from "./next-intl-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlProvider>
      <NextAuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </NextAuthProvider>
    </NextIntlProvider>
  );
}
