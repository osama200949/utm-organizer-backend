const db = require("./api/database");

async function setupDatabase(req, res, next) {
    // To delete all the collections
    const collections = ["years"];
    collections.forEach(async(collection) => await deleteCollection(collection));

    // Add documents to the todos collection
    await addDocuments("years", [{
        number: 1,
        semesters: [{
                number: 1,
                courses: [{
                        code: "SECI1013",
                        name: "Discrete Structure",
                        sections: [{
                                isPressed: false,
                                number: 1,
                                doctor: {
                                    name: "Siti Zayton Binti Othman",
                                    classes: [{
                                            startTime: "2020-05-03T08:00:00Z",
                                            endTime: "2020-05-03T10:00:00Z",
                                            day: "Tuesday",
                                        },
                                        {
                                            startTime: "2020-05-03T09:00:00Z",
                                            endTime: "2020-05-03T10:00:00Z",
                                            day: "Wednesday",
                                        },
                                    ],
                                },
                            },
                            {
                                isPressed: false,
                                number: 2,
                                doctor: {
                                    name: "Mohd bin Mohamad",
                                    classes: [{
                                            startTime: "2020-05-03T14:00:00Z",
                                            endTime: "2020-05-03T16:00:00Z",
                                            day: "Monday",
                                        },
                                        {
                                            startTime: "2020-05-03T12:00:00Z",
                                            endTime: "2020-05-03T13:00:00Z",
                                            day: "Tuesday",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                    {
                        code: "SESJ1013",
                        name: "Programming Technique 1",
                        sections: [{
                                isPressed: false,
                                number: 1,
                                doctor: {
                                    name: "Haswadi bin Hasan",
                                    classes: [{
                                            startTime: "2020-05-03T11:00:00Z",
                                            endTime: "2020-05-03T13:00:00Z",
                                            day: "Monday",
                                        },
                                        {
                                            startTime: "2020-05-03T10:00:00Z",
                                            endTime: "2020-05-03T12:00:00Z",
                                            day: "Thursday",
                                        },
                                    ],
                                },
                            },
                            {
                                isPressed: false,
                                number: 1,
                                doctor: {
                                    name: "Johan bin Mohamad Sharif",
                                    classes: [{
                                            startTime: "2020-05-03T11:00:00Z",
                                            endTime: "2020-05-03T13:00:00Z",
                                            day: "Sunday",
                                        },
                                        {
                                            startTime: "2020-05-03T11:00:00Z",
                                            endTime: "2020-05-03T13:00:00Z",
                                            day: "Monday",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                    {
                        code: "SECR1013",
                        name: "Digital Logic",
                        sections: [{
                                isPressed: false,
                                number: 1,
                                doctor: {
                                    name: "Siti Hajar binti Othman",
                                    classes: [{
                                            startTime: "2020-05-03T08:00:00Z",
                                            endTime: "2020-05-03T10:00:00Z",
                                            day: "Tuesday",
                                        },
                                        {
                                            startTime: "2020-05-03T11:00:00Z",
                                            endTime: "2020-05-03T12:00:00Z",
                                            day: "Wednesday",
                                        },
                                    ],
                                },
                            },
                            {
                                isPressed: false,
                                number: 2,
                                doctor: {
                                    name: "Mohd. Murtadha bin Mohamad",
                                    classes: [{
                                            startTime: "2020-05-03T14:00:00Z",
                                            endTime: "2020-05-03T16:00:00Z",
                                            day: "Monday",
                                        },
                                        {
                                            startTime: "2020-05-03T11:00:00Z",
                                            endTime: "2020-05-03T13:00:00Z",
                                            day: "Tuesday",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                    {
                        code: "SECP1513",
                        name: "Technology & Information System",
                        sections: [{
                            isPressed: false,
                            number: 1,
                            doctor: {
                                name: "Norina Binti Yasser",
                                classes: [{
                                        startTime: "2020-05-03T08:00:00Z",
                                        endTime: "2020-05-03T10:00:00Z",
                                        day: "Wednesday",
                                    },
                                    {
                                        startTime: "2020-05-03T11:00:00Z",
                                        endTime: "2020-05-03T13:00:00Z",
                                        day: "thursday",
                                    },
                                ],
                            },
                        }, ],
                    },
                    {
                        code: "UHMT1012",
                        name: "Graduate Success Attributes",
                        sections: [{
                                isPressed: false,
                                number: 1,
                                doctor: {
                                    name: "Corrienna Abdul Talib",
                                    classes: [{
                                        startTime: "2020-05-03T14:00:00Z",
                                        endTime: "2020-05-03T16:00:00Z",
                                        day: "Wednesday",
                                    }, ],
                                },
                            },
                            {
                                isPressed: false,
                                number: 2,
                                doctor: {
                                    name: "Lokman Ali",
                                    classes: [{
                                        startTime: "2020-05-03T14:00:00Z",
                                        endTime: "2020-05-03T16:00:00Z",
                                        day: "Wednesday",
                                    }, ],
                                },
                            },
                            {
                                isPressed: false,
                                number: 3,
                                doctor: {
                                    name: "Mohd Fa’iz Ahmad",
                                    classes: [{
                                        startTime: "2020-05-03T14:00:00Z",
                                        endTime: "2020-05-03T16:00:00Z",
                                        day: "Wednesday",
                                    }, ],
                                },
                            },
                            {
                                isPressed: false,
                                number: 4,
                                doctor: {
                                    name: "Hazinah Kutty Mammi",
                                    classes: [{
                                        startTime: "2020-05-03T14:00:00Z",
                                        endTime: "2020-05-03T16:00:00Z",
                                        day: "Wednesday",
                                    }, ],
                                },
                            },
                        ],
                    },
                    {
                        code: "UHIT2302",
                        name: "The Thought of Sciences and Technology",
                        sections: [{
                                isPressed: false,
                                number: 2,
                                doctor: {
                                    name: "CCSL",
                                    classes: [{
                                        startTime: "2020-05-03T11:00:00Z",
                                        endTime: "2020-05-03T13:00:00Z",
                                        day: "sunday",
                                    }, ],
                                },
                            },
                            {
                                isPressed: false,
                                number: 3,
                                doctor: {
                                    name: "CCSL",
                                    classes: [{
                                        startTime: "2020-05-03T14:00:00Z",
                                        endTime: "2020-05-03T16:00:00Z",
                                        day: "sunday",
                                    }, ],
                                },
                            },
                            {
                                isPressed: false,
                                number: 4,
                                doctor: {
                                    name: "CCSL",
                                    classes: [{
                                        startTime: "2020-05-03T11:00:00Z",
                                        endTime: "2020-05-03T13:00:00Z",
                                        day: "sunday",
                                    }, ],
                                },
                            },
                            {
                                isPressed: false,
                                number: 5,
                                doctor: {
                                    name: "CCSL",
                                    classes: [{
                                        startTime: "2020-05-03T14:00:00Z",
                                        endTime: "2020-05-03T16:00:00Z",
                                        day: "sunday",
                                    }, ],
                                },
                            },
                        ],
                    },
                    {
                        code: "UHMS1172",
                        name: "Malaysia Dynamic",
                        sections: [{
                            isPressed: false,
                            number: 11,
                            doctor: {
                                name: "Zulkifli bin Khair",
                                classes: [{
                                    startTime: "2020-05-03T10:00:00Z",
                                    endTime: "2020-05-03T12:00:00Z",
                                    day: "Tuesday",
                                }, ],
                            },
                        }, ],
                    },
                    {
                        code: "UHLM1012",
                        name: "Malaysia Language for Communication II",
                        sections: [{
                            isPressed: false,
                            number: 1,
                            doctor: {
                                name: "Zaliza binti Mohamad Nasir",
                                classes: [{
                                    startTime: "2020-05-03T08:00:00Z",
                                    endTime: "2020-05-03T10:00:00Z",
                                    day: "Thursday",
                                }, ],
                            },
                        }, ],
                    },
                    {
                        code: "UHMS1022",
                        name: "Malaysian Studies 3",
                        sections: [{
                            isPressed: false,
                            number: 1,
                            doctor: {
                                name: " Faizah binti Mohamad Nor",
                                classes: [{
                                    startTime: "2020-05-03T08:00:00Z",
                                    endTime: "2020-05-03T10:00:00Z",
                                    day: "Thursday",
                                }, ],
                            },
                        }, ],
                    },
                ],
            },
            {
                number: 2,
                courses: [{
                        code: "SECR1033",
                        name: "Computer Organization and Architecture",
                        sections: [{
                            isPressed: false,
                            number: 1,
                            doctor: {
                                name: "Ahmad Fariz bin Ali",
                                classes: [{
                                        startTime: "2020-05-03T11:00:00Z",
                                        endTime: "2020-05-03T13:00:00Z",
                                        day: "Tuesday",
                                    },
                                    {
                                        startTime: "2020-05-03T08:00:00Z",
                                        endTime: "2020-05-03T09:00:00Z",
                                        day: "Thursday",
                                    },
                                ],
                            },
                        }, ],
                    },
                    {
                        code: "SECI1113",
                        name: "Computational Mathematics",
                        sections: [{
                            isPressed: false,
                            number: 1,
                            doctor: {
                                name: "Razana binti Alwee",
                                classes: [{
                                    startTime: "2020-05-03T08:00:00Z",
                                    endTime: "2020-05-03T11:00:00Z",
                                    day: "Tuesday",
                                }, ],
                            },
                        }, ],
                    },
                ],
            },
        ],
    }, ]);

    res.send("Setting Up Database.... Done ");
}

async function deleteCollection(collection) {
    const cref = db.firestore.collection(collection);
    const docs = await cref.listDocuments();
    docs.forEach((doc) => doc.delete());
}

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc));
}

module.exports = setupDatabase;