import Link from 'next/link';
import { services } from '@/lib/services';

export default function ServicesIndexPage() {
    return (
        <>
            <main className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-10">
                        <div className="text-center mb-10">
                            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Leistungen</p>
                            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4">Meine Angebote</h1>
                            <p className="text-slate-700 mt-4 max-w-3xl mx-auto">
                                Klicke auf eine Leistung, um mehr über die Methode, den Ablauf und die Wirkung zu erfahren.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="group block rounded-3xl border border-stone-200 bg-stone-50 p-6 transition hover:border-stone-300 hover:bg-stone-100"
                                >
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h2 className="text-2xl font-semibold text-slate-900 mb-2 group-hover:text-slate-800">
                                        {service.title}
                                    </h2>
                                    <p className="text-slate-700 leading-relaxed">{service.description}</p>
                                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-slate-900">
                                        Mehr erfahren →
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
