import Link from 'next/link';

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-4xl bg-white p-10 shadow-2xl border border-stone-200">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Datenschutz</p>
                    <h1 className="mt-4 text-4xl font-bold text-slate-900">Datenschutzerklärung</h1>
                    <p className="mt-4 text-slate-700 leading-relaxed">
                        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie, wie wir Ihre Daten im Rahmen dieser Website verarbeiten.
                    </p>
                </div>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Verantwortlicher</h2>
                        <p className="text-slate-700 mt-2 leading-relaxed">
                            Verantwortlich für die Datenverarbeitung im Rahmen dieser Website ist Körperarbeit.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Erhobene Daten</h2>
                        <p className="text-slate-700 mt-2 leading-relaxed">
                            Wenn Sie das Kontaktformular nutzen, speichern und verarbeiten wir die von Ihnen eingegebenen Informationen (Name, E-Mail und Nachricht), um Ihre Anfrage zu beantworten.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Zweck der Verarbeitung</h2>
                        <p className="text-slate-700 mt-2 leading-relaxed">
                            Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht ohne Ihre Zustimmung an Dritte weitergegeben. Eine Speicherung erfolgt nur so lange wie nötig.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Cookies</h2>
                        <p className="text-slate-700 mt-2 leading-relaxed">
                            Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools. Technisch notwendige Daten können von Next.js vorübergehend verwaltet werden. Sie können Ihre Cookie-Einstellungen jederzeit über unser Banner anpassen.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">Ihre Rechte</h2>
                        <p className="text-slate-700 mt-2 leading-relaxed">
                            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Kontaktieren Sie uns bitte über das Formular auf der Website.
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
