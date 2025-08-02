"use client";
import { useEffect } from "react";

export default function SealedEntry({ isOpen, onClose, contestName }) {
  useEffect(() => {
    if (isOpen) {
      // Show the modal using Bootstrap
      const modalElement = document.getElementById('sealedEntryModal');
      if (modalElement) {
        import('bootstrap').then((bootstrap) => {
          const modal = new bootstrap.Modal(modalElement, {
            backdrop: 'static',
            keyboard: false
          });
          modal.show();
          
          // Handle modal close
          modalElement.addEventListener('hidden.bs.modal', () => {
            onClose();
          });
        });
      }
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal fade modalCenter" id="sealedEntryModal">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="sealed-entry-wrap">
            <div className="close-form">
              <button 
                className="btn-hide-popup" 
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                <i className="icon-close" />
              </button>
            </div>

            <div className="sealed-entry-content">
              <div className="sealed-entry-header">
                <div className="padlock-animation">
                  <div className="padlock-container">
                    <div className="padlock-icon">
                      <i className="icon-check-1"></i>
                    </div>
                    <div className="lock-pulse-1"></div>
                    <div className="lock-pulse-2"></div>
                    <div className="lock-pulse-3"></div>
                  </div>
                </div>
                
                <h2 className="sealed-title">Entry Sealed!</h2>
                <p className="sealed-subtitle">
                  Your contest entry for <strong>{contestName || "this contest"}</strong> is now securely locked in our system.
                </p>
              </div>

              <div className="sealed-entry-body">
                <div className="live-game-reminder">
                  <div className="reminder-icon">
                    <i className="icon-star"></i>
                  </div>
                  <div className="reminder-content">
                    <h4>Don't miss out!</h4>
                    <p>Login during the live game for bonus skill challenges that could boost your score even higher!</p>
                  </div>
                </div>

                <div className="entry-details">
                  <div className="detail-item">
                    <span className="detail-label">Entry Status:</span>
                    <span className="detail-value secured">Secured & Locked</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Contest:</span>
                    <span className="detail-value">{contestName || "Contest Entry"}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Next Step:</span>
                    <span className="detail-value">Wait for live game</span>
                  </div>
                </div>
              </div>

              <div className="sealed-entry-actions">
                <button 
                  className="tf-btn"
                  data-bs-dismiss="modal"
                  onClick={onClose}
                >
                  Continue Playing <i className="icon-right" />
                </button>
                <button 
                  className="tf-btn style-3"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}