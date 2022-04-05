import Category from '../models/category';
import Product from '../models/products';

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Thêm không thành công"
        })
    }
}
export const getall = async (req, res) => {
    try {
        const category = await Category.find({}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "gọi không thành công"
        })
    }
}
export const read = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec();
        const products = await Product.find({ category }).select('-category').exec();
        res.json({
            category, products
        });
    } catch (error) {
        res.status(400).json({
            error: "gọi không thành công"
        })
    }
}