import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type ContactPayload = {
    name: string;
    email: string;
    message: string;
};

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
    try {
        const payload = (await request.json().catch(() => null)) as ContactPayload | null;

        if (!payload) {
            return NextResponse.json(
                { error: 'Bitte sende ein gültiges Formular.' },
                { status: 400 }
            );
        }

        const name = payload.name?.trim() ?? '';
        const email = payload.email?.trim() ?? '';
        const message = payload.message?.trim() ?? '';

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Bitte fülle alle Felder aus.' },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
                { status: 400 }
            );
        }

        if (
            !process.env.SMTP_HOST ||
            !process.env.SMTP_USER ||
            !process.env.SMTP_PASS
        ) {
            console.log('Contact form received without SMTP configuration:', {
                name,
                email,
                message,
            });

            return NextResponse.json(
                {
                    message:
                        'Danke! Deine Nachricht wurde empfangen. Bitte konfiguriere SMTP, damit sie versendet wird.',
                },
                { status: 200 }
            );
        }

        const port = Number(process.env.SMTP_PORT ?? 587);
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number.isNaN(port) ? 587 : port,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.CONTACT_TO || process.env.SMTP_USER,
            replyTo: email,
            subject: `Neue Kontaktanfrage von ${name}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>E-Mail:</strong> ${email}</p>
                <p><strong>Nachricht:</strong></p>
                <p>${message.replace(/\n/g, '<br />')}</p>
            `,
        });

        return NextResponse.json(
            { message: 'Danke! Deine Nachricht wurde erfolgreich versendet.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form submission failed:', error);
        return NextResponse.json(
            { error: 'Dein Formular konnte gerade nicht gesendet werden. Bitte versuche es später erneut.' },
            { status: 500 }
        );
    }
}
