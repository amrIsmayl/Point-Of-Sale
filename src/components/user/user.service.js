const AppError = require("../../utilts/AppError");
const factory = require("../Handlers/handler.factory")
const { catchAsyncError } = require("../../utilts/catchAsync");
const userModel = require("./user.model");
const bcrypt = require('bcrypt');



// create new users
exports.createUsers = catchAsyncError(async (req, res, next) => {
    const { name, lastName, phone, email, password, age } = req.body
    let isUser = await userModel.findOne({ email })
    if (isUser) return next(new AppError("user already exist", 401));
    // if email to user exist don't create new user
    bcrypt.hash(password, Number(process.env.ROUND), async function (err, hash) {
        req.body.password = hash;
        let user = new userModel({ name, lastName, phone, email, password: hash, age });
        await user.save();
        res.status(200).json({ result: user });
    })

})


// get all users
exports.getAllUsers = factory.getAll(userModel)


// get specific user
exports.getSpecificUser = factory.specificOne(userModel)


// to update specific user
// exports.updateSpecificUser = catchAsyncError(async (req, res, next) => {
//     let isUser = await userModel.findOne({ email: req.body.email })
//     if (isUser) return next(new AppError("user already exist", 401));
//     // if email to user exist don't create new user
//     let user = new userModel(req.body);
//     await user.save();
//     res.status(200).json({ result: user });
// })

// to update specific user
exports.updateSpecificUser = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    let isUser = await userModel.findById({ _id: id })
    if (!isUser) return next(new AppError("not found user", 401));
    // if not found user create error message
    user = await userModel.findByIdAndUpdate(isUser._id, req.body
        , { new: true })
    res.status(200).json({ result: user });
})

// to change password specific user
exports.changePassword = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    req.body.passwordChangeAt = Date.now()
    let document = await userModel.findByIdAndUpdate(id, req.body
        , { new: true });
    // el new 3shan ===> show data befor update category because by default they show data after update
    !document && new AppError("brand not found", 400)
    document && res.status(200).json({ result: document });
})

// to delete specific user
exports.deleteUser = factory.deleteOne(userModel)