export default function About() {
    return (
        <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brown-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mb-8 text-center">
                    Über mich
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div
                            className="w-full h-80 rounded-lg shadow-lg"
                            style={{ background: 'linear-gradient(135deg, #c79e75 0%, #7f4f27 100%)' }}
                        />
                    </div>

                    <div>
                        <p className="text-lg text-brown-700 mb-6 leading-relaxed">
                            Mit jahrelanger Erfahrung in energetischen Heilmethoden bin ich leidenschaftlich dabei, Menschen auf ihrem Weg zu innerer Balance und ganzheitlicher Heilung zu begleiten.
                        </p>

                        <p className="text-lg text-brown-700 mb-6 leading-relaxed">
                            Meine eigene spirituelle Reise hat mir ein tiefes Verständnis für Energiearbeit und den menschlichen Körper vermittelt. Seitdem habe ich umfangreiche Schulungen in verschiedenen Heilmodalitäten absolviert und vielen Klienten geholfen, transformative Erlebnisse zu erleben.
                        </p>

                        <p className="text-lg text-brown-700 mb-8 leading-relaxed">
                            Ich praktiziere einen ganzheitlichen Ansatz zur Gesundheit und Wellness – mit Fokus auf Körper, Geist und Seele. Jede Sitzung wird individuell nach deinen Bedürfnissen und deinem persönlichen Weg gestaltet.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="text-brown-600 text-xl">✓</span>
                                <span className="text-brown-700">Zertifiziert in mehreren Heilverfahren</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brown-600 text-xl">✓</span>
                                <span className="text-brown-700">Umfangreiche praktische Erfahrung</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brown-600 text-xl">✓</span>
                                <span className="text-brown-700">Viele zufriedene Klienten</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brown-600 text-xl">✓</span>
                                <span className="text-brown-700">Mitfühlend und intuitiver Ansatz</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
