import "./globals.css";
import CorporateHeader from "../../components/CorporateHeader";
import CorporateFooter from "../../components/CorporateFooter";
import { getDictionary } from "../../lib/getDictionary";

import { Besley, Nunito } from "next/font/google";
import localFont from "next/font/local";

const besley = Besley({ subsets: ["latin"], variable: "--font-besley", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

const avenir = localFont({
  src: [
    { path: "../../public/assets/fonts/AvenirLTStd/AvenirLTStd.ttf", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/AvenirLTStd/AvenirLTStd95Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-avenir",
  display: "swap",
});

export const metadata = {
  title: "Medbookie | One connected platform for health",
  description: "Medbookie brings clinical care, diagnostics and healthcare operations together.",
};

export default async function RootLayout({ children, params }) {
  // Await the params object in Next.js 15+ 
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${avenir.variable} ${besley.variable} ${nunito.variable} medbookie-body font-sans`}>
        <CorporateHeader dict={dict.header} lang={lang} />
        {children}
        <CorporateFooter dict={dict.footer} lang={lang} />
      </body>
    </html>
  );
}