const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {


  
  const URL = 'https://youtu.be/AOAtz8xWM0w'; // Modify this to set the URL of the website you want to search

  // Launch a headless Chrome browser
  const browser = await puppeteer.launch();

  // Create a new page in the browser
  const page = await browser.newPage();

  // Navigate to a webpage
  await page.goto(URL);

  // Get the HTML content of the page
  const content = await page.content();

  // Parse the HTML data using Cheerio
  const $ = cheerio.load(content);

  // Find and print the text of the first H1 element on the page
  const h1Text = $('h1').first().text();
  console.log(h1Text);

  // Click a button on the page
  const button = $('button#my-button');
  await button.click();

  // Wait for the page to load after clicking the button
  await page.waitForNavigation();

  // Get the HTML content of the updated page
  const updatedContent = await page.content();

  // Close the browser
  await browser.close();
})();
