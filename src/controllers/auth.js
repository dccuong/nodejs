import User from "../models/user"
import jwt from "jsonwebtoken"
export const singup = async (req, res) => {
    const { email, name, pass, role } = req.body;
    console.log(email)
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            return res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await new User({ email, name, pass, role }).save();
        console.log(user)
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role

            }
        });
    } catch (error) {
        return res.status(400).json({
            message: "Đăng ký thất bại"
        })
    }
};
//register
export const signin = async (req, res) => {
    const { email, pass } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(400).json({
                message: "Email không chính xác"
            })
        }
        // console.log(user.pass)
        // console.log(user.authenticate(pass))
        if (!user.authenticate(pass)) {
            // console.log(pass)
            // console.log(!user.authenticate(pass))
            return res.status(400).json({
                message: "Mật khẩu không chính xác"
            })
        }
        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: '100h' })
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role

            }
        })

    } catch (error) {
        return res.status(400).json({
            error: "Lỗi đăng nhập"
        })
    }
};
export const myin4 = async (req, res) => {
    try {
        console.log(req.params.id)
        const product = await User.findOne({ _id: req.params.id }).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }
}