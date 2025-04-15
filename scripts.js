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
//this dataset was from this github site https://gist.github.com/tanveery/4ac939d2ad27954da4c8db13e10ef7bd
//*modified the prices to make current year
let stocksCatalog = [
  {
      "company": "3M",
      "description": "3M, based in Minnesota, may be best known for its Scotch tape and Post-It Notes, but it also produces sand paper, adhesives, medical products, computer screen filters, food safety items, stationery products and many products used in automotive, marine, and aircraft industries.",
      "initial_price": 44.28,
      "price_2002": 56.27,
      "price_2007": 95.85,
      "symbol": "MMM"
  },
  {
      "company": "Amazon.com",
      "description": "Amazon.com, Inc. is an online retailer in North America and internationally. The company serves consumers through its retail Web sites and focuses on selection, price, and convenience. It also offers programs that enable sellers to sell their products on its Web sites, and their own branded Web sites. In addition, the company serves developer customers through Amazon Web Services, which provides access to technology infrastructure that developers can use to enable virtually various type of business. Further, it manufactures and sells the Kindle e-reader. Founded in 1994 and headquartered in Seattle, Washington.",
      "initial_price": 89.38,
      "price_2002": 17.01,
      "price_2007": 93.43,
      "symbol": "AMZN"
  },
  {
      "company": "Campbell Soup",
      "description": "Campbell Soup is a worldwide food company, offering condensed and ready-to-serve soups; broth, stocks, and canned poultry; pasta sauces; Mexican sauces; canned pastas, gravies, and beans; juices and beverages; and tomato juices. Its customers include retail food chains, mass discounters, mass merchandisers, club stores, convenience stores, drug stores and other retail, and commercial and non-commercial establishments. Campbell Soup Company was founded in 1869 and is headquartered in Camden, New Jersey.",
      "initial_price": 37.0,
      "price_2002": 22.27,
      "price_2007": 36.4,
      "symbol": "CPB"
  },
  {
      "company": "Disney",
      "description": "The Walt Disney Company, founded in 1923, is a worldwide entertainment company, with movies, cable networks, radio networks, movie production, musical recordings and live stage plays. Disney also operates Walt Disney World in Florida and Disneyland in California, Disney Cruise Line, and international Disney resorts. Disney owns countless licenses and literary properties and publishes books and magazines.",
      "initial_price": 40.68,
      "price_2002": 15.24,
      "price_2007": 35.47,
      "symbol": "DIS"
  },
  {
      "company": "Dow Chemical",
      "description": "The Dow Chemical Company manufactures raw materials that go into consumer products and services. These materials include food and pharmaceutical ingredients, electronic displays, semiconductor packaging, water purification, insulation, adhesives, pest control, polyurethane, polystyrene (goes into plastics), and crude-oil based raw materials. Dow was founded in 1897 and is based in Midland, Michigan.",
      "initial_price": 38.83,
      "price_2002": 27.65,
      "price_2007": 44.67,
      "symbol": "DOW"
  },
  {
      "company": "Exxon Mobil",
      "description": "Exxon Mobil engages in the exploration and production of crude oil and natural gas, and manufacture of petroleum products. The company manufactures commodity petrochemicals. The company has operations in the United States, Canada/South America, Europe, Africa, Asia, and Australia/Oceania. Exxon Mobil Corporation was founded in1870 and is based in Irving, Texas.",
      "initial_price": 39.0,
      "price_2002": 32.82,
      "price_2007": 91.36,
      "symbol": "XOM"
  },
  {
      "company": "Ford",
      "description": "Ford Motor Co. develops, manufactures, sells and services vehicles and parts worldwide. Ford sells cars and trucks primarily under the Ford and Lincoln brands. It sells to consumers (through retail dealers) and to rental car companies, leasing companies, and governments. Ford also provides maintenance and repair services. Ford also offers financing to vehicle purchasers. Ford was founded in 1903 and is based in Dearborn, Michigan.",
      "initial_price": 27.34,
      "price_2002": 9.63,
      "price_2007": 8.37,
      "symbol": "F"
  },
  {
      "company": "The Gap",
      "description": "The Gap, Inc. sells retail clothing, accessories and personal care products globally under the brand names Gap, Old Navy, Banana Republic, Piperlime, Athleta and Intermix. Products include sports apparel, casual clothing, sleepwear, footwear and infants\u2019 and children\u2019s clothing. The company has company-owned stores as well as franchise stores, online stores and catalogs. The Gap was founded in 1969 and is headquartered in San Francisco, California.",
      "initial_price": 46.0,
      "price_2002": 11.56,
      "price_2007": 18.9,
      "symbol": "GPS"
  },
  {
      "company": "General Mills",
      "description": "General Mills manufactures and sells consumer foods worldwide. Products include cereals, frozen vegetables, dough, dessert and baking mixes, frozen pizzas, grains, fruits, ice creams and organic products. It sells to grocery stores as well as commercial food service distributors, restaurants and convenience stores. General Mills was founded in 1928 and is based in Minneapolis, Minnesota.",
      "initial_price": 15.59,
      "price_2002": 22.1,
      "price_2007": 28.76,
      "symbol": "GIS"
  },
  {
      "company": "Hewlett Packard",
      "description": "Hewlett-Packard designs and sells products, technologies, software and IT services to consumers, businesses, government and education sectors worldwide. HP offers storage and server products, PCs, calculators, printers, scanners, network infrastructure products, video products (under the Halo brand), and Palm smartphones. HP was founded in 1939 and is headquartered in Palo Alto, California.",
      "initial_price": 66.28,
      "price_2002": 12.03,
      "price_2007": 50.9,
      "symbol": "HPQ"
  },
  {
      "company": "IBM",
      "description": "IBM is an international IT company. IBM offers infrastructure and technology services, software for business integration and information management, data warehousing, identity management software, data security, Lotus software for collaboration, messaging and social networking, business intelligence software, servers, and storage systems. IBM was founded in 1910 and is based in Armonk, New York.",
      "initial_price": 118.37,
      "price_2002": 60.36,
      "price_2007": 116.3,
      "symbol": "IBM"
  },
  {
      "company": "Johnson & Johnson",
      "description": "Johnson & Johnson develops and manufactures health care products for sale worldwide. J&J products include the brands Johnson\u2019s, Aveeno, Clean & Clear, Neutrogena, Lubriderm, Listerine, Reach, BandAid, Tylenol, Sudafed, Motrin and more. J&J products are used in skin care, baby care, and therapeutic medical care, including inflammatory diseases, arthritis, psoriasis, HIV/AIDS, schizophrenia, spinal care, and diabetes. The company was founded in 1886 and is based in New Brunswick, New Jersey.",
      "initial_price": 35.13,
      "price_2002": 52.3,
      "price_2007": 66.25,
      "symbol": "JNJ"
  },
  {
      "company": "Microsoft",
      "description": "Microsoft develops, manufactures, licenses, and supports a range of software products and services for various computing devices worldwide. Products include Windows OS, Windows Live and Internet Explorer. Microsoft also provides training and tech support, online products such as Bing and MSN portals, and software including Microsoft Office, Microsoft SharePoint, Xbox 360, PC software games, online games, and Zune digital music. Microsoft was founded in 1975 and is headquartered in Redmond, Washington.",
      "initial_price": 55.72,
      "price_2002": 22.62,
      "price_2007": 29.84,
      "symbol": "MSFT"
  },
  {
      "company": "Monsanto",
      "description": "Monsanto provides agricultural products for farmers in the United States and internationally. It operates in two segments, Seeds and Genomics, and Agricultural Productivity. The Seeds and Genomics segment produces corn, soybean, canola, and cotton seeds, as well as vegetable seeds, including tomato, pepper, eggplant, melon, cucumber, pumpkin, squash, beans, broccoli, onions, and lettuce seeds. The Agricultural Productivity segment offers herbicides for agricultural, industrial, and residential use. Brands include Roundup, Roundup Ready, YieldGard, and Dekalb. Monsanto focuses on high-yielding crops and crops that tolerate adverse conditions. The current company was founded in 2000 (name dates to 1901) and is based in St. Louis, Missouri.",
      "initial_price": 11.47,
      "price_2002": 7.2,
      "price_2007": 86.93,
      "symbol": "MO"
  },
  {
      "company": "PepsiCo",
      "description": "PepsiCo, Inc. manufactures, markets, and sells various foods, snacks, and carbonated and non-carbonated beverages worldwide. Pepsi products include Pepsi beverages, Mountain Dew, Gatorade, Aquafina and Tropicana beverages as well as Frito-Lay snacks, Ruffles, Doritos, Tostitos, Rold Gold pretzels, Sun Chips, Crackerjack, Quaker Oats, Aunt Jemima mixes, Life Cereal, and Rice-a-Roni. The company was founded in 1898 and is headquartered in Purchase, New York.",
      "initial_price": 34.13,
      "price_2002": 36.69,
      "price_2007": 73.74,
      "symbol": "PEP"
  },
  {
      "company": "Starbucks",
      "description": "Starbucks Corp. provides specialty coffee and tea beverages, packaged and ground coffee beans, single-serve products, juices and food offerings worldwide. Starbucks sells licensed products through grocery stores and other food service outlets as well as running company stores that sell coffees, pastries, breakfast sandwiches and lunch items. Starbucks sells products under the brand names Starbucks, Teavana, Tazo, Seattle\u2019s Best, La Blange and Verismo. Starbucks was founded in 1985 and is based in Seattle, Washington.",
      "initial_price": 6.23,
      "price_2002": 10.5,
      "price_2007": 26.84,
      "symbol": "SBUX"
  },
  {
      "company": "Texas Instruments",
      "description": "Texas Instruments designs and sells semiconductors to electronics designers and manufacturers worldwide. The company has four segments: Analog, Embedded Processing, Wireless and Other. The Other segment provides handheld graphing and scientific calculators and licenses technologies to other electronic companies. The company was founded in 1938 and is headquartered in Dallas, Texas.",
      "initial_price": 53.88,
      "price_2002": 15.58,
      "price_2007": 36.54,
      "symbol": "TXN"
  },
  {
      "company": "Time Warner",
      "description": "Time Warner is a media and entertainment company in the United States and internationally. It operates in three segments: Networks, Filmed Entertainment, and Publishing. Networks provides HBO, Cinemax, TNT, TBS, and CNN. Filmed Entertainment produces movies, TV shows, animation, videogames, and home video products. Publishing includes magazines (People, Sports Illustrated, Time), books, and websites. The company was founded in 1985 and is based in New York, New York.",
      "initial_price": 221.25,
      "price_2002": 36.36,
      "price_2007": 57.18,
      "symbol": "TWX"
  },
  {
      "company": "United Health",
      "description": "UnitedHealth Group provides healthcare services in the United States. Its Health Benefits segment offers consumer-oriented health benefit plans and services to national employers, public sector employers, mid-sized employers, small businesses, and individuals; and non-employer based insurance options for purchase by individuals. It also provides health services to individuals aged 50 and older through a network of 730,000 physicians and other professionals and 5,300 hospitals. The company also provides financial products, data management services, and pharmacy management. The company was founded in 1974 and is based in Minnetonka, Minnesota.",
      "initial_price": 7.66,
      "price_2002": 21.85,
      "price_2007": 47.7,
      "symbol": "UNH"
  },
  {
      "company": "Walmart",
      "description": "Walmart operates retail stores, warehouse clubs, online stores and small markets worldwide. Walmart stores sell a huge variety of items, from food and clothing to electronics, hardware, appliances, automotive accessories and pet supplies. Some stores include banks, restaurants and gas stations. Walmart was founded in 1945 and is headquartered in Bentonville, Arkansas. ",
      "initial_price": 56.5,
      "price_2002": 50.51,
      "price_2007": 47.53,
      "symbol": "WMT"
  },
  {
      "company": "Whirlpool",
      "description": "Whirlpool manufactures and sells home appliances worldwide. Its principal products include laundry appliances, refrigerators, cooking appliances, dishwashers, mixers, and other small household appliances. The company also produces hermetic compressors for refrigeration systems. It markets and distributes its products under various brand names, which include Whirlpool, Maytag, KitchenAid, Jenn-Air, Roper, Estate, Admiral, Magic Chef, and Amana. The company was founded in 1906 and is based in Benton Harbor, Michigan.",
      "initial_price": 58.25,
      "price_2002": 46.82,
      "price_2007": 94.29,
      "symbol": "WHR"
  },
  {
      "company": "Xerox",
      "description": "Xerox Corporation engages in the development, manufacture, marketing, service, and finance of document equipment, software, solutions, and services worldwide. The company operates in three segments: Technology, Services, and Other. The Technology segment provides multifunction printers, copiers, digital printing presses, light production devices, and desktop monochrome and color printers for office users. Other services include human resources, IT, card fare payment solutions, network outsourcing, commercial printing and electronic presentation systems. Xerox Corporation was founded in 1906 and is headquartered in Norwalk, Connecticut.",
      "initial_price": 20.87,
      "price_2002": 5.26,
      "price_2007": 17.54,
      "symbol": "XRX"
  }
];

const uiStocksCatalog = stocksCatalog.map((stock, index) => {
  return {
    id: index + 1,
    name: stock.company,
    ticker: stock.symbol,
    description: stock.description,
    currentPrice: stock.initial_price,
    price2020: stock.price_2007 * 1.5, //couldnt find one with relevant year so multply to represent inflation
    price2015: stock.price_2002 * 1.2, 
    change: ((stock.price_2007*1.5 - stock.price_2002*1.2)/(stock.price_2002*1.2)) * 100
  };
});


// This variable holds the currently displayed stocks (filtered, sorted, etc.)
let currentView = [...uiStocksCatalog];

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

    // Attach a click event listener to show details
    nextCard.addEventListener("click", () => {
      showStockDetails(stock);
    });

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
    pricePara.textContent = `Price: $${stock.currentPrice.toFixed(2)}`;
  }

  const changePara = card.querySelector(".change");
  if (changePara) {
    changePara.textContent = `Change: ${stock.change.toFixed(2)}%`;
  }
}
function showStockDetails(stock) {
  const details = `
${stock.name} (${stock.ticker})
Description: ${stock.description}
Current Price: $${stock.currentPrice.toFixed(2)}
Price in 2020: $${stock.price2020.toFixed(2)}
Price in 2015: $${stock.price2015.toFixed(2)}
`;
  alert(details);
}
/**
 * Search the stocks catalog based on user input.
 */
function searchCatalog() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();

  currentView = uiStocksCatalog.filter(stock =>
    stock.name.toLowerCase().includes(searchTerm) || stock.ticker.toLowerCase().includes(searchTerm)
  );

  renderCards(currentView);
}

/**
 * Sort the stocks catalog by price, toggling between ascending and descending order.
 */
function handleSortStock(){
  const choice = document.getElementById("sort-select").value;
  switch(choice){
    case "alphabetical":
      currentView.sort((a,b ) => a.name.localeCompare(b.name));
      break;
    case "price":
      currentView.sort((a,b) => b.currentPrice - a.currentPrice);
      break;
    case "change":
      currentView.sort((a,b) => b.change - a.change);
      break;
    default:
    return;
  }
  renderCards(currentView);
}

/**
 * Remove the last stock from the catalog.
 */
function removeLastStock() {
  uiStocksCatalog.pop();
  const currentCatalogView = [...uiStocksCatalog];
  currentView = [...currentCatalogView];
  renderCards(currentView);
}


/**
 * Add a new stock to the catalog.
 * In a real application, data might be collected from a form.
 */
function addNewStock() {
  const name = prompt("Enter the name of the stock:");
  if (!name) return alert("Stock name is required!");
  const Description = prompt("Enter the description of the stock");
  if(!Description) return alert("Stock Description is required");

  const ticker = prompt("Enter the ticker symbol (e.g., AAPL):");
  if (!ticker) return alert("Ticker symbol is required!");

  const price = parseFloat(prompt("Enter the current price:"));
  if (isNaN(price)) return alert("Invalid price. Please enter a number.");

  const change = parseFloat(prompt("Enter the daily change percentage:"));
  if (isNaN(change)) return alert("Invalid change percentage.");

  // For demonstration, we ask for additional prices for 2020 and 2015.
  const price2020 = parseFloat(prompt("Enter the price in 2020:"));
  if (isNaN(price2020)) return alert("Invalid price for 2020.");

  const price2015 = parseFloat(prompt("Enter the price in 2015:"));
  if (isNaN(price2015)) return alert("Invalid price for 2015.");

  const newStock = {
    id: uiStocksCatalog.length + 1,
    name: name.trim(),
    ticker: ticker.trim().toUpperCase(),
    description: Description.trim(), // or prompt for a description
    currentPrice: price,
    price2020: price2020,
    price2015: price2015,
    change: (price2020 - price2015) / price2015,
  };

  uiStocksCatalog.push(newStock);
  currentView = [...uiStocksCatalog];
  renderCards(currentView);
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
  renderCards(uiStocksCatalog);

  // Listen for input changes in the search field.
  document.getElementById("search-input").addEventListener("input", searchCatalog);
});
