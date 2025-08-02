import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder for a carousel library import, e.g., import Swiper from 'swiper';
// For now, we'll just render the items in a simple div to get the structure in place.

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

export default function TokenPacksCarousel() {
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
            <Link href="#" className="tf-btn">Buy Now</Link>
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
        }
      `}</style>
    </div>
  );
}


