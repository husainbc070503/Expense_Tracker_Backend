import mongoose from "mongoose";

// categories => field => ['type', 'color']
const CategorySchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },

    color: {
        type: String,
        default: "#33186B"
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

}, { timestamps: true });

const Category = mongoose.model('category', CategorySchema);
export default Category;