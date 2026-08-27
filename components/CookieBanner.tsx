'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookieConsent';

export default function CookieBanner() {
    const [consent, setConsent] = useState<string | null>(null);

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        setConsent(stored);
    }, []);

    if (consent !== null) {
        return null;
    }

    function acceptCookies() {
        window.localStorage.setItem(STORAGE_KEY, 'accepted');
        setConsent('accepted');
    }

    function declineCookies() {
        window.localStorage.setItem(STORAGE_KEY, 'declined');
        setConsent('declined');
    }

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-slate-950 text-white shadow-2xl">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="space-y-2 text-sm text-slate-200">
                    <p className="font-semibold text-white">Cookie-Einstellungen</p>
                    <p>
                        Diese Website verwendet derzeit keine Tracking- oder Analyse-Cookies. Technisch notwendige Browserdaten können jedoch für den Betrieb von Next.js genutzt werden.
                    </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                        href="/datenschutz"
                        className="rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
                    >
                        Datenschutz lesen
                    </Link>
                    <button
                        type="button"
                        onClick={acceptCookies}
                        className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-200"
                    >
                        Cookies akzeptieren
                    </button>
                    <button
                        type="button"
                        onClick={declineCookies}
                        className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
                    >
                        Ablehnen
                    </button>
                </div>
            </div>
        </div>
    );
}
