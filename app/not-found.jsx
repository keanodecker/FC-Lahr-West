import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Seite nicht gefunden</p>
        <Link
          href="/"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
