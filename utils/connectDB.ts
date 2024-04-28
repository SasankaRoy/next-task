import mongoose from "mongoose";


// "mongodb+srv://sasankaroy033:5rIjfNxBROabHJ5i@cluster0.wzzh5bj.mongodb.net/?retryWrites=true&w=majority&appName=tasks";


interface connectConfig {
    isConnected: object
}


const connection: connectConfig = {
    isConnected:{}
};
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = mongoose.connections[0].readyState;
    console.log("Db is connected");
  } catch (error) {
    console.log("Error connecting", error);
  }
};
export default connectDB;
