import { Outfit, Ovo  } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  
  subsets: ["latin"], weight:["400"]
});


const ovo = Ovo({
  
  subsets: ["latin"], weight:["400"]
});


export const metadata = {
  title: "المهندس محمود محمد | كهربائي وتشطيب شقق وفلل في القاهرة",
  description: "الموقع الرسمي للمهندس محمود محمد – كهربائي متخصص في تأسيس الكهرباء وتشطيب الشقق والفلل في القاهرة والجيزة. خبرة أكثر من 10 سنوات في المجال.",
  keywords: "المهندس محمود محمد, كهربائي, فني كهرباء, مهندس كهرباء في القاهرة, تشطيب شقق, تأسيس كهرباء, جبس بورد, أعمال كهربائية, كهربائي محترف",
  authors: [{ name: "المهندس محمود محمد" }],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="google-site-verification" content="wct9N6PPEePDcfiu5Q91PRaiX7oo6mvqp4AiTz74t4w" />
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
