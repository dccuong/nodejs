import category from '../models/category';
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
export const update = async (req, res) => {
    const condition = { _id: req.params.id }
    const update = req.body;
    try {
        const product = await Category.findOneAndUpdate(condition, update, { new: true }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Sửa sản phẩm không thành công"
        })
    }
    // const result = data.map(item => item.id == req.params.id ? req.body : item);
    // res.json(result)
};
export const get = async (req, res) => {
    try {
        console.log(req.params.id)
        const product = await category.findOne({ _id: req.params.id }).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }
    // res.json(data.find(item => item.id == req.params.id));
};