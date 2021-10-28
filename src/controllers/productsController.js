const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render (path.join(__dirname,"../views/products"));
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		product = products[req.params.id-1];
		res.render (path.join(__dirname,"../views/detail"),{product, toThousand});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render (path.join(__dirname,"../views/product-create-form"));
	},
	
	// Create -  Method to store
	store: (req, res) => {

		 newId = products.length;
		 newProduct =  {
			"id": String(newId),
			"name": req.body.name,
			"price": Number(req.body.price),
			"discount": Number(req.body.discount),
			"category": req.body.category,
			"description": req.body.description,
			"image": ""
		   }
		   products.push(newProduct);
		   res.send (products);

	},

	// Update - Form to edit
	edit: (req, res) => {
		productId = req.params.id;
		res.render (path.join(__dirname,"../views/product-edit-form"),{ productToEdit: products[productId]});
		//res.send ("ESTA ES UNA PRUEBA");
	},
	// Update - Method to update
	update: (req, res) => {
		res.send ("este update se hace la clase que viene");
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.send ("este delete se hace la clase que viene");
	}
};

module.exports = controller;