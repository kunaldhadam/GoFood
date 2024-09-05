const mongoose = require('mongoose');
const mongo_uri = "mongodb+srv://kunaldhadam:mOOn1!ght@gofood.x39trgo.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=gofood";
const mongoDB = async ()=>{
    try{
        await mongoose.connect(mongo_uri,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("fooditems").find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("foodcategory").find({}).toArray();
        global.food_items = fetched_data;
        global.foodCategory = foodCategory;
        // console.log(global.food_items);
        // console.log(global.foodCategory);
    } catch(error){
        console.error("Mongo error:",error);
        process.exit(1);
    }

};

module.exports =  mongoDB;



