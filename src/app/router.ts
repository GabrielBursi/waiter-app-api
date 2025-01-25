import { Router } from 'express';
import { createCategory, listCategories } from './useCases/categories';
import multer from 'multer';
import path from 'path';
import { createProduct } from './useCases/products';

export const router = Router();

const upload = multer({
	limits: {
		fileSize: 8000000
	},
	storage: multer.diskStorage({
		destination(_req, _file, callback) {
			callback(null, path.resolve(__dirname, "..", "uploads"));
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});


// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', (_req, res) => res.send('HELLO!'));

// Create product
router.post('/products', upload.single("image"), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', (_req, res) => res.send('HELLO!'));

// List orders
router.get('/orders', (_req, res) => res.send('HELLO!'));

// Create order
router.post('/orders', (_req, res) => res.send('HELLO!'));

// Change order status
router.patch('/orders/:orderId', (_req, res) => res.send('HELLO!'));

// Delete/cancel order
router.delete('/orders/:orderId', (_req, res) => res.send('HELLO!'));
