import mongoose from "mongoose";

// transactions  => field => ['name', 'category', 'amount', 'date']
const TransactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },

    amount: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now()
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

}, { timestamps: true });

const Transaction = mongoose.model('transaction', TransactionSchema);
export default Transaction;