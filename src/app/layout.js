import { Playfair_Display, Source_Sans_3, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-accent",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clucky Acres Farm | Fresh Eggs & Farm Goods",
  description: "Fresh from our flock to your table. Explore our farm life, shop fresh eggs, and support our happy chickens and ducks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} ${caveat.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
