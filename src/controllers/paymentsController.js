const Payment = require('../models/paymentsModel');

// Controller functions
const createPayment = async (paymentData) => {
  try {
    const payment = new Payment(paymentData);
    const savedPayment = await payment.save();
    return savedPayment;
  } catch (error) {
    throw error;
  }
};

const getPayments = async () => {
  try {
    const payments = await Payment.find();
    return payments;
  } catch (error) {
    throw error;
  }
};

// Other controller functions for updating, deleting, etc. can be added here

module.exports = {
  createPayment,
  getPayments,
  // Export other controller functions here
};
