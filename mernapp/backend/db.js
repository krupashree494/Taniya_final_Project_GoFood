const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://GoFood:sashshar@cluster0.p8i4g0b.mongodb.net/GoFood?retryWrites=true&w=majority";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const foodItemsCollection = mongoose.connection.db.collection("food_items");

    // Fetch data from food_items collection
    const foodItemsData = await foodItemsCollection.find({}).toArray();

    // Fetch data from foodCategory collection
    const foodCategoryCollection =
      mongoose.connection.db.collection("foodCategory");
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    // Handle the fetched data as needed
    console.log("Fetched food_items data:", foodItemsData);
    console.log("Fetched foodCategory data:", foodCategoryData);

    // Set global variables for the fetched data
    global.food_items = foodItemsData;
    global.foodCategory = foodCategoryData;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Handle the error by returning a response or taking appropriate action
  }
};

module.exports = connectToMongoDB;
