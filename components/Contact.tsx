'use client';

import { useState } from 'react';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const initialFormData: FormData = {
    name: '',
    email: '',
    message: '',
};

export default function Contact() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(data.error || 'Dein Formular konnte nicht gesendet werden.');
            }

            setFormData(initialFormData);
            setStatus({
                type: 'success',
                message: data.message || 'Danke! Deine Nachricht wurde erfolgreich gesendet.',
            });
        } catch (error) {
            setStatus({
                type: 'error',
                message:
                    error instanceof Error
                        ? error.message
                        : 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brown-50">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mb-4">
                        Kontakt
                    </h2>
                    <p className="text-lg text-brown-600">
                        Bist du bereit, deine Heilungsreise zu beginnen? Ich freue mich, von dir zu hören.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
                    <div className="mb-6">
                        <label className="block text-brown-900 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:outline-none focus:border-brown-600 focus:ring-2 focus:ring-brown-200"
                            placeholder="Dein Name"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-brown-900 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:outline-none focus:border-brown-600 focus:ring-2 focus:ring-brown-200"
                            placeholder="deine@email.com"
                            required
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-brown-900 font-semibold mb-2">Nachricht</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:outline-none focus:border-brown-600 focus:ring-2 focus:ring-brown-200 resize-none"
                            placeholder="Erzähle mir von deinen Wünschen oder deinen Fragen..."
                            required
                        />
                    </div>

                    {status && (
                        <p
                            aria-live="polite"
                            className={`mb-6 rounded-lg px-4 py-3 text-sm ${status.type === 'success'
                                    ? 'bg-green-50 text-green-700'
                                    : 'bg-red-50 text-red-700'
                                }`}
                        >
                            {status.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-amber-300 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70 text-brown-950 font-semibold py-3 rounded-lg transition"
                    >
                        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                    </button>
                </form>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="text-center">
                        <div className="text-3xl text-brown-600 mb-2">📧</div>
                        <p className="text-brown-700 font-semibold">Email</p>
                        <p className="text-brown-600">maria.woynar@gmail.com</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl text-brown-600 mb-2">📱</div>
                        <p className="text-brown-700 font-semibold">Telefon</p>
                        <p className="text-brown-600">+43 664 123456</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
