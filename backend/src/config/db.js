import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://board:tnc@cluster0.hdju6rt.mongodb.net/board?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MONGODB Connected Successfully");
  } catch (error) {
    console.log("Error", error);
    process.exit(1);
  }
};
