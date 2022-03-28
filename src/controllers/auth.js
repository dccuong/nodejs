import User from "../models/user"
import jwt from "jsonwebtoken"
export const singup = async (req, res) => {
    const { email, name, pass, role } = req.body;
    console.log(email)
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            res.status(400).json({
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
        res.status(400).json({
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
            res.status(400).json({
                message: "Email không chính xác"
            })
        } else if (!user.authenticate(pass)) {
            res.status(400).json({
                message: "Mật khẩu không chính xác"
            })
        }
        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: '1h' })
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,

            }
        })

    } catch (error) {
        res.status(400).json({
            error: "Lỗi đăng nhập"
        })
    }
};
export const myin4 = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id }).exec
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: "Lỗi đăng nhập"
        })
    }
}