import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

const inter = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ilemi | Seamless Tenant Managemnt",
  description: "Sofware solution for landlords to manage their tenancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <Toaster closeButton position="top-right" expand={true} richColors />
        {children}
        </body>
    </html>
  );
}
