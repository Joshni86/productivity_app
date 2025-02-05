import { UserProvider } from '@auth0/nextjs-auth0/client';

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from './components/navigation/navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffee",
  description: "A productivity website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://www.google.com/imgres?q=cofee&imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F01%2F62%2F74%2F67%2F360_F_162746788_uxm2CkE5xQq2fy7DVJASe40lMcvSQ52A.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcofee&docid=WcLgNJtx0yXwoM&tbnid=Rktys9eRqJxK9M&vet=12ahUKEwj8xe-GuaqLAxXyd2wGHcrdGwQQM3oECBkQAA..i&w=541&h=360&hcb=2&ved=2ahUKEwj8xe-GuaqLAxXyd2wGHcrdGwQQM3oECBkQAA" />

      </head>
      <UserProvider>
      <body className={inter.className}>
        <Navbar />
       {children}
        </body>
      </UserProvider>

    </html>
  );
}
