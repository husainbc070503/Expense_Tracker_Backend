import { Router } from "express";
import Category from "../models/Category.js";
import ValidUser from "../middleware/ValidUser.js";
import ValidateInput from "../middleware/ValidateInput.js";
import ValidateCategory from "../validators/CategoryValidator.js";
const router = Router();

router.post('/addCategory', ValidateInput(ValidateCategory), ValidUser, async (req, res) => {
    try {
        var cat = await Category.create({ ...req.body, user: req.user._id })
        cat = await Category.findById(cat._id).populate('user');
        res.status(200).json({ success: true, cat });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
});

router.put('/editCategory/:id', ValidUser, async (req, res) => {
    try {
        const cat = await Category.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true }).populate('user');
        res.status(200).json({ success: true, cat });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
});

router.get('/getCategories', ValidUser, async (req, res) => {
    try {
        const cats = await Category.find().populate('user');
        res.status(200).json({ success: true, cats });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
})

export default router;