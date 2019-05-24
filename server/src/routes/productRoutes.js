const express = require('express');
const router = new express.Router();

const Currency = require('../db/models/Currency');

router.post('/', async (req, res) => {
	const currency = new Currency(req.body);
	try {
		await currency.save();
		res.status(201).json(currency);
		console.log(currency)
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

router.get('/', async (req, res) => {
	try {
		const currency = await Currency.find({});
		res.json(currency);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

router.get('/:id', async (req, res) => {
	const _id = req.params.id;

	try {
		const currency = await Currency.findById(_id);
		if (!currency) return res.status(404).json({ message: 'Currency not found' });
		res.json(currency);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

router.get('/name/:name', async (req, res) => {
	const name = req.params.name;

	try {
		const currency = await Currency.findOne({"name": name});
		if (!currency) return res.status(404).json({ message: 'Currency not found' });
		res.json(currency);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

router.get('/price/:price', async (req, res) => {
	const price = req.params.price;

	try {
		const currency = await Currency.findOne({"price": price});
		if (!currency) return res.status(404).json({ message: 'Currency not found' });
		res.json(currency);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

// router.patch('/:id', async (req, res) => {
// 	const updates = Object.keys(req.body);
// 	const allowedUpdates = ['name', 'price', 'url'];
// 	const isValidOperation = updates.every(update => allowedUpdates.includes(update));

// 	if (!isValidOperation) return res.status(400).json({ message: 'Invalid updates!' });

// 	try {
// 		const currency = await Currency.findByIdAndUpdate(req.params.id, req.body, {
// 			new: true,
// 			runValidators: true,
// 		});

// 		if (!currency) return res.status(404).json({ message: 'Currency not found!' });

// 		res.json(currency);
// 	} catch (error) {
// 		res.status(500).json({ message: 'Bad request' });
// 	}
// });

router.delete('/:id', async (req, res) => {
	try {
		const currency = await Currency.findByIdAndDelete(req.params.id);

		if (!currency) res.status(404).json({ message: 'Currency not found' });

		res.json(currency);
	} catch (error) {
		res.status(500).json({ message: 'Bad request' });
	}
});

module.exports = router;
