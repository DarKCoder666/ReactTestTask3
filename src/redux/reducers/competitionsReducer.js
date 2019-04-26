import { GET_COMPETITION_BY_ID } from '../actions/types';

const initialState = {
    currentCompetition: {},
    competitions: [
        {
            id: 1,
            name: "Gazprom Neft SmartOil Contest 2",
            dates: "17.10.18 - 21.11.18",
            fund: "760 000 RUB",
            imgSrc: "https://boosters.pro/api/ch/img/smartoil2_logo%20(5).png",
            description: "Happy Data Year - New Year's data science championship from Rosbank. You have to predict the geolocation popularity index for placing an ATM network device.",

            navigation: [
                {
                    name: "Overview",
                    slug: "overview",
                    submenu: [
                        {
                            name: "Description",
                            html: `<div><h1>Description</h1><p>Happy Data Year - New Year's data science championship from Rosbank. You have to predict the geolocation popularity index for placing an ATM network device.</p><img src="https://boosters.pro/api/ch/img/rosbank2_img%20(3).png" /><p>Happy Data Year - New Year's data analysis championship from Rosbank.</p><p>The training sample contains data on the geo-location of six thousand ATMs of Rosbank and its partners, as well as the target variable - the ATM popularity index. In the test sample, there are two and a half thousand ATMs, equally divided into public and private parts.</p><p>We believe that the proposed task is interesting and will allow you to work:</p><p>With geodata and parsing technology. You have to collect geodata by yourself.</p></div>`
                        },
                        {
                            name: "Rules",
                            html: "<div>Rules</div>"
                        },
                        {
                            name: "Prizes",
                            html: "<div>PRIZES</div>"
                        },
                        {
                            name: "Timeline",
                            html: `<div class="styles__mainInformationContent___16U8R"><div class="styles__mainInformationContentTitle___34hkU">Timeline</div><div class="styles__mainInformationContentText___2EbgA"><div><div id="timetable">17.10.2018 - 21.11.2018 - The total duration of the championship 07.12.2018 - The rewarding, the report competition.</div></div></div></div>`
                        }
                    ]
                },
                {
                    name: "Evaluation",
                    slug: "evaluation",
                    submenu: [
                        {
                            name: "Task1",
                            html: "<div>Task1</div>"
                        },
                        {
                            name: "Task2",
                            html: "<div>Task2</div>"
                        },
                    ]
                },
                {
                    name: "Data",
                    slug: "data",
                    submenu: [
                        {
                            name: "Data",
                            html: "<div>Task1</div>"
                        },
                        {
                            name: "Data",
                            html: "<div>Task2</div>"
                        },
                    ]
                },
                {
                    name: "Raiting",
                    slug: "raiting",
                    componentType: "raiting",
                    submenu: [
                        {
                            name: "Task 1",
                            table: {
                                headers: ["Place", "Team", "Solutions", "Award", "Score"],
                                data: [
                                    {
                                        name: "Viktor",
                                        place: 1,
                                        solutions: 8,
                                        award: 1,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Pavel",
                                        place: 2,
                                        solutions: 18,
                                        award: 1,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Петя",
                                        place: 3,
                                        solutions: 2,
                                        award: 2,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Sergey",
                                        place: 4,
                                        solutions: 8,
                                        award: 3,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Konstantin",
                                        place: 5,
                                        solutions: 8,
                                        award: 3,
                                        score: 110.1440000
                                    },
                                ]
                            }
                        },
                        {
                            name: "Task 2",
                            table: {
                                headers: ["Place", "Team", "Solutions", "Award", "Score"],
                                data: [
                                    {
                                        name: "Игорь",
                                        place: 1,
                                        solutions: 8,
                                        award: 1,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Саша",
                                        place: 2,
                                        solutions: 18,
                                        award: 1,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Вася",
                                        place: 3,
                                        solutions: 2,
                                        award: 2,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Галя",
                                        place: 4,
                                        solutions: 8,
                                        award: 3,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Костя",
                                        place: 5,
                                        solutions: 8,
                                        award: 3,
                                        score: 110.1440000
                                    },
                                ]
                            }
                        },
                    ],
    
                }
            ]
        },
        {
            id: 2,
            name: "Another AI contest",
            dates: "17.10.18 - 21.11.18",
            fund: "1 000 000 RUB",
            imgSrc: "https://boosters.pro/api/ch/img/rekko_challenge_rekkop.jpg",
            description: "Happy Data Year - New Year's data science championship from Rosbank. You have to predict the geolocation popularity index for placing an ATM network device.",

            navigation: [
                {
                    name: "Overview",
                    slug: "overview",
                    submenu: [
                        {
                            name: "Description",
                            html: "<div>Description</div>"
                        },
                        {
                            name: "Rules",
                            html: "<div>Rules</div>"
                        },
                        {
                            name: "Prizes",
                            html: "<div>Prizes</div>"
                        },
                        {
                            name: "Timeline",
                            html: "<div>Timeline</div>"
                        }
                    ]
                },
                {
                    name: "Evaluation",
                    slug: "evaluation",
                    submenu: [
                        {
                            name: "Task1",
                            html: "<div>Task1</div>"
                        },
                        {
                            name: "Task2",
                            html: "<div>Task2</div>"
                        },
                    ]
                },
                {
                    name: "Data",
                    slug: "data",
                    submenu: [
                        {
                            name: "Data",
                            html: "<div>Task1</div>"
                        },
                        {
                            name: "Data",
                            html: "<div>Task2</div>"
                        },
                    ]
                },
                {
                    name: "Raiting",
                    slug: "raiting",
                    componentType: "raiting",
                    submenu: [
                        {
                            name: "Data",
                            table: {
                                headers: ["Place", "Team", "Solutions", "Award", "Score"],
                                data: [
                                    {
                                        name: "Viktor",
                                        place: 1,
                                        solutions: 8,
                                        award: 1,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Pavel",
                                        place: 2,
                                        solutions: 18,
                                        award: 1,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Петя",
                                        place: 3,
                                        solutions: 2,
                                        award: 2,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Sergey",
                                        place: 4,
                                        solutions: 8,
                                        award: 3,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Konstantin",
                                        place: 5,
                                        solutions: 8,
                                        award: 3,
                                        score: 110.1440000
                                    },
                                ]
                            }
                        },
                        {
                            name: "Data",
                            table: {
                                headers: ["Place", "Team", "Solutions", "Award", "Score"],
                                data: [
                                    {
                                        name: "Viktor",
                                        place: 1,
                                        solutions: 8,
                                        award: 1,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Pavel",
                                        place: 2,
                                        solutions: 18,
                                        award: 1,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Петя",
                                        place: 3,
                                        solutions: 2,
                                        award: 2,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Sergey",
                                        place: 4,
                                        solutions: 8,
                                        award: 3,
                                        score: 110.1440000
                                    },
                                    {
                                        name: "Konstantin",
                                        place: 5,
                                        solutions: 8,
                                        award: 3,
                                        score: 110.1440000
                                    },
                                ]
                            }
                        },
                    ],
    
                }
            ]
        }
    ],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMPETITION_BY_ID:
            let currentCompetition;
            for(let i = 0; i < state.competitions.length; i++) {
                if(parseInt(state.competitions[i].id) === parseInt(action.payload.id)) {
                    currentCompetition = state.competitions[i];
                    break;
                }
            }
            return {
                ...state,
                currentCompetition
            }
        default:
            return state;
    }
}