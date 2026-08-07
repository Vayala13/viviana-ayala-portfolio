/**
 * Shared page chrome — navbar + dark canvas.
 */
import { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";

export default function PageShell({
  children,
  overlayNav = false,
}: {
  children: React.ReactNode;
  /** Home hero sits under a transparent nav; other pages need top padding */
  overlayNav?: boolean;
}) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e2e8f0]">
      <Navbar alwaysSolid={!overlayNav} />
      <main className={overlayNav ? undefined : "pt-16"}>{children}</main>
    </div>
  );
}
