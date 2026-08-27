import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
            <div className="max-w-xl rounded-3xl bg-white p-10 shadow-2xl border border-slate-200 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">Seite nicht gefunden</p>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">404 — Hier gibt es nichts zu sehen.</h1>
                <p className="text-slate-700 mb-6">
                    Die Seite existiert nicht oder wurde verschoben. Gehe zurück zur Startseite, um weiterzugehen.
                </p>
                <Link
                    href="/"
                    className="inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-200 transition"
                >
                    Zur Startseite
                </Link>
            </div>
        </main>
    );
}
