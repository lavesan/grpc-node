const client = require('./client-grpc')

// client.list({}, (error, notes) => {
//     if (!error) {
//         console.log(notes)
//     } else {
//         console.error(error)
//     }
// })

client.createNote({ nota: 'foi' }, (error, note) => {
    if (!error) {
        console.log(note);
    } else {
        console.error(error);
    }
})