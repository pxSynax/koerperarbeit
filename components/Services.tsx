'use client';

import Link from 'next/link';

const services = [
    {
        slug: 'sakralenergetik',
        title: 'Sakralenergetik',
        description: 'Die Sakralenergetik ist eine sanfte, ganzheitliche Körpermethode, die mit rhythmischen Impulsen entlang des Körpers arbeitet.',
        icon: '🔴',
    },
    {
        slug: 'access-bars',
        title: 'Access Bars',
        description: 'Access Bars® ist eine sanfte Entspannungsmethode, bei der 32 Punkte am Kopf achtsam berührt werden.',
        icon: '✨',
    },
    {
        slug: 'kieferbalance-tmj-reset',
        title: 'Kieferbalance & TMJ-Reset',
        description: 'Entspanne Kiefer und Gesichtsmuskulatur durch gezielte Techniken zur Linderung von Verspannungen.',
        icon: '😌',
    },
    {
        slug: 'aromatherapie-aromatouch',
        title: 'Aromatherapie & AromaTouch',
        description: 'Nutze die Kraft ätherischer Öle zur Unterstützung deiner physischen und emotionalen Heilung.',
        icon: '🌿',
    },
    {
        slug: 'kinesiologie',
        title: 'Kinesiologie',
        description: 'Teste und balanciere dein Energiesystem durch Muskeltest und gezielte Körperarbeit.',
        icon: '💪',
    },
    {
        slug: 'kraniosakraltherapie',
        title: 'Kraniosakraltherapie',
        description: 'Arbeite mit subtilen Körperrhythmen zur tiefen Entspannung und ganzheitlichen Heilung.',
        icon: '🧠',
    },
    {
        slug: 'bachblueten-therapie',
        title: 'Bachblüten-Therapie',
        description: 'Behandle emotionale Unausgeglichenheit mit der sanften Kraft der Bachblüten.',
        icon: '🌸',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Meine Leistungen
                    </h2>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                        Wähle aus einer Vielfalt von transformativen Techniken, die dir neue Energie bringen und dein Wohlbefinden stärken.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group block rounded-4xl border border-stone-200 bg-white p-6 sm:p-8 shadow-2xl transition hover:-translate-y-1 hover:shadow-black/10"
                        >
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-300 text-slate-900 text-3xl mb-5 shadow-lg shadow-slate-900/20">
                                {service.icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800">
                                {service.title}
                            </h3>
                            <p className="text-slate-700 leading-relaxed">{service.description}</p>
                            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-slate-900">
                                Mehr erfahren →
                            </div>
                        </Link>
                    ))}
                </div>


            </div>
        </section>
    );
}
