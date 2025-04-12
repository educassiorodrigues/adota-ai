import type { Metadata } from "next";
import "./globals.css";
import { Container } from "./components/container/Container";
import HeaderMenu from "./components/root/header-menu/HeaderMenu";
import HeaderTop from "./components/root/header-top/HeaderTop";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Adota Aí",
  description: "Adote um pet e ganhe um amigo para a vida toda!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <CartProvider>
          <Container>
            <header>
              <HeaderTop />
              <HeaderMenu />
            </header>

            <main>
              {children}
            </main>
          </Container>
        </CartProvider>
      </body>
    </html>
  );
}
