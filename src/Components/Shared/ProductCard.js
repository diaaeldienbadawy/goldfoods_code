import React from 'react';
import smallStar from '../../assets/images/icons/small-star.svg';
import { useNav } from '../../hocks/layout/useNav';

const ProductCard = ({ start, end, productImage, subTitle, title, Rating, isCateory, link }) => {
  const { nav, scrollTop } = useNav();

  const handleAction = (e) => {
    if (isCateory && link) {
      e.stopPropagation();
      nav(link);
      scrollTop();
    }
  };

  return (
    <div 
      className="seed-product-card"
      onClick={handleAction}
    >
      {/* Product Image Container */}
      <div className="seed-product-card-img-wrapper">
        <img src={productImage} className="seed-product-card-img" alt={title} />
      </div>
      
      {/* Product Details Body */}
      <div className="seed-product-card-body">
        <div>
          <span className="seed-product-card-subtitle">{subTitle}</span>
          <h4 className="seed-product-card-title">{title}</h4>
        </div>
        
        {/* Rating and Action Button */}
        <div className="seed-product-card-footer">
          <div className="seed-rating-badge">
            <img src={smallStar} className="star-icon" alt="" />
            <span className="rating-num">{Rating}</span>
          </div>
          
          {isCateory && link && (
            <button className="seed-card-action-btn" onClick={handleAction}>
              View Category →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
