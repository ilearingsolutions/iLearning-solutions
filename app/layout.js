import { Roboto } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "700"], // Specify desired weights (e.g., regular and bold)
  subsets: ["latin"], // Specify desired subsets
  variable: "--font-roboto", // Optional: define a CSS variable name
  display: "swap", // Optional: control font loading behavior
});

export const metadata = {
  title: "Ilearnig solutions",
  description: "ePlatform for learning",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          suppressHydrationWarning
          className={`${roboto.className} antialiased text-gray-700`}
        >
          <Toaster />

          <AppContextProvider>
            {/* <Navbar /> */}
            {children}
            {/* <Footer /> */}
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
