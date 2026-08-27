'use client';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden py-20 sm:py-28"
            style={{ background: 'linear-gradient(180deg, #f7ead6 0%, #e2c596 45%, #be8e58 100%)' }}
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(circle at top left, rgba(255,215,150,0.22), transparent 22%), radial-gradient(circle at bottom right, rgba(255,255,255,0.12), transparent 26%)' }}
            />
            <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-950 mb-6 tracking-tight">
                    Entdecke deine innere Heilung
                </h1>
                <p className="text-lg sm:text-xl text-brown-950 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Transformiere deine Energie, heile deinen Körper und erhebe dein Bewusstsein mit kraftvollen energetischen Methoden – individuell und tiefgreifend.
                </p>
                <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => {
                            const element = document.getElementById('services');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-amber-300 text-brown-950 px-8 py-3 rounded-full font-semibold transition hover:bg-amber-200 shadow-lg shadow-brown-900/20 text-lg"
                    >
                        Leistungen entdecken
                    </button>

                </div>
            </div>
        </section>
    );
}
