"use client";
import { useState } from "react";
import Image from "next/image";

// Mock user token balance - in a real app, this would come from your user state/API
const USER_TOKEN_BALANCE = 150; // Example: user has 150 tokens

// Token costs for each contest
const CONTEST_TOKEN_COSTS = {
  1: 100, // iPhone costs 100 tokens
  2: 200, // Tesla costs 200 tokens  
  3: 75,  // MacBook costs 75 tokens
  4: 150, // Rolex costs 150 tokens
  5: 50,  // Cash prize costs 50 tokens
};

const prizeDetails = {
  1: {
    id: 1,
    name: "Apple iPhone 15 Pro Max",
    category: "Smartphone",
    rrp: 1199.00,
    description: "The most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system.",
    features: [
      "6.7-inch Super Retina XDR display",
      "A17 Pro chip with 6-core GPU",
      "Pro camera system with 48MP main camera",
      "Up to 29 hours video playback",
      "Titanium design with Ceramic Shield front"
    ],
    images: [
      "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Chip": "A17 Pro",
      "Storage": "256GB",
      "Camera": "48MP Pro camera system",
      "Battery": "Up to 29 hours video",
      "Material": "Titanium"
    }
  },
  2: {
    id: 2,
    name: "Tesla Model 3",
    category: "Electric Vehicle",
    rrp: 45000.00,
    description: "The world's best-selling electric vehicle with autopilot capabilities and premium interior.",
    features: [
      "Long Range: 358 miles EPA estimated range",
      "Autopilot advanced safety features",
      "15-inch touchscreen display",
      "Premium interior with heated seats",
      "Over-the-air software updates"
    ],
    images: [
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      "Range": "358 miles EPA estimated",
      "Acceleration": "0-60 mph in 4.2s",
      "Top Speed": "140 mph",
      "Drive": "Dual Motor All-Wheel Drive",
      "Seating": "5 Adults",
      "Cargo": "23 cu ft"
    }
  },
  3: {
    id: 3,
    name: "MacBook Pro 16-inch",
    category: "Laptop",
    rrp: 2499.00,
    description: "The most powerful MacBook Pro ever with M3 Max chip and stunning Liquid Retina XDR display.",
    features: [
      "M3 Max chip with 16-core CPU",
      "16.2-inch Liquid Retina XDR display",
      "Up to 128GB unified memory",
      "Up to 22 hours battery life",
      "Six-speaker sound system"
    ],
    images: [
      "https://images.pexels.com/photos/3586062/pexels-photo-3586062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3586062/pexels-photo-3586062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3586062/pexels-photo-3586062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      "Display": "16.2-inch Liquid Retina XDR",
      "Chip": "Apple M3 Max",
      "Memory": "36GB unified memory",
      "Storage": "1TB SSD",
      "Battery": "Up to 22 hours",
      "Weight": "4.8 pounds"
    }
  },
  4: {
    id: 4,
    name: "Rolex Submariner",
    category: "Luxury Watch",
    rrp: 8950.00,
    description: "The legendary diving watch with exceptional precision and timeless design.",
    features: [
      "Oystersteel case and bracelet",
      "Unidirectional rotatable bezel",
      "Waterproof to 300 metres",
      "Self-winding mechanical movement",
      "Chromalight display"
    ],
    images: [
      "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      "Case": "Oystersteel, 41mm",
      "Movement": "Perpetual, mechanical",
      "Power Reserve": "Approximately 70 hours",
      "Water Resistance": "300 metres",
      "Bracelet": "Oystersteel",
      "Clasp": "Oysterlock safety clasp"
    }
  },
  5: {
    id: 5,
    name: "Cash Prize $50,000",
    category: "Cash",
    rrp: 50000.00,
    description: "Pure cash prize - no strings attached! Use it however you want.",
    features: [
      "Instant cash transfer",
      "No taxes deducted",
      "Use for anything you want",
      "Immediate availability",
      "Full amount guaranteed"
    ],
    images: [
      "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      "Amount": "$50,000 USD",
      "Transfer": "Bank transfer or check",
      "Processing": "1-3 business days",
      "Taxes": "Winner responsibility",
      "Restrictions": "None",
      "Validity": "Lifetime"
    }
  }
};

export default function PrizeDetails() {
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userTokens, setUserTokens] = useState(USER_TOKEN_BALANCE);

  const openModal = (prizeId) => {
    const prize = prizeDetails[prizeId];
    if (prize) {
      setSelectedPrize(prize);
      setCurrentImageIndex(0);
    }
  };

  const closeModal = () => {
    setSelectedPrize(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedPrize && selectedPrize.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedPrize.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedPrize && selectedPrize.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedPrize.images.length - 1 : prev - 1
      );
    }
  };

  const getTokenCost = (prizeId) => {
    return CONTEST_TOKEN_COSTS[prizeId] || 100;
  };

  const hasEnoughTokens = (prizeId) => {
    return userTokens >= getTokenCost(prizeId);
  };

  const handleEnterContest = () => {
    const tokenCost = getTokenCost(selectedPrize.id);
    if (hasEnoughTokens(selectedPrize.id)) {
      // Close the modal and navigate to contest details page
      closeModal();
      // Navigate to the contest entry form
      window.location.href = `/contest-details/${selectedPrize.id}`;
    }
  };

  const handleBuyTokens = () => {
    closeModal();
    // Open token purchase modal
    const tokenModal = document.getElementById('tokenPurchaseModal');
    if (tokenModal) {
      import('bootstrap').then((bootstrap) => {
        const modal = new bootstrap.Modal(tokenModal);
        modal.show();
      });
    }
  };

  // Expose the openModal function globally so it can be called from contest cards
  if (typeof window !== 'undefined') {
    window.openPrizeModal = openModal;
  }

  if (!selectedPrize) return null;

  const tokenCost = getTokenCost(selectedPrize.id);
  const canEnter = hasEnoughTokens(selectedPrize.id);

  return (
    <div className="modal fade modalCenter show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div className="modal-content">
          <div className="prize-details-wrap">
            <div className="close-form">
              <button className="btn-hide-popup" onClick={closeModal}>
                <i className="icon-close" />
              </button>
            </div>

            <div className="prize-details-content">
              <div className="prize-details-header">
                <div className="prize-category">{selectedPrize.category}</div>
                <h2 className="prize-name">{selectedPrize.name}</h2>
                <div className="prize-rrp">
                  RRP: <span>${selectedPrize.rrp.toLocaleString()}</span>
                </div>
              </div>

              <div className="prize-details-body">
                <div className="prize-images-section">
                  <div className="prize-image-gallery">
                    <div className="main-image">
                      <div className="image-placeholder">
                        <i className="icon-star" style={{ fontSize: '4rem', color: 'var(--Main-color)' }} />
                        <p>Prize Image</p>
                      </div>
                      {selectedPrize.images.length > 1 && (
                        <>
                          <button className="image-nav prev" onClick={prevImage}>
                            <i className="icon-back" />
                          </button>
                          <button className="image-nav next" onClick={nextImage}>
                            <i className="icon-next" />
                          </button>
                        </>
                      )}
                    </div>
                    {selectedPrize.images.length > 1 && (
                      <div className="image-thumbnails">
                        {selectedPrize.images.map((_, index) => (
                          <button
                            key={index}
                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                          >
                            <div className="thumbnail-placeholder">
                              <i className="icon-star" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="prize-info-section">
                  <div className="prize-description">
                    <h4>Description</h4>
                    <p>{selectedPrize.description}</p>
                  </div>

                  <div className="prize-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedPrize.features.map((feature, index) => (
                        <li key={index}>
                          <i className="icon-check-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="prize-specifications">
                    <h4>Specifications</h4>
                    <div className="specs-grid">
                      {Object.entries(selectedPrize.specifications).map(([key, value]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-label">{key}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="prize-actions">
                    <div className="token-balance-info">
                      <span className="user-tokens">Your Tokens: {userTokens}</span>
                      <span className="contest-cost">Entry Cost: {tokenCost} tokens</span>
                    </div>
                    
                    {canEnter ? (
                      <button 
                        className="tf-btn enter-contest-btn"
                        onClick={handleEnterContest}
                      >
                        Enter Contest Now <i className="icon-right" />
                      </button>
                    ) : (
                      <button 
                        className="tf-btn buy-tokens-btn"
                        onClick={handleBuyTokens}
                      >
                        Buy Tokens to Enter <i className="icon-right" />
                      </button>
                    )}
                    
                    <button className="tf-btn style-3" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}