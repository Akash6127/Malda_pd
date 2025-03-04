import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ems");
    } catch (error) {
        console.log(error);
    }
};

export default connectToDatabase;