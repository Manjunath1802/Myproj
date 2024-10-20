import React from "react";
import './Review.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { customerReviews } from "./Script";
import { useState } from "react";

const Review=()=>{
    let rMessage, rName, rLocation;
    const reviewsLength = customerReviews.length - 1;
    const [review, setReview] = useState(0);

    function BackBtnClick(){
    setReview(review <= 0 ? reviewsLength : review-1);
    };
    function RightBtnClick(){
     setReview(review >= reviewsLength ? 0 : review+1);
   
    };
    function handleReviewsUpdation(){
        let customr=customerReviews[review];
        rMessage=customr.message;
        rName=customr.name;
        rLocation=customr.location;    
    };
    handleReviewsUpdation();
    return(
        <div className="review-main">
          <h2 className="revttl">More over <span>1500+ Customers</span></h2>
          <h1 className="revttl1">Don't believe us, Check clients word</h1>
          <p className="revpar">
            <span>''</span>{rMessage}<span>''</span>
          </p>
        <div className="rvdwn">
        <div className="rvn"> 
          <p className="rvname">
         {rName}
          </p>
          <p className="rvc">
          {rLocation}
          </p>
          </div>
        <diV className="rvb">
        <button className="frwdbtn"
        type="button"
        onClick={BackBtnClick}
        ><FaArrowLeftLong/></button>
        <button className="frwdbtn"
        type="button"
        onClick={RightBtnClick}
        ><FaArrowRightLong/></button>
        </diV>
        </div>
        </div>
    );
};

export default Review;
