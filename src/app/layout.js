import "./globals.css";

export const metadata = {
  title: "EmpowerZ - Your Journey Starts Here",
  description: "Empowering individuals and businesses through expert guidance and support.",
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script src="/burger-handler.js" defer></script>
        <script src="/empower-sliders.js?v=1" defer></script>
      </body>
    </html>
  );
}
