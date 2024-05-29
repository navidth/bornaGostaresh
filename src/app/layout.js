import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import localFont from "next/font/local";
import Providers from "@/components/Redux/Providers";

export const metadata = {
  title: "Bornagostarsh",
  description: "Generated by create next app",
};
export const IranSens = localFont({
  src:"../../public/fonts/IRANSansWeb.ttf"
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={IranSens.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
