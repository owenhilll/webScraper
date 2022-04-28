# webScraper
Standard web Scraper that utilizes Node.js (with axios.js and Cheerio.js modules) to pull specific data from https://stackoverflow.com/questions?tab=Bounties.  In my scrapper.js file, I used axios.js to fetch the HTML elements on the page. I located the desired elements I wish to use for the scrapper (bounty question and link to question. I then pulled from a class s-link to fetch the question and a class labeled .s-post-summary--content .s-post-summary--content-title' to fetch the link to the question. to run the application, I titled my script 'scrap'. Therefore, npm run scrap executes the program.