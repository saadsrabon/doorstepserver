import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB;
