import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rel's portfolio",
  description: "live, laugh, love, code, photograph.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
