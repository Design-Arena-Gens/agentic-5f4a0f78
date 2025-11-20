import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Connect Email",
  description: "Connect your email via Google or Microsoft",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="container">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
