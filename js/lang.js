const translations = {
    es: {
        headerText: "Mi nombre es Jonay Santana, soy desarrollador front-end con base en Telde, Gran Canaria, España. He trabajado en una amplia variedad de proyectos front-end, desde aplicaciones para streaming, banca, museos, entre muchas otras, con un enfoque en crear interfaces limpias y bien elaboradas que no solo se vean geniales, sino que también ofrezcan una experiencia de usuario fluida e intuitiva.",
        profileTitle: "Perfil Profesional",
        projectTitles: [
            "Guaguas GLOBAL",
            "Guaguas LPA",
            "Museo Canario",
            "Visitr",
            "Paymaster Virtual (AUTGC)",
            "Servicio Venta y Recarga Pidion Lanzarote"
        ],
        projectDescs: [
            "Guaguas GLOBAL es la aplicación esencial para todos los viajeros que desean mantenerse informados sobre el estado del servicio de autobuses en tiempo real. Ya sea que estés planeando tu próximo viaje o esperando tu autobús, Guaguas GLOBAL te proporciona toda la información que necesitas para que tu experiencia de viaje sea fluida y sin estrés.",
            "Guaguas LPA es la aplicación esencial para todos los viajeros que desean mantenerse informados sobre el estado del servicio de autobuses en tiempo real. Ya sea que estés planeando tu próximo viaje o esperando tu autobús, Guaguas LPA te proporciona toda la información que necesitas para que tu experiencia de viaje sea fluida y sin estrés.",
            "El Museo Canario es una sociedad científica y cultural fundada en Las Palmas de Gran Canaria en 1879 a iniciativa de varios miembros de la burguesía local encabezados por el Dr. Gregorio Chil y Naranjo y el historiador y notario Agustín Millares Torres.",
            "Explora un mundo de maravillas con Visitr, la aplicación fácil de usar para museos, puntos culturales, parques y centros turísticos. Perfecta tanto para entusiastas del viaje como para aventureros locales, Visitr transforma la manera en que experimentas el mundo.",
            "Servicio de compras y recargas de tarjetas físicas desde dispositivos móviles Android o Cajeros situados en toda la isla de la empresa de Transporte público de Gran Canaria gestionado por la AUTGC \"Autoridad única del transporte de Gran Canaria\".",
            "Servicio interno para la venta y recargas de soportes (Tarjetas socios) de la empresa de Transporte público de Lanzarote, en el cual se genera un servicio web basado en tecnología java para realizar la comunicación."
        ],
        about: [
            "Soy un desarrollador con una profunda pasión por la creación de experiencias digitales impactantes y efectivas. Mi trayectoria profesional me ha permitido adquirir una amplia experiencia en el desarrollo de aplicaciones móviles, tanto en plataformas Android como iOS. En el ámbito de Android, he trabajado en el diseño e implementación de aplicaciones que no solo cumplen con los requisitos técnicos, sino que también ofrecen una experiencia de usuario fluida y agradable. En el entorno iOS, he desarrollado aplicaciones que se integran perfectamente con el ecosistema Apple, aprovechando las mejores prácticas de diseño y funcionalidad.",
            "Además del desarrollo móvil, tengo una sólida base en el backend, donde he trabajado extensamente en la creación de APIs robustas y escalables. Mi experiencia con bases de datos incluye el diseño y la gestión de sistemas en PostgreSQL, MySQL y Oracle, lo que me ha permitido optimizar el rendimiento de las aplicaciones y garantizar la integridad de los datos. Mi conocimiento en Node.js ha complementado mis habilidades backend, dándome una perspectiva integral del desarrollo full-stack.",
            "A lo largo de mi carrera, he aprendido a enfrentar desafíos complejos y a encontrar soluciones innovadoras para problemas técnicos. Mi enfoque se centra en la calidad del código, la eficiencia en el desarrollo y la adaptabilidad a las necesidades cambiantes del proyecto. Actualmente, estoy dedicando mis esfuerzos a especializarme en el desarrollo completo para Android, con el objetivo de dominar todas las facetas de esta plataforma y contribuir a la creación de aplicaciones que destaquen en términos de rendimiento, seguridad y usabilidad.",
            "Mi meta es seguir evolucionando en el campo del desarrollo móvil, explorar nuevas tecnologías y metodologías, y colaborar en proyectos que no solo satisfagan las expectativas de los usuarios, sino que también marquen una diferencia significativa en el mercado digital. Estoy comprometido con el aprendizaje continuo y con la aplicación de las mejores prácticas para lograr resultados excepcionales en cada proyecto en el que participo."
        ],
        footer1: "© 2026 Jonay Santana. Todos los derechos reservados.",
        footer2: "Este contenido no puede ser reproducido, distribuido ni modificado sin el permiso expreso del titular de los derechos."
    },
    en: {
        headerText: "My name is Jonay Santana, Android developer based in Telde, Gran Canaria, Spain. I've worked on diverse projects including banking apps, streaming, and museums, focusing on clean, intuitive interfaces with Jetpack Compose and Kotlin.",
        profileTitle: "Professional Profile",
        projectTitles: [
            "Guaguas GLOBAL",
            "Guaguas LPA",
            "Museo Canario",
            "Visitr",
            "Paymaster Virtual (AUTGC)",
            "Pidion Lanzarote Service"
        ],
        projectDescs: [
            "Guaguas GLOBAL is the essential app for travelers seeking real-time intercity bus service updates on Gran Canaria. Plan your trip effortlessly with accurate ETAs and nearby stops.",
            "Guaguas LPA provides real-time bus information for Las Palmas urban routes. Perfect for locals and visitors to navigate efficiently without stress.",
            "Museo Canario app, a digital experience for Gran Canaria's premier scientific and cultural institution founded in 1879.",
            "Visitr: User-friendly app for museums, cultural sites, parks and tourist centers. Transform your travel with easy exploration worldwide.",
            "Paymaster Virtual (AUTGC): Mobile top-up and purchase service for Gran Canaria public transport cards via Android devices or ATMs.",
            "Internal service for Lanzarote transport company: Java web service for member card sales and recharges."
        ],
        about: [
            "Passionate developer creating impactful digital experiences. Extensive mobile app development for Android/iOS, delivering seamless UX with cutting-edge technical solutions.",
            "Strong backend expertise with scalable APIs, PostgreSQL/MySQL/Oracle databases, and Node.js for full-stack development.",
            "Proven track record solving complex challenges with clean code, performance optimization, and Android specialization using Compose.",
            "Committed to continuous learning, exploring new technologies to deliver exceptional mobile apps in fintech and beyond."
        ],
        footer1: "© 2026 Jonay Santana. All rights reserved.",
        footer2: "This content may not be reproduced, distributed or modified without express permission."
    }
};

const langBtn = document.getElementById('langBtn');
let currentLang = localStorage.getItem('lang') || 'es';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);

    const t = translations[lang];

    // Header
    document.querySelector('.text').textContent = t.headerText;

    // Projects
    const titles = document.querySelectorAll('.project-title');
    const descs = document.querySelectorAll('.project-desc');
    titles.forEach((el, i) => { el.textContent = t.projectTitles[i]; });
    descs.forEach((el, i) => { el.textContent = t.projectDescs[i]; });

    // About
    document.getElementById('about-title').textContent = t.profileTitle;
    const aboutPs = document.querySelectorAll('.about-paragraph');
    aboutPs.forEach((el, i) => { el.textContent = t.about[i]; });

    // Footer
    document.querySelector('.footer-line1').innerHTML = t.footer1;
    document.querySelector('.footer-line2').textContent = t.footer2;

    // Toggle visual
    langBtn.classList.toggle('active', lang === 'en');
}

langBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
});

// Init
setLanguage(currentLang);
