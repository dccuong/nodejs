
import expressJWT from 'express-jwt';

export const checkAuth = (req, res, next) => {
    const isAdmin = JSON.parse(localStorage.getItem("user")).user.role
    if (isAdmin == 1) {
        next();
    } else {
        console.log('out now');
    }
}
export const requiredSigin = expressJWT({
    algorithms: ['HS256'],
    secret: '123456',
    requestProperty: "auth" // req.auth
});

export const isAuth = (req, res, next) => {
    const status = req.user._id == req.auth._id;
    console.log(req.user._id)
    if (!status) {
        res.status(401).json({
            message: "Ban khong co quyen truy cap"
        })
    }
    next();
}
export const isAdmin = (req, res, next) => {
    if (req.user.role != 1) {
        res.status(401).json({
            message: "Bạn không phải là admin. Chim cút"
        })
    }
    next();
}
