import mongoose from "mongoose";

const connectMongoDb = () => {
  try {
    mongoose.connect(`${process.env.MONGOBD_URI}`);
    console.log("Connection Successful");
  } catch (e) {
    console.log(e);
  }
};

export default connectMongoDb;
