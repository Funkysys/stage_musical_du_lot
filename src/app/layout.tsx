import Navbar from "@/components/Navbar";
import DataProvider from "@/utils/dataProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-geist-roboto",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stage Musical Du Lot",
  description:
    "Rejoignez le Stage Musical du Lot, un événement unique autour des musiques improvisées. Explorez votre créativité dans un cadre bienveillant. Hâte de vous y voir !",
  openGraph: {
    title: "Stage Musical Du Lot",
    description:
      "Rejoignez le Stage Musical du Lot, un événement unique autour des musiques improvisées. Explorez votre créativité dans un cadre bienveillant. Hâte de vous y voir !",
    url: "https://stagemusical.fr",
    siteName: "Stage Musical Du Lot",
    images: [
      {
        url: "https://stagemusicaldulot.fr/assets/images/stage.png",
        width: 1200,
        height: 630,
        alt: "Stage Musical Du Lot",
      },
    ],
    locale: "fr-FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stage Musical Du Lot",
    description:
      "Rejoignez le Stage Musical du Lot, un événement unique autour des musiques improvisées. Explorez votre créativité dans un cadre bienveillant. Hâte de vous y voir !",
    images: [
      {
        url: "https://stagemusicaldulot.fr/assets/images/stage.png",
        width: 1200,
        height: 630,
        alt: "Stage Musical Du Lot",
      },
    ],
  },
  icons: {
    icon: "https://stagemusicaldulot.fr/assets/images/stage.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${roboto.variable} antialiased`}
      >
        <DataProvider>
          <Navbar />
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
