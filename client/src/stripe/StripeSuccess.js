import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { stripeSuccessRequest } from "../actions/stripe";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

const StripeSuccess= ({}) => {
  const { hotelId } = useParams();
   const { 
     user : { token }, 
  } = useSelector((state) =>({...state}));

  const navigate =useNavigate();
  useEffect(() => {
    // console.log(
    //   "send this hotelid to backend to crate order",
    //   match.params.hotelId
    // );
    stripeSuccessRequest(token, hotelId).then((res) => {
      if (res.data.success) {
        // console.log("stripe success response", res.data);
        navigate("/dashboard");
      } else {
        navigate("/stripe/cancel");
      }
    });
  }, [hotelId]);

//const{token} =user;  
  return (
      <div className="container">
        <div className="col">
          <h2 className="text-center p-5"> Payment Success.{hotelId}</h2>
        </div>
      </div>
    );
  };
  
  export default StripeSuccess;
  