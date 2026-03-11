import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold mb-2">404</h1>
      <p className="text-muted-foreground mb-4">
        Something went wrong, the page you are looking for does not exist.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Back home
      </Link>
    </div>
  );
}
