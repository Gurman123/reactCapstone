const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    productName: { type: String, required: true, minlength: 3 },
    productCategory: {
        type: String, required: true,
        enum: {
            values: [
                'Curtain panels',
                'Pleated Curtains',
                'Backdrops Curtains',
                'Theater Stage Curtains',
                'Domestic Curtains',
                'Industrial Curtain',
                'Pillow Covers',
                'Stage Masking',
                'Church Paraments',
                'Leather-Products'
            ]
        }

    },
    productPrice: { type: Number, required: true },
    productAvailabity: { type: String, enum: ['In stock', 'Out of stock'], default: 'In stock' },
    productColour: { type: Array, default: 'black' },
    productWidth: { type: Number, required: true },
    productHeight: { type: Number, required: true },
    fabricWeight: { type: String, required: true },
    productDescription: { type: String, required: true },
    productRating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    numofReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
    //productReviews: [reviewSchema]


})

module.exports = mongoose.model('product', productSchema);