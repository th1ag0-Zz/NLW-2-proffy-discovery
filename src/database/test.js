const DataBase = require('./db')
const creaetProffy = require('./createtProffy')

DataBase.then(async (db) => {

    proffyValue = {
        name: 'Laura Beatriz',
        avatar: 'https://avatars0.githubusercontent.com/u/48022589?s=460&u=6e0093b40a2ad5e8384ca214ee835859d03ebe2e&v=4',
        whatsapp: '9894652349',
        bio: 'front end engineer passionate about the react ecosystem | doing open source stuff | mentor at @Rocketseat'
    }

    classValue = {
        subject: 'Matemática',
        cost: '80'
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 5,
            time_from: 520,
            time_to: 1220
        }
    ]

    
    // await creaetProffy(db, {proffyValue, classValue, classScheduleValues})
    
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 5
        AND class_schedule.time_from <= 520
        AND class_schedule.time_to > 520
    `)

    console.log(selectedClassesSchedules)

})

