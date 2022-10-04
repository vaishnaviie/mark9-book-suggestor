import React, { useState } from "react";
import "./App.css";

const bookObj = {
  selfHelp: [
    {
      name: "Forge Your Future",
      author: "APJ Abdul Kalam",
      rating: "4.4",
      description: "Forge Your Future brings you a collection of candid, forthright, and inspiring solutions given by A. P. J. Abdul Kalam as replies to the hundreds of emails he receives daily.",
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
      name: "Attitude Is Everything",
      author: "Jeff Keller",
      rating: "4.5",
      description: "Attitude decides our altitude and when we change your attitude, we change your life. Attitude is Everything: Change Your Attitude...Change Your Life is a success manual that gives plans for us to take control of our lives and unleash the untapped potential.",
      link: (
        <a
          className="textDeco"
          href="https://www.flipkart.com/attitude-is-everything/p/itmfbyjgqwayh3my?pid=9789351772071&lid=LSTBOK97893517720710CDYJK&marketplace=FLIPKART&q=self+help+book&store=bks&srno=s_1_3&otracker=search&otracker1=search&fm=productRecommendation%2Fsimilar&iid=47c21194-e879-4d97-86ca-31ddbd1a86e8.9789351772071.SEARCH&ppt=pp&ppn=pp&ssid=8ocq0vcvqo0000001664880250245&qH=d30d8a09732b7046"
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
      rating: "4.4",
      description: "This book is a New York bestseller that teaches you how to reconstruct your life so as to not make it all about work.",
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
      rating: "4.5",
      description: " Hill established the Napoleon Hill Foundation, a non-profit educational institution whose mission is to promote his philosophy of leadership, self-motivation and individual achievement.",
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
      rating: "4.5",
      description: "The Mistress Of Spices tells the story of Tilo, an Indian immigrant running an Indian spice shop in Oakland, who uses her inborn gift to help people through the mystical healing powers of her spices, and what happens when those powers are challenged when she falls in love with an American stranger.",
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
      rating: "4.5",
      description: "This collectable edition is beautifully crafted and designed. Perfect for gifting as well as for keeps. A prized edition for any library.",
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
      rating: "4.8",
      description: "A Place Called Home is a novel about secrets, family, and finding yourself, from bestselling author Preeti Shenoy.",
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
      rating: "4.5",
      description: "It involves the past and present of the female protagonist. it had a few dramatic twists in the story.",
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
      rating: "4.6",
      description: "This book brings together many of the conversations Maharshi had with his followers in an intimate portrait of his beliefs and teachings. Through these conversations, readers will discover Maharshi's simple discipline of self-enquiry: knowing oneself and looking inwards as the road to true understanding and enlightenment",
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
      rating: "4.6",
      description: "The book covers topics that span social issues, worldly affairs, individual challenges, or dimensions of the beyond. Each of these articles holds the possibility to shake you out of your set conclusions and to pave the way towards true knowing.",
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
      rating: "4.5",
      description: "Spiritual and temporal leader of Tibet and Nobel Prize winner, Dalai Lama tells his readers that happiness is the purpose of life and that every decision we take is to achieve happiness in life. With the help of conversations, stories, and meditations, the Dalai Lama shows his readers how to overcome anxiety, anger, insecurity and discouragement. ",
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
      rating: "4.5",
      description: "You Can Heal Your Life (Hindi) is a book that enlightens readers about the effect that the mind truly has on all aspects of life. It states that through mental positive reinforcement, people can enhance their life.",
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
        {item}
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

            <h3> <span style={{color:"red"}}>Rating : </span>{item.rating}</h3>

            <h5> <span style={{color:"red"}}>Description : </span>{item.description}</h5>

            <h4>{item.link}</h4>
          </div>
        );
      })}
    </div>
  );
}
