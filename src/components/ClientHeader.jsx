"use client";

import dynamic from "next/dynamic";

const SiteHeader = dynamic(() => import("./SiteHeader"), {
  ssr: false,
});

export default function ClientHeader() {
  return <SiteHeader />;
}
