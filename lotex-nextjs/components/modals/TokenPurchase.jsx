"use client";
import { useState } from "react";
import Image from "next/image";

const tokenPacks = [
  {
    id: 1,
    name: 'Starter Pack',
    tokens: 200,
    price: 10.00,
    discount: 0,
    description: 'Perfect for new players to get started!',
    popular: false,
  },
  {
    id: 2,
    name: 'Bronze Pack',
    tokens: 500,
    price: 22.50,
    discount: 10,
    description: 'More tokens for more chances to win!',
    popular: false,
  },
  {
    id: 3,
    name: 'Silver Pack',
    tokens: 1000,
    price: 40.00,
    discount: 20,
    description: 'Great value for regular players!',
    popular: true,
  },
  {
    id: 4,
    name: 'Gold Pack',
    tokens: 2000,
    price: 70.00,
    discount: 30,
    description: 'Serious players choose Gold!',
    popular: false,
  },
  {
    id: 5,
    name: 'Diamond Pack',
    tokens: 2500,
    price: 75.00,
    discount: 40,
    description: 'The ultimate pack for the ultimate player!',
    popular: false,
  },
];

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: '/images/icon/visa.svg' },
  { id: 'paypal', name: 'PayPal', icon: '/images/icon/paypal.svg' },
  { id: 'crypto', name: 'Cryptocurrency', icon: '/images/icon/crypto.svg' },
];

export default function TokenPurchase() {
  const [currentStep, setCurrentStep] = useState(1); // 1: Select Pack, 2: Payment, 3: Confirmation
  const [selectedPack, setSelectedPack] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePackSelect = (pack) => {
    setSelectedPack(pack);
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Check if we came from contest entry form
      const contestEntryInProgress = sessionStorage.getItem('contestEntryInProgress');
      if (contestEntryInProgress) {
        // Clear the flag
        sessionStorage.removeItem('contestEntryInProgress');
        // Show padlock confirmation instead of success
        setCurrentStep(4); // New step for padlock confirmation
      } else {
        setCurrentStep(3); // Regular success for other purchases
      }
    }, 3000);
  };

  const resetModal = () => {
    setCurrentStep(1);
    setSelectedPack(null);
    setSelectedPayment('card');
    setIsProcessing(false);
  };

  return (
    <div className="modal fade modalCenter" id="tokenPurchaseModal">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="token-purchase-wrap">
            <div className="close-form">
              <a href="#" className="btn-hide-popup" data-bs-dismiss="modal" onClick={resetModal}>
                <i className="icon-close" />
              </a>
            </div>

            {/* Step 1: Token Pack Selection */}
            {currentStep === 1 && (
              <div className="token-pack-selection">
                <div className="token-purchase-header">
                  <h4 className="title">Choose Your Token Pack</h4>
                  <p className="subtitle">Select the perfect token pack for your gaming needs</p>
                </div>
                
                <div className="token-packs-grid">
                  {tokenPacks.map((pack) => (
                    <div 
                      key={pack.id} 
                      className={`token-pack-card ${pack.popular ? 'popular' : ''}`}
                      onClick={() => handlePackSelect(pack)}
                    >
                      {pack.popular && <div className="popular-badge">Most Popular</div>}
                      {pack.discount > 0 && (
                        <div className="discount-badge">Save {pack.discount}%</div>
                      )}
                      
                      <div className="pack-header">
                        <h5 className="pack-name">{pack.name}</h5>
                        <div className="pack-tokens">{pack.tokens.toLocaleString()} Tokens</div>
                      </div>
                      
                      <div className="pack-price">
                        <span className="currency">$</span>
                        <span className="amount">{pack.price.toFixed(2)}</span>
                      </div>
                      
                      <p className="pack-description">{pack.description}</p>
                      
                      <button className="tf-btn pack-select-btn">
                        Select Pack <i className="icon-right" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && !isProcessing && (
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
            )}

            {/* Step 3: Processing */}
            {isProcessing && (
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
            )}

            {/* Step 4: Success */}
            {currentStep === 3 && !sessionStorage.getItem('contestEntryInProgress') && (
              <div className="payment-success">
                <div className="success-content">
                  <div className="success-icon">
                    <i className="icon-check-1" />
                  </div>
                  <h4>Purchase Successful!</h4>
                  <div className="purchase-details">
                    <p>You have successfully purchased:</p>
                    <div className="purchased-pack">
                      <span className="pack-name">{selectedPack?.name}</span>
                      <span className="pack-tokens">{selectedPack?.tokens.toLocaleString()} Tokens</span>
                    </div>
                    <div className="total-paid">
                      Total Paid: <span>${selectedPack?.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="success-actions">
                    <button 
                      className="tf-btn"
                      data-bs-dismiss="modal"
                      onClick={resetModal}
                    >
                      Start Playing <i className="icon-right" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contest Entry Sealed */}
            {currentStep === 4 && (
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
                      data-bs-dismiss="modal"
                      onClick={() => {
                        resetModal();
                        // Navigate back to contest or dashboard
                        window.location.href = '/dashboard';
                      }}
                    >
                      Continue Playing <i className="icon-right" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}