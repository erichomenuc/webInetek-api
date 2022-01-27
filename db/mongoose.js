const mongoose = require('mongoose');

const dbUser = process.env.dbUser;
const dbPass = process.env.dbPass;

//const url = `mongodb+srv://eric_home:bd54871@cluster0.b8waj.mongodb.net/developmentsDB?retryWrites=true&w=majority`
const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.b8waj.mongodb.net/developmentsDB?retryWrites=true&w=majority`

//const url = 'mongodb://localhost:27017/developmentsDB';//

mongoose.connect(url, {
    useNewUrlParser: true,
});
