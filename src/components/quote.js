import React from 'react';
import quoteList from './quoteList.json';
import { FaQuoteLeft } from 'react-icons/fa';


const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quoteList.length)
    return quoteList[randomIndex]
}

const Quotes = ({ quote, color }) => {
    return (
        <div>
        <FaQuoteLeft solid class="quote-icon" style={{color: color}}/>
        <h1 id="text" class="quote-text" style={{color: color}}>{quote.quote}</h1>
        <p id="author" class="quote-text" style={{color: color}}>- {quote.author}</p>
        </div>
    )
};

export {Quotes, getRandomQuote};