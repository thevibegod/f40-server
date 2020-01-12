const mongoose = require('mongoose');
const db = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlparser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
