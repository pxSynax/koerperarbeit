'use client';

const pricingPlans = [
    {
        name: 'Einzelsitzung',
        price: '80€',
        duration: '60 Minuten',
        description: 'Ideal um eine Methode kennenzulernen',
        features: [
            '60 Minuten persönliche Sitzung',
            'Individuelle Beratung und Behandlung',
            'Detaillierte Empfehlungen für dich',
            'Nachbesprechung und Tipps',
        ],
    },
    {
        name: 'Paket 4er',
        price: '280€',
        duration: '4 × 60 Min',
        description: 'Beliebt - Sparen Sie 12%',
        features: [
            'Vier aufeinander aufbauende Sitzungen',
            'Tiefere Heilung und Transformation',
            'Fortschrittsbeobachtung und Anpassungen',
            'Bevorzugte Terminvergabe',
            'Kostenlose E-Mail-Unterstützung',
        ],
        highlighted: true,
    },
    {
        name: 'Monatspaket',
        price: '280€',
        duration: 'Bis zu 4 Sitzungen',
        description: 'Beste Wertung - Sparen Sie 12%',
        features: [
            'Bis zu 4 Sitzungen pro Monat',
            'Kontinuierliche energetische Unterstützung',
            'Flexible Terminvergabe',
            'Vertiefte Zusammenarbeit',
            'Persönliche Begleitung deiner Heilung',
            'Priorität bei Buchungen',
        ],
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mb-4">
                        Preise & Pakete
                    </h2>
                    <p className="text-lg text-brown-600 max-w-2xl mx-auto">
                        Flexible Optionen für deine Heilungsreise
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-lg transition transform hover:scale-105 ${plan.highlighted
                                ? 'bg-brown-600 text-white shadow-xl md:scale-105 border-2 border-brown-700'
                                : 'bg-brown-50 text-brown-900 border border-brown-200'
                                }`}
                        >
                            <div className="p-6 sm:p-8">
                                <h3
                                    className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-brown-900'
                                        }`}
                                >
                                    {plan.name}
                                </h3>
                                <div
                                    className={`text-4xl font-bold mb-2 ${plan.highlighted ? 'text-yellow-100' : 'text-brown-600'
                                        }`}
                                >
                                    {plan.price}
                                </div>
                                <p
                                    className={`text-sm mb-6 ${plan.highlighted ? 'text-brown-100' : 'text-brown-600'
                                        }`}
                                >
                                    {plan.duration}
                                </p>
                                <p
                                    className={`text-sm mb-6 font-medium ${plan.highlighted ? 'text-brown-100' : 'text-brown-700'
                                        }`}
                                >
                                    {plan.description}
                                </p>

                                <button
                                    className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${plan.highlighted
                                        ? 'bg-white text-brown-600 hover:bg-brown-50'
                                        : 'bg-brown-600 text-white hover:bg-brown-700'
                                        }`}
                                >
                                    Jetzt buchen
                                </button>

                                <div className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start gap-3">
                                            <span
                                                className={`text-lg mt-0.5 ${plan.highlighted ? 'text-yellow-100' : 'text-brown-600'
                                                    }`}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-brown-50 rounded-lg p-6 sm:p-8 text-center border border-brown-200">
                    <p className="text-brown-700 mb-4">
                        Du wünschst dir ein individuelles Paket? Lass uns zusammen einen persönlichen Plan für deine Heilungsreise erstellen.
                    </p>
                    <button className="text-brown-600 hover:text-brown-900 font-semibold underline">
                        Kontaktiere mich für individuelle Vereinbarungen
                    </button>
                </div>
            </div>
        </section>
    );
}
