import User from "../models/user"
export const singup = async (req, res) => {
    const { email, name, pass } = req.body;
    console.log(email)
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await new User({ email, name, pass }).save();
        console.log(user)
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
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
                message: "Email không tồn tại"
            })
        }
        if (!user.authenticate(pass)) {
            res.status(400).json({
                message: "Mật khẩu không đúng"
            })
        }
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "Đăng nhập thất bại"
        })
    }
}