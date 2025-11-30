import React from 'react'
import '../styles/PaymentSuccess.css'
import { useLocation } from 'react-router'

const PaymentSuccess = () => {
const reference = new URLSearchParams(useLocation().search).get("reference");

  return (
    <div className='payment-success-container'>
        <div className='payment-success-card'>
            <h1 className='payment-success-title'>Payment Successful</h1>
            <p className='payment-success-message'>
                Thank you for the payment. Your payment was Successful!
            </p>
            {reference && (
                <div className='payment-success-reference'>
                    <strong>Reference ID:</strong>{reference}
                </div>
            )}
        </div>
    </div>
  )
}

export default PaymentSuccess