import { Metadata } from "next/types";
import "./globals.css";
import Header from "@/components/layouts/header/Header";

export const metadata: Metadata = {
  title: "Blazetech Org",
  description: "Web Design and Product Marketing Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-barba="wrapper">
        <Header />
        {children}
      </body>
    </html>
  );
}
