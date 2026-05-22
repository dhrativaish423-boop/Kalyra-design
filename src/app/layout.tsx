import "./globals.css";

export const metadata = {
  title: "Kalyra Designs",
  description: "Premium Luxury Fashion and Jewelry Blueprints",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
