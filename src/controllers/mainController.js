const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req,res) => {
		visited = products.filter(function(producto){
			return producto.category == "visited";
		});

		inSale = products.filter(function(producto){
			return producto.category == "in-sale";
		});
		res.render (path.join(__dirname,"../views/index"),{visited, inSale, toThousand});
	},
	search: (req, res) => {
		res.render (path.join(__dirname,"../views/results"));
	},
};

module.exports = controller;
