import Link from "next/link";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/lib/sync-user";
import { Separator } from "@radix-ui/react-separator";

async function Navbar() {
  const user = await currentUser();
  if (user) await syncUser(); // POST sync the user data to the database
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              VIBE
            </Link>
            <Separator className="h-4 mx-12" orientation="vertical" />
            <Link
              href="/about"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              About
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
