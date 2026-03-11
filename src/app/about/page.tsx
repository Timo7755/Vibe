export const metadata = {
  title: "About | VIBE",
  description:
    "A learning Next.js project — social feed with auth, posts, and profiles.",
};

function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">About VIBE</h1>

      <p className="text-muted-foreground mb-4">
        VIBE is a learning project built with Next.js. It is a portfolio piece,
        not intended for commercial use. The goal was to practice full-stack
        development with modern tools and patterns.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">Technologies</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
        <li>
          <strong className="text-foreground">Next.js</strong> — App Router,
          Server Components, server actions
        </li>
        <li>
          <strong className="text-foreground">React</strong> — UI and client
          interactivity
        </li>
        <li>
          <strong className="text-foreground">TypeScript</strong> — Type-safe
          codebase
        </li>
        <li>
          <strong className="text-foreground">Clerk</strong> — Authentication
          and user management
        </li>
        <li>
          <strong className="text-foreground">Prisma + PostgreSQL</strong> —
          Database and ORM
        </li>
        <li>
          <strong className="text-foreground">UploadThing</strong> — Image
          uploads for posts
        </li>
        <li>
          <strong className="text-foreground">Tailwind CSS</strong> — Styling
        </li>
        <li>
          <strong className="text-foreground">shadcn/ui (Radix)</strong> —
          Accessible UI components
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-8 mb-2">Skills & concepts</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-1">
        <li>Server and Client Components, server actions</li>
        <li>Auth (Clerk) and syncing users to the database</li>
        <li>CRUD for posts, comments, likes, follows, notifications</li>
        <li>File uploads and image handling</li>
        <li>Responsive layout, route groups, and basic SEO (metadata)</li>
      </ul>
    </div>
  );
}

export default AboutPage;
