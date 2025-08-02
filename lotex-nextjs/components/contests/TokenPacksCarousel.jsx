import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const tokenPacks = [
  {
    id: 1,
    name: 'Starter Pack',
    tokens: 200,
    price: 10.00,
    discount: 0,
    description: 'Perfect for new players to get started!',
  },
  {
    id: 2,
    name: 'Bronze Pack',
    tokens: 500,
    price: 22.50,
    discount: 10,
    description: 'More tokens for more chances to win!',
  },
  {
    id: 3,
    name: 'Silver Pack',
    tokens: 1000,
    price: 40.00,
    discount: 20,
    description: 'Great value for regular players!',
  },
  {
    id: 4,
    name: 'Gold Pack',
    tokens: 2000,
    price: 70.00,
    discount: 30,
    description: 'Serious players choose Gold!',
  },
  {
    id: 5,
    name: 'Diamond Pack',
    tokens: 2500,
    price: 75.00,
    discount: 40,
    description: 'The ultimate pack for the ultimate player!',
  },
];

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: '/images/icon/visa.svg' },
  { id: 'paypal', name: 'PayPal', icon: '/images/icon/paypal.svg' },
  { id: 'crypto', name: 'Cryptocurrency', icon: '/images/icon/crypto.svg' },
];

export default function TokenPacksCarousel() {
  const [currentStep, setCurrentStep] = useState(1); // 1: Select Pack, 2: Payment, 3: Processing, 4: Sealed
  const [showSealedMessage, setShowSealedMessage] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPack, setSelectedPack] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState('card');

  const handlePackSelect = (pack) => {
    setSelectedPack(pack);
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(3);
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep(4);
    }, 3000);
  };

  const handleContinuePlaying = () => {
    window.location.reload();
  };

  // Step 4: Entry Sealed Message
  if (currentStep === 4) {
    return (
      <div className="token-packs-carousel-container">
        <div className="contest-entry-sealed">
          <div className="sealed-content">
            <div className="padlock-animation">
              <div className="padlock-container">
                <i className="icon-lock" style={{ fontSize: '4rem', color: 'var(--Main-color)' }}></i>
                <div className="lock-pulse"></div>
              </div>
            </div>
            
            <h4>Entry Sealed!</h4>
            <div className="sealed-message">
              Your contest entry is now securely locked in our system.
            </div>
            
            <div className="live-game-reminder">
              <p><strong>Don't miss out!</strong></p>
              <p>Login during the live game for bonus skill challenges that could boost your score even higher!</p>
            </div>

            <div className="sealed-actions">
              <button 
                className="tf-btn"
                onClick={handleContinuePlaying}
              >
                Continue Playing <i className="icon-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Processing Payment
  if (currentStep === 3 && isProcessing) {
    return (
      <div className="token-packs-carousel-container">
        <div className="payment-processing">
          <div className="processing-content">
            <div className="processing-icon">
              <i className="icon-clock" />
              <div className="processing-spinner"></div>
            </div>
            <h4>Processing Your Payment...</h4>
            <p>Please wait while we securely process your transaction.</p>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Payment Method Selection
  if (currentStep === 2) {
    return (
      <div className="token-packs-carousel-container">
        <div className="payment-method-selection">
          <div className="token-purchase-header">
            <h4 className="title">Payment Details</h4>
            <div className="selected-pack-summary">
              <span>{selectedPack?.name} - {selectedPack?.tokens.toLocaleString()} Tokens</span>
              <span className="price">${selectedPack?.price.toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handlePaymentSubmit} className="payment-form">
            <div className="payment-methods">
              <h5>Select Payment Method</h5>
              <div className="payment-options">
                {paymentMethods.map((method) => (
                  <label key={method.id} className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={selectedPayment === method.id}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <div className="payment-option-content">
                      <div className="payment-icon">
                        <i className="icon-wallet" />
                      </div>
                      <span>{method.name}</span>
                    </div>
                    <span className="payment-radio"></span>
                  </label>
                ))}
              </div>
            </div>

            {selectedPayment === 'card' && (
              <div className="card-details">
                <div className="form-row">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group half">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" required />
                  </div>
                  <div className="form-group half">
                    <label>CVV</label>
                    <input type="text" placeholder="123" required />
                  </div>
                </div>
              </div>
            )}

            <div className="payment-actions">
              <button 
                type="button" 
                className="tf-btn style-3"
                onClick={() => setCurrentStep(1)}
              >
                Back to Packs
              </button>
              <button type="submit" className="tf-btn">
                Complete Purchase <i className="icon-right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Step 1: Token Pack Selection
  return (
    <div className="token-packs-carousel-container">
      <h3>Choose Your Token Pack</h3>
      <div className="token-packs-carousel-wrapper">
        {tokenPacks.map((pack) => (
          <div key={pack.id} className="token-pack-item">
            <h4>{pack.name}</h4>
            <p>{pack.tokens} Tokens</p>
            <p className="price">${pack.price.toFixed(2)}</p>
            {pack.discount > 0 && (
              <p className="discount">Save {pack.discount}%</p>
            )}
            <p className="description">{pack.description}</p>
            <button 
              className="tf-btn"
              onClick={() => handlePackSelect(pack)}
            >
              Buy Now <i className="icon-right" />
            </button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .token-packs-carousel-container {
          padding: 20px;
          background-color: var(--Bg-2);
          border-radius: 16px;
          text-align: center;
          margin-top: 40px; /* Added margin to move it down */
        }
        .token-packs-carousel-wrapper {
          display: flex;
          overflow-x: auto; /* Enable horizontal scrolling for now */
          gap: 20px;
          padding: 10px 0;
          justify-content: center; /* Center items if they don't fill the width */
        }
        .token-pack-item {
          flex: 0 0 auto; /* Prevent items from shrinking */
          width: 200px; /* Fixed width for each item */
          padding: 20px;
          border: 1px solid var(--Border);
          border-radius: 10px;
          background-color: var(--Bg-3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
        }
        .token-pack-item h4 {
          font-size: 1.5em;
          margin-bottom: 10px;
          color: var(--Main-color);
        }
        .token-pack-item p {
          margin-bottom: 5px;
          color: var(--Secondary);
        }
        .token-pack-item .price {
          font-size: 1.8em;
          font-weight: bold;
          color: var(--White);
          margin-bottom: 10px;
        }
        .token-pack-item .discount {
          color: #00b67a; /* A green color for discounts */
          font-weight: bold;
          margin-bottom: 15px;
        }
        .token-pack-item .description {
          font-size: 0.9em;
          color: var(--Secondary);
          margin-bottom: 20px;
          min-height: 40px; /* Ensure consistent height */
        }
        .tf-btn {
          margin-top: auto; /* Push button to the bottom */
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}