import express from 'express'
import { getKey, paymentVerification, processPayment } from '../controller/productController.js';

const router = express.Router();
router.route('/payment/process').post(processPayment)
router.route('/getKey').get(getKey)               //For the frontend implementation
router.route('/paymentVerification').post(paymentVerification)
export default router;