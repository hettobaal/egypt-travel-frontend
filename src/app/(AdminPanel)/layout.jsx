
import "@/app/globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Wrapper from "@/components/Wrapper";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Dashboard",
  description: "CMS system",
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
};

export default function Layout({ children }) {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnchange
    >
      <Toaster autoClose={10000} position="top-center" />
      <div className="flex flex-col h-screen">
        <div className="flex-none">
          <Header />
        </div>
        <div className="flex flex-row flex-grow overflow-hidden">
          <div className="flex-none h-full overflow-y-auto ">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-grow overflow-y-auto ">
            <Wrapper >
              <div className="min-h-screen">
                {children}
              </div>
            </Wrapper>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>

  );
}
