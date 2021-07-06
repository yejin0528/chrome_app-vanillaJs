const quotes = [
    {
        quote: "Remeber, you're the one who can fill the world with sunshine.",
        author: "Snow White and The Seven Dwarves",
    },
    {
        quote: "The flower that blooms in adversity is the rarest and beautiful of all.",
        author: "Mulan",
    },
    {
        quote:"Happiness is the richest thing we will ever own.",
        author:"Donald Duck",
    },
    {
        quote:"To laugh at yourself is to love yourself.",
        author:"Micky Mouse",
    },
    {
    quote:"Like so many things, it is not what's outside, but what is inside that counts.",
    author:"Aladdin",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;