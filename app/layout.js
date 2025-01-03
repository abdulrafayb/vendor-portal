import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vendor Portal",
  description: "Kaispe Vendor Portal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
