const catchAsyncError = require('../middlewares/catchAsyncErrors')

const stripe = require('strike')(process.env.STRIPE_SECRET_KEY)

//Process stripe payments => /api/payment/process

exports.processPayment = catchAsyncErrors(async(req, res, next) => {
    const paymentIntent = await stripe.paymentIntent.create({
        amount: req.body.amount,
        currency: 'usd',

        metadata: { integration_check:'accept_a_payment'}
    });

    res.status(200).json({
        success: true,
        client_Secret: paymentIntent.client_Secret
    })
})


//send stripe API Key => /api/stripeapi

exports.sendStripeApi = catchAsyncErrors(async(req, res, next) => {
    

    res.status(200).json({
        success: true,
        stripeApiKey: process.env.STRIPE_API_KEY
    })
})