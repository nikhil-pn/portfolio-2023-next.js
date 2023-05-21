import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Nikhil PN | Portfolio",
//   description: "Welcome to my personal Portfolio Website",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Nikhil PN | Portfolio Website | FullStack Developer, Freelancer, and
          Blockchain
        </title>
        <meta
          name="description"
          content="Welcome to Nikhil PN's portfolio website. I'm a FullStack Freelance Developer providing top-notch web and android solutions. With a passion for blockchain technology and programming. Visit nikhilpn.com to hire me or learn more"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Work+Sans:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://www.nikhilpn.com/" />
        <link rel="alternate" href="https://www.nikhilpn.com/" hreflang="en" />


        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
