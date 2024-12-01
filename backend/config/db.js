import mongoose from 'mongoose';

export const connectDB = async () => {
  console.log('Attempting to connect to MongoDB...');
  await mongoose
    .connect(
      'mongodb+srv://kyoyas411:Apaajalah123%23@cluster0.w3r1j.mongodb.net/food-del'
    )
    .then(() => console.log('DB Connected'));
};
