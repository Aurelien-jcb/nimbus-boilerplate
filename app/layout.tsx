import meta from "@/lib/meta";
import Providers from "@/providers/providers";
import { getLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = meta({
  title: "Next Dashboard Boilerplate",
  description: `This is a dashboard boilerplate with google and github auth, using shadcn ui`,
  openGraphImage: "",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
