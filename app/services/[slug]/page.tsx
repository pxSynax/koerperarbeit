import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/services';
import HeaderServices from '@/components/HeaderServices';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const pageBackground = service.backgroundColor ?? '#f8fafc';

    return (
        <>
            <HeaderServices />
            <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: pageBackground }}>
                <div className="max-w-4xl mx-auto overflow-hidden rounded-4xl border border-stone-200 bg-white shadow-2xl">
                    <div className="p-10 bg-white shadow-sm border-b border-stone-200">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-8">
                            <div className="flex items-center gap-4 min-w-0">
                                <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-white text-4xl shadow-lg shadow-slate-900/20">
                                    {service.icon}
                                </span>
                                <div className="min-w-0">
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Leistung</p>
                                    <h1 className="text-4xl font-bold mt-2 text-slate-900 break-words">
                                        {service.title}
                                    </h1>
                                </div>
                            </div>
                            <div className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-900">
                                {service.price}
                            </div>
                        </div>
                        <p className="max-w-3xl text-base leading-relaxed text-slate-700">
                            {service.description}
                        </p>
                    </div>

                    <div className="p-10">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900">Details zur Sitzung</h2>
                                <p className="text-slate-700 mt-2">Preisrahmen: {service.price}</p>
                            </div>
                            <Link href="/" className="text-slate-700 font-semibold hover:text-slate-900">
                                Zurück zur Startseite
                            </Link>
                        </div>

                        <p className="text-slate-700 leading-8 mb-8">{service.details}</p>

                        <div className="rounded-3xl bg-stone-100 border border-stone-200 p-6">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.benefitsTitle}</h3>
                            <ul className="space-y-3 text-slate-700">
                                {service.benefits.map(benefit => (
                                    <li key={benefit} className="flex gap-3 items-start">
                                        <span className="mt-1 text-slate-700">•</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
