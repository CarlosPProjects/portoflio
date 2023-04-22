import "./globals.css";

export const metadata = {
  title: "Carlos Portfolio",
  description: "My portfolio made with Next.js and Tailwind CSS",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
