import Link from 'next/link';

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-4xl bg-white p-10 shadow-2xl border border-stone-200">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Impressum</p>
                    <h1 className="mt-4 text-4xl font-bold text-slate-900">Unternehmensangaben</h1>
                    <p className="mt-4 text-slate-700 leading-relaxed">
                        Diese Seite gehört zu Körperarbeit. Sie bietet energetische Heilmethoden, Beratungen und individuelle Behandlungen an.
                    </p>
                </div>

                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Anbieter</h2>
                        <p className="text-slate-700 mt-2">Körperarbeit</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Kontakt</h2>
                        <p className="text-slate-700 mt-2">Kontakt über das Formular auf dieser Website.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Inhaltlich verantwortlich</h2>
                        <p className="text-slate-700 mt-2">Verantwortlich für die Inhalte: Körperarbeit</p>
                    </div>
                </section>

                <section className="mt-10 space-y-4">
                    <h2 className="text-2xl font-semibold text-slate-900">Haftungshinweis</h2>
                    <p className="text-slate-700 leading-relaxed">
                        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                    </p>
                </section>

                <div className="mt-10 text-sm text-slate-600">
                    <p>Falls Sie konkrete Angaben zur Anschrift oder weiteren rechtlichen Informationen wünschen, ergänze diese bitte in der Betreiberangabe.</p>
                </div>

                <div className="mt-8">
                    <Link href="/" className="inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-200 transition">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </main>
    );
}
