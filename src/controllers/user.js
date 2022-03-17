import User from "../models/user"
export const login = async (req, res) => {
    try {
        console.log(req.body.email)
        const user = await User.findOne({ email: req.body.email, password: req.body.password }).exec();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
};
//register
export const register = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được tài khoản"
        })
    }
}