import frontEndWizardImg from "./assets/front-end-wizard.png";
import kieranVenisonImg from "./assets/kieranvenison.png";

const projects = [
    {
        name: 'Front End Wizard',
        url: 'https://www.front-end-wiz.co.uk',
        short_description: 'A collection of front end resources',
        primary_tech: ['React', 'TypeScript'],
        src: frontEndWizardImg,
        popup_values: {
            title: 'Front End Wizard',
            img: frontEndWizardImg,
            description: 'Front end wizard is a comprehensive collection of front end resources, tutorials, frameworks and everything else!',
            languages: ['React', 'TypeScript', 'SASS', 'Redux'],
            links: {
                github: 'https://github.com/kieranmv95/Front-End-Wizard',
                website: 'https://www.frontendwiz.co.uk',
            }
        }
    },
    {
        name: 'Kieran Venison',
        url: 'https://kieranvenison.co.uk',
        short_description: 'Kieran Venisons Personal Blog Website',
        primary_tech: ['React', 'GatsbyJS'],
        src: kieranVenisonImg,
        popup_values: {
            title: 'Kieran Venison',
            img: kieranVenisonImg,
            description: "Kieran Venisons personal website and Blog. If you really want to see what I'm doing right now, check out my weekly newsletter",
            languages: ['React', 'Gatsby', 'SASS', 'GraphQL'],
            links: {
                github: 'https://github.com/kieranmv95/kieran.venison.website',
                website: 'https://www.kieranvenison.co.uk',
            }
        }
    },
];

export default projects;