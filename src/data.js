const data = {
    students: [
        {
            id: 1,
            name: 'Jeff Anderson',
            faculty: 'Engineering'
        },
        {
            id: 2,
            name: 'Pat Smith',
            faculty: 'Mathematics'
        },
        {
            id: 3,
            name: 'Jane Johnston',
            faculty: 'Mathematics'
        },
        {
            id: 4,
            name: 'Linda Yu',
            faculty: 'Science'
        },
        {
            id: 5,
            name: 'Alexander Moore',
            faculty: 'Science'
        },
    ],
    teachers: [
        {
            id: 1,
            name: 'Alan Mckenzie',
            faculty: 'Engineering'
        },
        {
            id: 2,
            name: 'Robert Kidman',
            faculty: 'Mathematics'
        },
        {
            id: 3,
            name: 'Shawn McCarthy',
            faculty: 'Science'
        }
    ],
    Marking:
        [
            {
                id: 1,
                teacherid: 1,
                studentid: 1,
                grade: 83,
                commentFromProf: 'You had an excellent performance, and you had done well on assignments and exams.'
            },
            {
                id: 2,
                teacherid: 2,
                studentid: 2,
                grade: 75,
                commentFromProf: 'You had a good performance, and you should put more efforts towards assignments to improve your final grades.'
            },
            {
                id: 3,
                teacherid: 2,
                studentid: 3,
                grade: 95,
                commentFromProf: 'You had an outstanding performance, and you did assignments, quizzes and exams perfectly. You should be pround of your work.'
            },
            {
                id: 4,
                teacherid: 3,
                studentid: 4,
                grade: 62,
                commentFromProf: 'You had a moderate performance. You should be more active in class and submit assignments on time.'
            },
            {
                id: 5,
                teacherid: 3,
                studentid: 4,
                grade: 47,
                commentFromProf: 'You had a poor performance, which means you failed and you should think about retaking this course. If you have any questions towards your final grades, please contact the Professor before next term starts.'
            }
        ]
};

export default data;