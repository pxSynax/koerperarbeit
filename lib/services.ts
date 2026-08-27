export type Service = {
    slug: string;
    title: string;
    description: string;
    icon: string;
    details: string;
    benefitsTitle: string;
    benefits: string[];
    price: string;
    backgroundColor: string;
};

export const services: Service[] = [
    {
        slug: 'sakralenergetik',
        title: 'Sakralenergetik',
        description: 'Die Sakralenergetik ist eine sanfte, ganzheitliche Körpermethode, die mit rhythmischen Impulsen entlang des Körpers arbeitet.',
        icon: '🔴',
        price: '75€ pro Sitzung',
        backgroundColor: '#ef4444',
        details:
            'Durch feine, wiederkehrende Bewegungen wird der Körper eingeladen, Spannungen loszulassen und in einen Zustand tiefer Entspannung zu finden. Dabei kann das Nervensystem beruhigt und das natürliche Körpergefühl unterstützt werden. Die Behandlung erfolgt bekleidet und in ruhiger Atmosphäre. Viele Menschen empfinden die Anwendung als wohltuend, entspannend und ausgleichend. Im Mittelpunkt steht dabei immer der Mensch als Ganzes – Körper, innere Balance und Wohlbefinden.Die Methode ersetzt keine medizinische oder therapeutische Behandlung, kann jedoch eine wohltuende Ergänzung sein.',
        benefitsTitle: 'Sakralenergetik kann unterstützend eingesetzt werden bei:',
        benefits: [
            'körperlichen Spannungen',
            'Stress und innerer Unruhe',
            'Erschöpfung und Anspannung',
            'eingeschränktem Wohlbefinden',
            'dem Wunsch nach mehr Entspannung und Körperbewusstsein'
        ],
    },
    {
        slug: 'access-bars',
        title: 'Access Bars',
        description: 'Access Bars® ist eine sanfte Entspannungsmethode, bei der 32 Punkte am Kopf achtsam berührt werden.',
        icon: '✨',
        price: '50–100€ pro Sitzung',
        backgroundColor: '#2dd4bf',
        details: 'Diese sogenannten „Bars“ stehen mit verschiedenen Lebensbereichen in Verbindung – wie Gedanken, Emotionen, Stress, Kontrolle oder innere Begrenzungen. Durch die leichte Berührung können sich festgehaltene Spannungen lösen und der Kopf wird spürbar ruhiger. Viele Menschen erleben dabei tiefe Entspannung, mehr Klarheit und ein Gefühl von innerer Weite.',
        benefitsTitle: 'Access Bars® kann dich dabei unterstützen:',
        benefits: [
            'Stress abzubauen',
            'Gedanken zur Ruhe kommen zu lassen',
            'leichter loszulassen',
            'mehr Gelassenheit und Lebensfreude zu spüren',
        ],
    },
    {
        slug: 'kieferbalance-tmj-reset',
        title: 'Kieferbalance & TMJ-Reset',
        description: 'Entspanne Kiefer und Gesichtsmuskulatur durch gezielte Techniken zur Linderung von Verspannungen.',
        icon: '😌',
        price: '50–100€ pro Sitzung',
        backgroundColor: '#818cf8',
        details:
            'Die Kieferbalance und das TMJ-Reset helfen dir, Verspannungen im Kiefer, in Hals und Nacken zu lösen. Durch sanfte manuelle Techniken werden Verklebungen und Blockaden des Kiefergelenks gelöst, was oft sofortige Erleichterung bringt.',
        benefitsTitle: 'Was diese Sitzung bewirkt',
        benefits: [
            'Weniger Kiefer- und Nackenschmerzen',
            'Bessere Kaumuskulatur-Funktion',
            'Entlastung bei Zähneknirschen',
            'Mehr Ruhe im gesamten Kopfbereich',
        ],
    },
    {
        slug: 'aromatherapie-aromatouch',
        title: 'Aromatherapie & AromaTouch',
        description: 'Nutze die Kraft ätherischer Öle zur Unterstützung deiner physischen und emotionalen Heilung.',
        icon: '🌿',
        price: '50–100€ pro Sitzung',
        backgroundColor: '#34d399',
        details: 'Aromatherapie und AromaTouch kombinieren die Kraft reiner ätherischer Öle mit sanften Berührungen. Jede Sitzung wird eingesetzt, um Körper, Geist und Emotionen ins Gleichgewicht zu bringen und das allgemeine Wohlbefinden zu stärken.',
        benefits: [
            'Emotionale Ausgeglichenheit',
            'Stärkung des Immunsystems',
            'Stressreduktion',
            'Tiefe Entspannung und Erdung',
        ],
        benefitsTitle: ""
    },
    {
        slug: 'kinesiologie',
        title: 'Kinesiologie',
        description: 'Teste und balanciere dein Energiesystem durch Muskeltest und gezielte Körperarbeit.',
        icon: '💪',
        price: '50–100€ pro Sitzung',
        backgroundColor: '#f97316',
        details: 'Kinesiologie nutzt Muskeltests als Rückmeldung deines Körpers, um energetische Ungleichgewichte zu erkennen. Gemeinsam finden wir blockierende Themen und arbeiten daran, dein System stärker in Balance zu bringen.',
        benefits: [
            'Energetische Balance',
            'Klärung emotionaler Themen',
            'Unterstützung bei körperlichen Beschwerden',
            'Mehr innere Stabilität',
        ],
        benefitsTitle: ""
    },
    {
        slug: 'kraniosakraltherapie',
        title: 'Kraniosakraltherapie',
        description: 'Arbeite mit subtilen Körperrhythmen zur tiefen Entspannung und ganzheitlichen Heilung.',
        icon: '🧠',
        price: '50–100€ pro Sitzung',
        backgroundColor: '#60a5fa',
        details: 'Kraniosakraltherapie ist eine sehr sanfte Methode, die auf das craniosacrale System wirkt. Sie kann körperliche Spannungen lösen, den Energiefluss verbessern und das Nervensystem beruhigen.',
        benefits: [
            'Tiefe körperliche Entspannung',
            'Verbesserung des Energieflusses',
            'Regeneration des Nervensystems',
            'Unterstützung bei chronischen Beschwerden',
        ],
        benefitsTitle: ""
    },
    {
        slug: 'bachblueten-therapie',
        title: 'Bachblüten-Therapie',
        description: 'Behandle emotionale Unausgeglichenheit mit der sanften Kraft der Bachblüten.',
        icon: '🌸',
        price: '50–100€ pro Sitzung',
        backgroundColor: '#f472b6',
        details: 'Die Bachblüten-Therapie unterstützt emotionale Heilung durch sanfte Essenzen. Sie ist besonders hilfreich, wenn du innere Ruhe willst und emotionale Muster verändern möchtest.',
        benefits: [
            'Emotionale Klarheit',
            'Innere Ruhe',
            'Stärkung der Selbstwahrnehmung',
            'Harmonisierung von Stimmungsschwankungen',
        ],
        benefitsTitle: ""
    },
];

export function getServiceBySlug(slug: string) {
    return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
    return services.map((service) => service.slug);
}
