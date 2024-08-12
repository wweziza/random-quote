'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" }
];

export default function Home() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.text}" - ${quote.author}`
    )}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className={styles.container}>
      <motion.div
        id="quote-box"
        className={styles.quoteBox}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.quoteContent}>
          <p id="text" className={styles.quoteText}>"{quote.text}"</p>
          <p id="author" className={styles.quoteAuthor}>- {quote.author}</p>
        </div>
        <div className={styles.buttons}>
          <motion.button
            id="new-quote"
            onClick={getRandomQuote}
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            New Quote
          </motion.button>
          <motion.button
            id="tweet-quote"
            onClick={tweetQuote}
            className={styles.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Tweet Quote
          </motion.button>
        </div>
      </motion.div>
      <footer className={styles.footer}>
        Created by <a href="https://github.com/wweziza/random-quote" target="_blank" rel="noopener noreferrer">wweziza</a>
      </footer>
    </div>
  );
}
