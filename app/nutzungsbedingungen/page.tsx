import Link from 'next/link';

export default function NutzungsbedingungenPage() {
    return (
        <main className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-4xl bg-white p-10 shadow-2xl border border-stone-200">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Nutzungsbedingungen</p>
                    <h1 className="mt-4 text-4xl font-bold text-slate-900">Vertrags- und Nutzungsbedingungen</h1>
                    <p className="mt-4 text-slate-700 leading-relaxed">
                        Diese Website dient der Information über die Leistungen von Körperarbeit. Sie ersetzt keine professionelle medizinische oder therapeutische Beratung.
                    </p>
                </div>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Nutzungszweck</h2>
                        <p className="text-slate-700 mt-2 leading-relaxed">
                            Die Inhalte dieser Website sind ausschließlich zur persönlichen Information gedacht. Der Besuch und die Nutzung der Seiten erfolgen auf eigene Verantwortung.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Kontaktanfragen</h2>
                        <p className="text-slate-700 mt-2 leading-relaxed">
                            Kontaktanfragen über das Formular werden von uns verarbeitet, um Ihre Anfrage zu beantworten. Bitte geben Sie nur notwendige Informationen an.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Haftung</h2>
                        <p className="text-slate-700 mt-2 leading-relaxed">
                            Für Schäden, die aus der Nutzung dieser Website entstehen, übernehmen wir keine Haftung, es sei denn, diese beruhen auf vorsätzlichem oder grob fahrlässigem Verhalten.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Änderungen</h2>
                        <p className="text-slate-700 mt-2 leading-relaxed">
                            Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. Die jeweils aktuelle Fassung gilt ab der Veröffentlichung auf dieser Website.
                        </p>
                    </div>
                </section>

                <div className="mt-10">
                    <Link href="/" className="inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-200 transition">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </main>
    );
}
