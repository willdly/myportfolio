import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William Ly | Portfolio",
  description: "William is a dedicated and hard-working aspiring software engineer, committed to continuous learning " +
      "and self-improvement, with a strong passion for leveraging technology to drive business growth and enhance " +
      "user experiences through innovative problem-solving and effective teamwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-gray-50 text-gray-950 relative h-[5000px]'}>
        <div className={"bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"}></div>
        <div className={"bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"}></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
