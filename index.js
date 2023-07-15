const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://swap.defillama.com/');
    
    await page.waitForSelector('#react-select-2-input');
    // Fill the dropdown input field
    await page.focus('#react-select-2-input');
    await page.keyboard.type('Arbitrum');
  
    // Trigger an additional key press to select the option
    await page.keyboard.press('Enter');
  
    const input = await page.$('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > div > input');
    await input.click({ clickCount: 3 })
    await page.type('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > div > input','12');
    await page.waitForSelector('button.chakra-button > span.chakra-text');
    // Click on the dropdown button
    await page.click('button.chakra-button > span.chakra-text');
    await page.keyboard.type('Wrapped BTC');
    await page.waitForTimeout(500);

   const firstOption = await page.$('p.chakra-text.css-xl3lrw > span.chakra-text.css-72rvq0');
   if (firstOption) {
     await firstOption.click();
   }
    // Click on the button
    await page.waitForSelector('div.css-1k491an button.chakra-button');  
    const buttons = await page.$$('div.css-1k491an button.chakra-button');
  
  if (buttons.length >= 2) {
    await buttons[1].click(); // Click on the second button
  }
   // Search for "USDC Coin" within the options box
   await page.keyboard.type('USD Coin');
   await page.waitForTimeout(500);
    // Select the "USD Coin (USDC)" option 
    const usdcOption = await page.$('p.chakra-text.css-xl3lrw > span.chakra-text.css-72rvq0');
    if (usdcOption) {
    await usdcOption.click();
    }
    //await page.waitForTimeout(500); // Wait for 500ms
    //await page.waitForSelector('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-2.fcGAPg > div:nth-child(5)');

    // Find the route option using page.evaluate()
    //const routeOption = await page.evaluate(() => {
        //return document.querySelector('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-2.fcGAPg > div:nth-child(5)');
    //});
    // Click on the route option
    //if (routeOption) {
    //await routeOption.click();
    //}
 
   
})();