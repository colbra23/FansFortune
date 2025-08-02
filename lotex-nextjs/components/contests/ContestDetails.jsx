"use client";
import Image from "next/image";
import CountdownTimer from "../common/Countdown";
import Descriptions from "./Descriptions";
import TokenPacksCarousel from "./TokenPacksCarousel";
import { useState } from "react";
import ContestEntryForm from "./ContestEntryForm";
import SealedEntry from "../modals/SealedEntry";

// Mock user token balance - in a real app, this would come from your user state/API
const INITIAL_USER_TOKEN_BALANCE = 75; // Example: user has 75 tokens - change this to test different scenarios

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
  const [showSealedModal, setShowSealedModal] = useState(false);
  const [userTokens, setUserTokens] = useState(() => {
    // Check if user just purchased tokens from contest button
    if (typeof window !== 'undefined') {
      const purchasedTokens = sessionStorage.getItem('recentTokenPurchase');
      if (purchasedTokens) {
        sessionStorage.removeItem('recentTokenPurchase');
        return INITIAL_USER_TOKEN_BALANCE + parseInt(purchasedTokens);
      }
    }
    return INITIAL_USER_TOKEN_BALANCE;
  });

  const handleFormSubmissionSuccess = () => {
    const prizeId = contest.id || 1;
    const prizeTokenCost = CONTEST_TOKEN_COSTS[prizeId] || 100;
    
    setIsFormSubmitted(true);
    
    // Check if user has enough tokens
    if (userTokens >= prizeTokenCost) {
      // User has enough tokens - show sealed message directly
      setShowSealedModal(true);
    } else {
      // User doesn't have enough tokens - show token purchase flow
      setShowTokenPurchaseFlow(true);
    }
  };

  const handleTokenPurchaseComplete = () => {
    // After purchasing tokens from the form submission flow, show the sealed message
    setShowTokenPurchaseFlow(false);
    setShowSealedModal(true);
    // Update user tokens to ensure they have enough for this contest
    const prizeId = contest.id || 1;
    const prizeTokenCost = CONTEST_TOKEN_COSTS[prizeId] || 100;
    setUserTokens(prev => Math.max(prev + 500, prizeTokenCost + 50)); // Ensure they have enough plus some extra
  };

  const handleSealedModalClose = () => {
    setShowSealedModal(false);
    // Reset the form state so user can see the full contest details again
    setIsFormSubmitted(false);
  };

  return (
    <>
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
      
      {/* Sealed Entry Modal */}
      <SealedEntry 
        isOpen={showSealedModal}
        onClose={handleSealedModalClose}
        contestName={contest.title || "The Lotex Lottery IX"}
      />
    </>
  );
}
