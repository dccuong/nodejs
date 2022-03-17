// fake data
// const data = [
//     { id: 1, name: "Product A1" },
//     { id: 3, name: "Product A2" },
//     { id: 4, name: "Product A3" },
//     { id: 5, name: "Product A4" },
//     { id: 2, name: "Product B" }
// ];
import Product from '../models/products'



export const list = async (req, res) => {
    try {
        const product = await Product.find({}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
};
//get product
export const get = async (req, res) => {
    try {
        console.log(req.params.id)
        const product = await Product.findOne({ _id: req.params.id }).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }
    // res.json(data.find(item => item.id == req.params.id));
};
//delete product
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id });
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }

    // res.json(data.filter(item => item.id != req.params.id));
};
//edit product
export const update = async (req, res) => {
    const condition = { id: req.params.id }
    const update = req.body;
    try {
        const product = await Product.findOneAndUpdate(condition, update).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Sửa sản phẩm không thành công"
        })
    }
    // const result = data.map(item => item.id == req.params.id ? req.body : item);
    // res.json(result)
};
//add product
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm"
        })
    }
};