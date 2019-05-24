const mongoose = require('mongoose');

const Product = mongoose.model('Currency', {
	name: {
		type: String,
		required: true,
		trim: true,
	},
	symbol: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: false,
	},
	id: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	website: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	}
});

module.exports = Product;
