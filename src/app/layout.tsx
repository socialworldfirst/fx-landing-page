import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stop Losing Margins on FX | WorldFirst for Importers",
  description: "Banks hide 2-4% in every international payment. WorldFirst shows importers the real rate and gets your money to China the same day. 40+ currencies, forward contracts, same-day CNY.",
  openGraph: {
    title: "Stop Losing Margins on FX | WorldFirst for Importers",
    description: "Banks hide 2-4% in every international payment. WorldFirst shows importers the real rate and gets your money to China the same day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
