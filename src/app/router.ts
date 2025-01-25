import { Router } from 'express';
import { createCategory, listCategories, listProductsByCategory } from './useCases/categories';
import multer from 'multer';
import path from 'path';
import { createProduct } from './useCases/products';
import { cancelOrder, changeOrderStatus, createOrder, listOrders } from './useCases/orders';

export const router = Router();

const upload = multer({
	limits: {
		fileSize: 8000000
	},
	storage: multer.diskStorage({
		destination(_req, _file, callback) {
			callback(null, path.resolve(__dirname, "..", "uploads"));
		},
		filename(_req, file, callback) {
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
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
