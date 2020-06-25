import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions";
import "./Quote.css";

const Quote = ({ getQuote, quote, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getQuote();
  }, [getQuote]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <div classname="tweet">
      <h2>ye: {quote}</h2>
      <button onClick={getQuote}>get blessed</button>
    </div>
      
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(Quote);