"use client";
import Image from "next/image";
import CountdownTimer from "../common/Countdown";
import Descriptions from "./Descriptions";
import TokenPacksCarousel from "./TokenPacksCarousel";
import { useState } from "react";
import ContestEntryForm from "./ContestEntryForm";

// Mock user token balance - in a real app, this would come from your user state/API
const INITIAL_USER_TOKEN_BALANCE = 75; // Example: user has 75 tokens

// Token costs for each contest
const CONTEST_TOKEN_COSTS = {
  1: 100, // Contest 1 costs 100 tokens
  2: 200, // Contest 2 costs 200 tokens  
  3: 75,  // Contest 3 costs 75 tokens
  4: 150, // Contest 4 costs 150 tokens
  5: 50,  // Contest 5 costs 50 tokens
};

export default function ContestDetails({ contest }) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showTokenPurchaseFlow, setShowTokenPurchaseFlow] = useState(false);
  const [showSealedMessage, setShowSealedMessage] = useState(false);
  const [userTokens, setUserTokens] = useState(INITIAL_USER_TOKEN_BALANCE);

  const handleFormSubmissionSuccess = () => {
    const prizeId = contest.id || 1;
    const prizeTokenCost = CONTEST_TOKEN_COSTS[prizeId] || 100;
    
    setIsFormSubmitted(true);
    
    // Check if user has enough tokens
    if (userTokens >= prizeTokenCost) {
      // User has enough tokens - show sealed message directly
      setShowSealedMessage(true);
    } else {
      // User doesn't have enough tokens - show token purchase flow
      setShowTokenPurchaseFlow(true);
    }
  };

  const handleTokenPurchaseComplete = () => {
    // After purchasing tokens, show the sealed message
    setShowTokenPurchaseFlow(false);
    setShowSealedMessage(true);
    // Update user tokens to ensure they have enough for this contest
    const prizeId = contest.id || 1;
    const prizeTokenCost = CONTEST_TOKEN_COSTS[prizeId] || 100;
    setUserTokens(prev => Math.max(prev + 500, prizeTokenCost + 50)); // Ensure they have enough plus some extra
  };

  return (
    <div className="tf-container tf-spacing-1">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-page">
            <p className="sub-title type-main-color">
              The chance to win belongs to you
            </p>
            <h2 className="title">
              {contest.title ? contest.title : "The Lotex Lottery IX"}
            </h2>
            <p className="text type-secondary">
              This competition has a maximum of 12,940 entries.
            </p>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="col-lg-12">
            <div className="content">
              <ContestEntryForm onSubmissionSuccess={handleFormSubmissionSuccess} />
            </div>
          </div>
        ) : showTokenPurchaseFlow ? (
          <div className="col-lg-12">
            <TokenPacksCarousel onPurchaseComplete={handleTokenPurchaseComplete} />
          </div>
        ) : showSealedMessage ? (
          <div className="col-lg-12">
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
                    onClick={() => window.location.reload()}
                  >
                    Continue Playing <i className="icon-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="col-lg-12">
              <div className="wg-social">
                <p className="caption type-secondary">Share this contest</p>
                <ul className="list-social">
                  <li className="item">
                    <a href="#" className="">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="">
                      <i className="icon-tiktok" />
                    </a>
                  </li>
                  <li className="item">
                    <a href="#" className="">
                      <i className="icon-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <Descriptions />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
