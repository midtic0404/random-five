export const metadata = {
  title: 'Random Numbers App',
  description: 'A simple Next.js app that displays 5 random numbers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
