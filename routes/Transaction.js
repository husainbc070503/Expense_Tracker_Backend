import { Router } from "express";
import ValidateInput from "../middleware/ValidateInput.js";
import ValidateTransaction from "../validators/TransactionValidator.js";
import ValidUser from "../middleware/ValidUser.js";
import Transaction from "../models/Transaction.js";
const router = Router();

router.post('/createTransaction', ValidUser, ValidateInput(ValidateTransaction), async (req, res) => {
    try {
        var transaction = await Transaction.create({ ...req.body, user: req.user._id });
        transaction = await Transaction.findById(transaction._id)
            .populate('category')
            .populate('user');

        res.status(200).json({ success: true, transaction });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

/* router.put('/editTransaction/:id', ValidUser, async (req, res) => {
    try {
        await Transaction.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
            .populate('category')
            .populate('user');

        res.status(200).json({ success: true });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}); */

router.delete('/deleteTransaction/:id', ValidUser, async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.get('/getTransactions', ValidUser, async (req, res) => {
    try {
        var trans = await Transaction.find()
            .populate('category')
            .populate('user')
            .sort({ date: 1 })

        res.status(200).json({ success: true, trans });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

export default router;