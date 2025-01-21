import { Router } from 'express';
import { createCategory, listCategories } from './useCases/categories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', (_req, res) => res.send('HELLO!'));

// Create product
router.post('/products', (_req, res) => res.send('HELLO!'));

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
