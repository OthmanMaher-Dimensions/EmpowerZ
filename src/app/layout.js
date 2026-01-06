import "./globals.css";

export const metadata = {
  title: "EmpowerZ - Your Journey Starts Here",
  description: "Empowering individuals and businesses through expert guidance and support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
