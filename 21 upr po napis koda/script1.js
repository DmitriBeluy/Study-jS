'use strict';



/* function showExpirience() {
   return exp;
}

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

const {exp} = personalPlanPeter.skills;

showExpirience(personalPlanPeter); */



/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;                              // 1 zadacha
    return exp;
}

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str ;                                                            // 2 zadacha

} */


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }/* ,
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками:${languages}`;
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()}`;
        });
        
        return str;                                                 // 3 zadacha
    } 
     */
};

//personalPlanPeter.showAgeAndLangs(personalPlanPeter);

personalPlanPeter.showAgeAndLangs = function(plan) {
    return  `Мне ${plan.age} и я владею языками:${plan.skills.languages.join('').toUpperCase()}`;
    
};                                                                          // 3 zadacha 2 variant

