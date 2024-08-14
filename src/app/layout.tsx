import type { Metadata } from "next";
import { Inter, Outfit} from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import TanstackQueryClientProvider from "@/providers/TanstackQueryClientProvider";


const outfit = Outfit({
  subsets: ["latin"],
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
      <body className={`font-outfit`}>
        <TanstackQueryClientProvider>
          <NextTopLoader />
          <Toaster closeButton position="top-center" expand={true} richColors />
          {children}
        </TanstackQueryClientProvider>
      </body>
    </html>
  );
}
