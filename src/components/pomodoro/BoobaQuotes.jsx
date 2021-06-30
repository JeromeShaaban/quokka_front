import React, { useState } from 'react';
import axios from "axios";
import '../../style/boobaQuotes.scss'

const BoobaQuotes = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const clickNewQuote = async () => {
    try {
      const response = await axios.get("https://twenty-five.herokuapp.com/keanu/random");
      console.log("response: ", response);
      setQuote(response.data[0].quote + " - Keanu Reeves");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  console.log("loading: ", loading)
  return (
    !loading ? (
      <div className="BoobaDiv">
        <blockquote className="BoobaQuote" style={{ width: "50%"}}>{quote}</blockquote>
        <button type="button" onClick={clickNewQuote} className="BoobaButton">
           Another quote
        </button>
      </div>
    )
    :(
      <div className="BoobaDiv">
        <blockquote className="BoobaQuote">{quote}</blockquote>
        <button type="button" onClick={clickNewQuote} className="BoobaButton">
        Need more motivation ?
        </button>
      </div>
    )
  );
};

export default BoobaQuotes;