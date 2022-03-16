// information config

const INFO = {
    // experience settings
    experience: [
        {
            duration: 'Dec 2020 – till now',
            company: 'Levi9',
            project: 'LeasePlan',
            projectDescription: '',
            teamQuantity: 18,
            position: 'Frontend Developer',
            instrumentsAndTechnologies: ['TypeScript', 'Node.js', 'Express', 'React', 'Redux', 'Redux-Saga', 'styled-components', 'Jest', 'Enzyme', 'Sitecore', 'Salesforce']
        },
        {
            duration: 'Oct 2020 – Dec 2020',
            company: 'Andersen',
            project: 'Choicely',
            projectDescription: 'application with many widgets and builders for developing articles, feeds, polls, surveys and mobile apps without coding',
            teamQuantity: 10,
            position: 'Frontend Developer',
            responsibilities: ['developing mobile apps builders'],
            instrumentsAndTechnologies: ['JavaScript', 'React', 'Redux', 'Redux-Saga', 'react-beautiful-dnd', 'react-table', 'redux-form']
        },
        {
            duration: 'Sep 2020 – Oct 2020',
            company: 'Andersen',
            project: 'Intranet',
            projectDescription: 'employee management system with mailing about company news to employees\' mail. Displaying the employee vacation diagram for the head of the company',
            teamQuantity: 15,
            position: 'Frontend Developer',
            responsibilities: ['visualization of the employee vacation schedule', 'mail sending', 'writing end-to-end tests'],
            instrumentsAndTechnologies: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Jest', 'Cypress', 'SASS/LESS', 'Git']
        },
        {
            duration: 'Jun 2020 – Aug 2020',
            company: 'Andersen',
            project: 'CRM Andersen',
            projectDescription: 'CRM system with different roles as a head for customers and company employees management',
            teamQuantity: 20,
            position: 'Frontend Developer',
            responsibilities: ['filtering', 'creating large tables and working with its internal data'],
            instrumentsAndTechnologies: ['JavaScript', 'React', 'Redux', 'Flow', 'Storybook', 'Material UI', 'Jest', 'Enzyme', 'Lodash', 'Ramda', 'Formik + Yup', 'Git']
        },
        {
            duration: 'Oct 2019 – Jun 2020',
            project: 'Xiaomi Shop',
            projectDescription: 'online store selling mobile gadgets and accessories with the ability to choose, add a product to favorites and buy a product',
            teamQuantity: 2,
            position: 'Fullstack developer',
            responsibilities: ['authorization', 'searching', 'pagination', 'purchasing algorithm', 'SPA', 'routing', 'developing project architecture', 'developing database architecture'],
            instrumentsAndTechnologies: ['JavaScript', 'SASS', 'JSON', 'PHP', 'MySQL', 'RedBeanPHP', 'Git']
        }
    ],
    name: 'Tymofii Dovhopol',
    position: 'Frontend Developer',
    contacts: {
        address: '<s>Chernihiv</s>, Ukraine',
        phone: '+38 073 123 13 10',
        email: 'timdovg@gmail.com'
    },
    skills: ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'Redux', 'Redux-Saga', 'Jest', 'Enzyme', 'Cypress', 'Material UI', 'styled-components', 'Sitecore', 'Salesforce', 'Git'],
    languages: [
        {
            lang: 'English',
            level: '(B2 Upper intermediate)'
        },
        {
            lang: 'Ukrainian',
            level: '(C2 Proficient)'
        },
        {
            lang: 'Russian',
            level: '(C2 Proficient)'
        },
    ],
    interests: 'I really love reading biographies of successful people',
    social: {
        linkedin: 'https://www.linkedin.com/in/timofey-dovgopol-15b013151/',
        skype: 'timdovg',
        github: 'https://github.com/TimDovg'
    },
    education: [
        {
            duration: '2020 - 2022',
            description: 'Chernihiv National University of Technology. Qualification awarded: Master\'s Degree in Computer engineering.'
        },
        {
            duration: '2016 - 2020',
            description: 'Chernihiv National University of Technology. Qualification awarded: Bachelor\'s Degree in Computer engineering.'
        }
    ]
};

document.title = `${INFO.name} - Résumé`;

document.querySelector('.title-name h1').innerHTML = INFO.name;
document.querySelector('.position').innerHTML = INFO.position;
document.querySelector('.interests p').innerHTML = INFO.interests;

INFO.education.forEach(education => {
    document.querySelector('.education-grid-container').innerHTML += `
    <div class="experience-duration">
        ${education.duration}
    </div>
    <div>
        <p>
          ${education.description}
        </p>
    </div>
`;
});

Object.keys(INFO.social).forEach(social => {
    const link = INFO.social[social];

    document.querySelector('.social').innerHTML += `
        <div>
            <i class="fab fa-${social}"></i>
        
            <a
                href=${link}
                rel="author"
            >${link}</a
            >
        </div>
    `;
});

document.querySelector('.email').innerHTML = `
    <a href="mailto: ${INFO.contacts.email}" rel="author">
        <span>${INFO.contacts.email}</span>
    </a>
`;

document.querySelector('.phone').innerHTML = INFO.contacts.phone;
document.querySelector('.address').innerHTML = INFO.contacts.address;

document.querySelector('.skills').innerHTML = INFO.skills.join(', ');

INFO.languages.forEach(lang => {
    document.querySelector('.languages').innerHTML += `
        <div>
            <b>${lang.lang}</b>
            <p>${lang.level}</p>
        </div>
    `;
});

INFO.experience.forEach(exp => {
    document.querySelector('.experience-grid-container').innerHTML += `
        <div class="experience-duration">
            ${exp.duration}
        </div>
        <div class="experience">
            ${exp.company ? `<b><em>Company: </em></b> ${exp.company}<br />` : ''}
            ${exp.project ? `<b><em>Project: </em></b> ${exp.project}<br />` : ''}
            ${exp.projectDescription ? `<b><em>Project description: </em></b> ${exp.projectDescription}<br />` : ''}
            ${exp.teamQuantity ? `<b><em>Team: </em></b> ${exp.teamQuantity} specialists<br />` : ''}
            <b><em>Position:</em></b> ${exp.position}<br />
            ${exp.responsibilities ? `<b><em>Responsibilities:</em></b> ${exp.responsibilities.join(', ')}<br />` : ''}
            <b><em>Instruments and technologies:</em></b> ${exp.instrumentsAndTechnologies.join(', ')}
            <br />
        </div>
    `;
});
