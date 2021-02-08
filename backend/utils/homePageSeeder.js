const HomePage = require('../models/homePage');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const homePage = require('../data/homePage.json');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env'})

connectDatabase();

const seedHomePage = async () => {
    try {

        await HomePage.deleteMany();
        console.log('Home page details deleted');
        await HomePage.insertMany(homePage);
        console.log('Home page details added');
        
        process.exit();
    } catch(error){
        console.log(error.message);
        process.exit();
    }
}

seedHomePage()