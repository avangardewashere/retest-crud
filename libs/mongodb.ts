import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGOBD_URI}`);
    console.log("Connection Successful");
  } catch (e) {
    console.log(e);
  }
};

export default connectMongoDB;
