import { Inter } from "next/font/google";
import "@/styles/globals.css";
import RecoilProvider from "@/libs/recoil/recoil-provider";
import NextThemesProvider from "@/libs/next-themes/next-themes-provider";

export { metadata } from "@/metadata/layout";

const interVar = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilProvider>
      <html lang="ko">
        <body className={`${interVar.className}`}>
          <NextThemesProvider>{children}</NextThemesProvider>
        </body>
      </html>
    </RecoilProvider>
  );
}
