
import "./globals.css";

export const metadata = {
  title: "Zenvyx — Privacy Center",
  description:
    "Learn about Zenvyx, its Discord bot features, and its privacy practices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
