import mongoose from "mongoose";

export const contactSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please add contact email"]
    },
},{
    timestamps: true,
})

export default mongoose.model("Contact", contactSchema);