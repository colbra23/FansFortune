"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tokenPacks = [
  {
    id: 1,
    name: "Starter Pack",
    tokens: 200,
    price: 10.0,
    originalPrice: 12.0,
    discount: 15,
    description: "Perfect for new players to get started!",
    popular: false,
  },
  {
    id: 2,
    name: "Bronze Pack",
    tokens: 500,
    price: 22.5,
    originalPrice: 27.0,
    discount: 17,
    description: "More tokens for more chances to win!",
    popular: false,
  },
  {
    id: 3,
    name: "Silver Pack",
    tokens: 1000,
    price: 40.0,
    originalPrice: 50.0,
    discount: 20,
    description: "Great value for regular players!",
    popular: true,
  },
  {
    id: 4,
    name: "Gold Pack",
    tokens: 2000,
    price: 70.0,
    originalPrice: 90.0,
    discount: 22,
    description: "Serious players choose Gold!",
    popular: false,
  },
  {
    id: 5,
    name: "Diamond Pack",
    tokens: 2500,
    price: 75.0,
    originalPrice: 100.0,
    discount: 25,
    description: "The ultimate pack for the ultimate player!",
    popular: false,
  },
];

export default function TokenPacksCarousel() {
  const [selectedPack, setSelectedPack] = useState(tokenPacks[2]); // Default to Silver Pack
  const [quantity, setQuantity] = useState(1);

  const handlePackSelect = (pack) => {
    setSelectedPack(pack);
    setQuantity(1);
  };

  const totalPrice = (selectedPack.price * quantity).toFixed(2);
  const totalTokens = selectedPack.tokens * quantity;

  return (
    <div className="token-packs-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-40">
              <h3 className="title wow fadeInUp" data-wow-delay="0s">
                Choose Your Token Pack
              </h3>
              <p className="wow fadeInUp" data-wow-delay="0.1s">
                Select the perfect token pack for your gaming experience
              </p>
            </div>
          </div>
        </div>
        
        {/* Token Packs Grid */}
        <div className="row mb-40">
          <div className="col-12">
            <div className="token-packs-grid">
              {tokenPacks.map((pack) => (
                <div
                  key={pack.id}
                  className={`token-pack-item ${
                    selectedPack.id === pack.id ? "selected" : ""
                  } ${pack.popular ? "popular" : ""}`}
                  onClick={() => handlePackSelect(pack)}
                >
                  {pack.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}
                  <div className="pack-header">
                    <h4 className="pack-name">{pack.name}</h4>
                    <div className="token-count">
                      <span className="tokens">{pack.tokens.toLocaleString()}</span>
                      <span className="token-label">Tokens</span>
                    </div>
                  </div>
                  <div className="pack-pricing">
                    <div className="price-main">${pack.price.toFixed(2)}</div>
                    {pack.originalPrice > pack.price && (
                      <div className="price-original">
                        ${pack.originalPrice.toFixed(2)}
                      </div>
                    )}
                    {pack.discount > 0 && (
                      <div className="discount-badge">Save {pack.discount}%</div>
                    )}
                  </div>
                  <p className="pack-description">{pack.description}</p>
                  <div className="pack-value">
                    <span className="value-per-token">
                      ${(pack.price / pack.tokens).toFixed(4)} per token
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Pack Summary */}
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0s">
            <div className="selected-pack-summary">
              <div className="summary-header">
                <h4>Selected Pack: {selectedPack.name}</h4>
                <div className="pack-details">
                  <div className="detail-item">
                    <span className="label">Tokens per pack:</span>
                    <span className="value">{selectedPack.tokens.toLocaleString()}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Price per pack:</span>
                    <span className="value">${selectedPack.price.toFixed(2)}</span>
                  </div>
                  {selectedPack.discount > 0 && (
                    <div className="detail-item discount">
                      <span className="label">You save:</span>
                      <span className="value">{selectedPack.discount}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0s">
            <div className="purchase-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="wg-quantity">
                  <span
                    className="btn-quantity minus-btn"
                    onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
                  >
                    <i className="icon-minus" />
                  </span>
                  <input type="text" value={quantity} name="number" readOnly />
                  <span
                    className="btn-quantity plus-btn"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    <i className="icon-plus" />
                  </span>
                </div>
              </div>
              
              <div className="purchase-summary">
                <div className="total-tokens">
                  <span className="label">Total Tokens:</span>
                  <span className="value">{totalTokens.toLocaleString()}</span>
                </div>
                <div className="total-price">
                  <span className="label">Total Price:</span>
                  <span className="value">${totalPrice}</span>
                </div>
              </div>
              
              <div className="purchase-actions">
                <Link className="tf-btn" href="/contest">
                  <i className="icon-tickets" />
                  Buy Token Pack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .token-packs-section {
          padding: 40px 0;
        }
        
        .token-packs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .token-pack-item {
          position: relative;
          padding: 24px 20px;
          background: var(--Bg-2);
          border: 2px solid var(--Border);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .token-pack-item:hover {
          border-color: var(--Main-color);
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(254, 140, 69, 0.15);
        }
        
        .token-pack-item.selected {
          border-color: var(--Main-color);
          background: linear-gradient(135deg, var(--Bg-2) 0%, rgba(254, 140, 69, 0.1) 100%);
        }
        
        .token-pack-item.popular {
          border-color: var(--Sub-color-2);
        }
        
        .popular-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, var(--Sub-color-2), var(--Main-color));
          color: white;
          padding: 4px 16px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
        }
        
        .pack-header {
          margin-bottom: 20px;
        }
        
        .pack-name {
          font-size: 20px;
          font-weight: 900;
          color: var(--White);
          margin-bottom: 8px;
        }
        
        .token-count {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .tokens {
          font-size: 28px;
          font-weight: 900;
          color: var(--Main-color);
          line-height: 1;
        }
        
        .token-label {
          font-size: 14px;
          color: var(--Secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .pack-pricing {
          margin-bottom: 16px;
        }
        
        .price-main {
          font-size: 24px;
          font-weight: 900;
          color: var(--White);
          margin-bottom: 4px;
        }
        
        .price-original {
          font-size: 16px;
          color: var(--Secondary);
          text-decoration: line-through;
          margin-bottom: 8px;
        }
        
        .discount-badge {
          display: inline-block;
          background: var(--Text-5);
          color: white;
          padding: 2px 8px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
        }
        
        .pack-description {
          font-size: 14px;
          color: var(--Secondary);
          line-height: 1.4;
          margin-bottom: 16px;
          min-height: 40px;
        }
        
        .pack-value {
          border-top: 1px solid var(--Border);
          padding-top: 12px;
        }
        
        .value-per-token {
          font-size: 12px;
          color: var(--Secondary);
        }
        
        .selected-pack-summary {
          background: var(--Bg-2);
          border-radius: 16px;
          padding: 30px;
          border: 1px solid var(--Border);
        }
        
        .summary-header h4 {
          font-size: 24px;
          font-weight: 900;
          color: var(--White);
          margin-bottom: 20px;
        }
        
        .pack-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid var(--Border);
        }
        
        .detail-item:last-child {
          border-bottom: none;
        }
        
        .detail-item .label {
          color: var(--Secondary);
          font-size: 14px;
        }
        
        .detail-item .value {
          color: var(--White);
          font-weight: 700;
          font-size: 16px;
        }
        
        .detail-item.discount .value {
          color: var(--Text-5);
        }
        
        .purchase-section {
          background: var(--Bg-2);
          border-radius: 16px;
          padding: 30px;
          border: 1px solid var(--Border);
        }
        
        .quantity-selector {
          margin-bottom: 24px;
        }
        
        .quantity-selector label {
          display: block;
          color: var(--White);
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        
        .purchase-summary {
          margin-bottom: 24px;
          padding: 20px;
          background: var(--Bg-3);
          border-radius: 12px;
          border: 1px solid var(--Border);
        }
        
        .total-tokens,
        .total-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .total-price {
          margin-bottom: 0;
          padding-top: 8px;
          border-top: 1px solid var(--Border);
        }
        
        .total-tokens .label,
        .total-price .label {
          color: var(--Secondary);
          font-size: 14px;
        }
        
        .total-tokens .value {
          color: var(--Main-color);
          font-size: 18px;
          font-weight: 900;
        }
        
        .total-price .value {
          color: var(--White);
          font-size: 20px;
          font-weight: 900;
        }
        
        .purchase-actions {
          text-align: center;
        }
        
        .tf-btn {
          width: 100%;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .token-packs-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 16px;
          }
          
          .token-pack-item {
            padding: 20px 16px;
          }
          
          .pack-name {
            font-size: 18px;
          }
          
          .tokens {
            font-size: 24px;
          }
          
          .price-main {
            font-size: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .token-packs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}