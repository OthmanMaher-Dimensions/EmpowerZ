import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export async function generateMetadata() {
  try {
    // Default metadata
    const defaultMeta = {
      title: "EmpowerZ - Your Journey Starts Here",
      description: "Empowering individuals and businesses through expert guidance and support.",
      icons: {
        icon: '/assets/logo.png',
        shortcut: '/assets/logo.png',
        apple: '/assets/logo.png',
        other: {
          rel: 'apple-touch-icon-precomposed',
          url: '/assets/logo.png',
        },
      },
    };

    // Fetch dynamic SEO data
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
    const res = await fetch(`${adminUrl}/api/public/seo`, { next: { revalidate: 60 } });
    if (!res.ok) return defaultMeta;

    const seoMap = await res.json();
    const homeSeo = seoMap['home'];

    if (homeSeo) {
      return {
        ...defaultMeta,
        title: homeSeo.title || defaultMeta.title,
        description: homeSeo.description || defaultMeta.description,
        keywords: homeSeo.keywords || "",
      };
    }

    return defaultMeta;
  } catch (error) {
    console.error("Error fetching SEO:", error);
    return {
      title: "EmpowerZ - Your Journey Starts Here",
      description: "Empowering individuals and businesses through expert guidance and support.",
      icons: {
        icon: '/assets/logo.png',
        shortcut: '/assets/logo.png',
        apple: '/assets/logo.png',
        other: {
          rel: 'apple-touch-icon-precomposed',
          url: '/assets/logo.png',
        },
      },
    };
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-TBS4L5YZPY" />
      <body>
        {children}
        <script src="/burger-handler.js" defer></script>
        <script src="/empower-sliders.js?v=1" defer></script>
        <script src="/form-handler.js" defer></script>
      </body>
    </html>
  );
}
