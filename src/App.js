import React, { useState } from "react";
import "./App.css";

const bookObj = {
  selfHelp: [
    {
      name: "Forge Your Future",
      author: "APJ Abdul Kalam",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/s/QQ!2NENNNN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    },
    {
      name: "The 5 AM Club",
      author: "Robin sharma",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/s/44!6iOuuuN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    },
    {
      name: "The 4-Hour Work Week",
      author: "Timothy ferriss",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/s/QQD4JFNNNN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    },
    {
      name: "Think and Grow Rich",
      author: "Napoleon Hill",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/s/QQ8LeDNNNN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    }
  ],
  Fiction: [
    {
      name: " The Mistress Of Spices",
      author: "Chitra banerjee Divakaruni",
      link: (
        <a
          className="textDeco"
          href="https://www.flipkart.com/the-mistress-of-spiSces/p/itmfbnpyecweszvv?pid=9780552996709&cmpid=product.share.pp&_refId=PP.024902c4-8fbf-4620-bdd5-f87778cf0a2e.9780552996709&_appId=WA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    },
    {
      name: "Pride & Prejudice",
      author: "Jane Austin",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/s/4A9YLjuuuN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    },
    {
      name: "A Place Called Home",
      author: "Preeti shenoy",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/s/QyxUmtNNNN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    },
    {
      name: "It Ends with Us",
      author: "Colleen Hoover",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/dl/it-ends-with-us/p/itmez68hg7zr8dhd?pid=9781501110368&cmpid=product.share.pp&_refId=PP.63e6c08a-e862-4526-bb63-011706c99570.9781501110368&_appId=WA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    }
  ],
  Spirutual: [
    {
      name: "Teachings of Ramana Maharshi ",
      author: "Osborne",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/dl/teachings-ramana-maharshi-the-classic-collection/p/itmefsyyacy2ngas?pid=9781846044335&cmpid=product.share.pp&_refId=PP.1235a2ab-772c-4cac-8482-27995928a13c.9781846044335&_appId=WA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    },
    {
      name: "Flowers on the Path",
      author: "sadhguru",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/s/4g9ntBuuuN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    },
    {
      name: "The Art of Happiness",
      author: "The dalai Lama",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/s/4gP5FjuuuN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    },
    {
      name: "You Can Heal Your Life",
      author: "Louise Hay",
      link: (
        <a
          className="textDeco"
          href="https://dl.flipkart.com/dl/you-can-heal-your-life/p/itmfcyffrarfakyq?pid=9788190565585&cmpid=product.share.pp&_refId=PP.a33fb870-0ed4-4abe-b383-835a9b31ce53.9788190565585&_appId=WA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy from here
        </a>
      )
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("selfHelp");

  function clickHandler(genre) {
    setGenre(genre);
  }

  const buttons = Object.keys(bookObj).map((item) => {
    return (
      <button className="btn" onClick={() => clickHandler(item)}>
        <span style={{textDecoration:'underline'}}>{item}</span>
      </button>
    );
  });

  return (
    <div className="App">
      <h1>Books Suggestor</h1>
      <p>here, check out some good books!</p>
      {buttons}

      {bookObj[genre].map((item) => {
        return (
          <div className="bookCollection">
            <h2>{item.name}</h2>

            <h3>by {item.author}</h3>

            <h4>{item.link}</h4>
          </div>
        );
      })}
    </div>
  );
}
