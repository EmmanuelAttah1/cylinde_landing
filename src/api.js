import { contactSchema } from './user';
const mongoose = require('mongoose')


const connectionString = `mongodb+srv://attahzuzu:123_Batman_456@visor-landing.1ud9hab.mongodb.net/mycontacts-backend?retryWrites=true&w=majority&appName=visor-landing`

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Database Connected: ", mongoose.connection.host, mongoose.connection.name);
        return true;
    } catch (error) {
        console.error("Connection error:", error);
        // process.exit(1);
    }
};

export const JoinWaitList = async (email) => {
    try {
        await connectDB();
        await contactSchema.create({ email });
        console.log("Email added to waitlist:", email);

        //disconnect
        await mongoose.disconnect();

        return true;
    } catch (error) {
        console.error("Error adding email to waitlist:", error);
        return false;
    }
};
