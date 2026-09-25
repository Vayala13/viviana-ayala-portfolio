/**
 * Shared page chrome — navbar + plaster canvas + "next stop" link onward.
 */
import { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import NextStop from "@/components/NextStop";

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
    <div className="min-h-screen bg-plaster text-ink">
      <Navbar alwaysSolid={!overlayNav} />
      <main className={overlayNav ? undefined : "pt-20"}>
        {children}
        {!overlayNav && <NextStop current={location} />}
      </main>
    </div>
  );
}
