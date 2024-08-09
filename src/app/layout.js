import { Cairo } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  DirectionProvider,
  createTheme,
} from "@mantine/core";
import { Header } from "@/components/Header/Header.jsx";
import { Footer } from "@/components/Footer/Footer.jsx";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
  variable: "--font-cairo",
});

export const metadata = {
  title: "مؤسسة البراك لدراسات الجدوى - الرئيسية",
  description:
    "الرئيسية نحن في شركة البراك أفضل شركة دراسة جدوى في الوطن العربي نسعى جاهدين إلى أن نوفر لكم خدمات الاستشارية لنساعدكم على صناعة القرار",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    google: "google",
  },
  keywords: ["Next.js", "React", "JavaScript"],
  language: "AR",
  target: "all",
  openGraph: {
    locale: "ar_AR",
    type: "website",
    url: "https://elbrak.com/",
    site_name: "مؤسسة البراك لدراسات الجدوى",

    // title: "مؤسسة البراك لدراسات الجدوى - الرئيسية",
  },
  alternates: {
    canonical: "https://elbrak.com/",
    types: {
      "application/rss+xml": "http://elbrak.com:8080/api/sitemap/index.xml",
    },
  },
  twitter: {
    card: "summary_large_image",
  },
};

const Color1 = [
  "#FFF1DB",
  "#FFF1DB",
  "#FFF1DB",
  "#FFF1DB",
  "#FFF1DB",
  "#FFF1DB",
  "#FFF1DB",
  "#FFF1DB",
  "#FFF1DB",
  "#FFF1DB",
];
const Color2 = [
  "#D4BDAC",
  "#D4BDAC",
  "#D4BDAC",
  "#D4BDAC",
  "#D4BDAC",
  "#D4BDAC",
  "#D4BDAC",
  "#D4BDAC",
  "#D4BDAC",
  "#D4BDAC",
];

const Color3 = [
  "#536493",
  "#536493",
  "#536493",
  "#536493",
  "#536493",
  "#536493",
  "#536493",
  "#536493",
  "#536493",
  "#536493",
];

const Color4 = [
  "#EF5A6F",
  "#EF5A6F",
  "#EF5A6F",
  "#EF5A6F",
  "#EF5A6F",
  "#EF5A6F",
  "#EF5A6F",
  "#EF5A6F",
  "#EF5A6F",
  "#EF5A6F",
];

const theme = createTheme({
  colors: {
    Color1,
    Color2,
    Color3,
    Color4,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={cairo.className}>
        <DirectionProvider>
          <MantineProvider theme={theme}>
            <Header />
            <div className="app">{children}</div>
            <Footer />
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
