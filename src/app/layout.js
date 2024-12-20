import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";
import { Urbanist } from 'next/font/google'
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${urbanist.variable} `}>
      <body id="container">
        <Toaster autoClose={20000} position="top-center" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
