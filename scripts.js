/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

/**
 * Stocks Catalog Project
 *
 * This script manages a dataset of stock objects and provides functionality to:
 * - Display stock information as cards.
 * - Search stocks by ticker or name.
 * - Sort stocks by price.
 * - Add a new stock.
 * - Remove the last stock.
 */

// Example dataset: Array of stock objects
let stocksCatalog = [
  {
    id: 1,
    name: "Apple Inc.",
    ticker: "AAPL",
    price: 175.64,
    change: 1.2,
    marketCap: "2.9T"
  },
  {
    id: 2,
    name: "Alphabet Inc.",
    ticker: "GOOGL",
    price: 105.24,
    change: -0.5,
    marketCap: "1.5T"
  },
  {
    id: 3,
    name: "Amazon.com Inc.",
    ticker: "AMZN",
    price: 135.88,
    change: 0.8,
    marketCap: "1.7T"
  },
  {
    id: 4,
    name: "Microsoft Corporation",
    ticker: "MSFT",
    price: 315.42,
    change: 0.3,
    marketCap: "2.3T"
  },
  {
    id: 5,
    name: "Tesla Inc.",
    ticker: "TSLA",
    price: 900.15,
    change: -1.7,
    marketCap: "900B"
  }
];

// This variable holds the currently displayed stocks (filtered, sorted, etc.)
let currentView = [...stocksCatalog];

// Sorting toggle: true for ascending, false for descending price sorting
let ascending = true;

/**
 * Render cards based on a provided list of stock objects.
 */
function renderCards(stocks) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear current cards

  // Get the hidden template card from the DOM
  const templateCard = document.querySelector(".card");

  if (stocks.length === 0) {
    cardContainer.innerHTML = "<p>No stocks found.</p>";
    return;
  }

  stocks.forEach(stock => {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, stock);
    cardContainer.appendChild(nextCard);
  });
}

/**
 * Update card content based on a stock object.
 */
function editCardContent(card, stock) {
  card.style.display = "block";

  // Update the stock name in the card header (h2)
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = stock.name;

  // Update stock details with ticker, price, change and market cap
  const tickerPara = card.querySelector(".ticker");
  if (tickerPara) {
    tickerPara.textContent = `Ticker: ${stock.ticker}`;
  }

  const pricePara = card.querySelector(".price");
  if (pricePara) {
    pricePara.textContent = `Price: $${stock.price.toFixed(2)}`;
  }

  const changePara = card.querySelector(".change");
  if (changePara) {
    changePara.textContent = `Change: ${stock.change.toFixed(2)}%`;
  }

  const marketCapPara = card.querySelector(".market-cap");
  if (marketCapPara) {
    marketCapPara.textContent = `Market Cap: $${stock.marketCap}`;
  }
}

/**
 * Search the stocks catalog based on user input.
 */
function searchCatalog() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();

  currentCatalogView = stocksCatalog.filter(stock =>
    stock.name.toLowerCase().includes(searchTerm) || stock.ticker.toLowerCase().includes(searchTerm)
  );

  renderCards(currentCatalogView);
}

/**
 * Sort the stocks catalog by price, toggling between ascending and descending order.
 */
function sortCatalogByPrice() {
  stocksCatalog.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
  ascending = !ascending; // Toggle order for subsequent clicks

  // Update sort button text accordingly
  const sortBtn = document.getElementById("sort-btn");
  sortBtn.textContent = ascending ? "Sort by Price (Asc)" : "Sort by Price (Desc)";
  
  renderCards(stocksCatalog);
}

/**
 * Remove the last stock from the catalog.
 */
function removeLastStock() {
  stocksCatalog.pop();
  currentCatalogView = [...stocksCatalog];
  renderCards(currentCatalogView);
}

/**
 * Add a new stock to the catalog.
 * In a real application, data might be collected from a form.
 */
function addNewStock() {
  const name = prompt("Enter the name of the stock:");
  if (!name) return alert("Stock name is required!");

  const ticker = prompt("Enter the ticker symbol (e.g., AAPL):");
  if (!ticker) return alert("Ticker symbol is required!");

  const price = parseFloat(prompt("Enter the current price:"));
  if (isNaN(price)) return alert("Invalid price. Please enter a number.");

  const change = parseFloat(prompt("Enter the daily change percentage:"));
  if (isNaN(change)) return alert("Invalid change percentage.");

  const marketCap = prompt("Enter the market cap (e.g., 1.5T or 500B):");
  if (!marketCap) return alert("Market cap is required!");

  const newStock = {
    id: stocksCatalog.length + 1,
    name: name.trim(),
    ticker: ticker.trim().toUpperCase(),
    price: price,
    change: change,
    marketCap: marketCap.trim().toUpperCase()
  };

  stocksCatalog.push(newStock);
  currentCatalogView = [...stocksCatalog];
  renderCards(currentCatalogView);
}

/**
 * Display an alert with a fun stock-themed quote.
 */
function quoteAlert() {
  alert("Invest in yourself—the dividends are priceless!");
}

/**
 * Initialization: Render the initial stock cards and wire up event listeners.
 */
document.addEventListener("DOMContentLoaded", () => {
  renderCards(stocksCatalog);

  // Listen for input changes in the search field.
  document.getElementById("search-input").addEventListener("input", searchCatalog);
});
