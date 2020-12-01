const mongoose = require('mongoose')

mongoose.connect('mongodb://db', {
    dbName: 'test-rokket-labs',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
.then(db => console.log('Database is connected'))
.catch(error => console.log(error));

const db = mongoose.connection

module.exports = db