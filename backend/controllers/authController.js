const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//Register a user => /api/register
exports.registerUser = catchAsyncErrors(async(req, res, next)=>{

    const {name, email, password} = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:'abc.jpeg',
            url:'http://www.avatar.abc.jpeg'
        }
    })


    const token = user.getJwtToken();

    res.status(201).json({
        success: true,
        token
    })
})

// Login user /api/login

exports.loginUser = catchAsyncErrors( async (req,res, next) => {
    const { email,password} =req.body;

    // check if email and password is entered by user
    if(!email || !password) {
        return next(new ErrorHandler('Please enter email and password!', 400))

    }
    // finding user in db
    const user = await User.findOne({email}).select('+password')
    if(!user){
        return next(new ErrorHandler('Invalid Email or password',401));    
    }
    // checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or password',401));
    }
    const token = user.getJwtToken();
    res.status(200).json({
        success: true,
        token
    })
})