/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Search developers.google.com/web for articles tagged
 * "Headless Chrome" and scrape results from the results page.
 */

 'use strict';

 const puppeteer = require('puppeteer');
 
 (async () => {
   const browser = await puppeteer.launch({
     headless: false,
     args: [
         '--disable-gpu',
         '--disable-dev-shm-usage',
         '--disable-setuid-sandbox',
         '--no-first-run',
         '--no-sandbox',
         '--no-zygote',
         '--deterministic-fetch',
         '--disable-features=IsolateOrigins',
         '--disable-site-isolation-trials',
         // '--single-process',
     ],
 });
   const page = await browser.newPage();
 
   await page.goto('http://192.168.8.1', 'networkidle0');
 
   // Type into search box.
   // await page.type('', 'Headless Chrome');
 
   // Wait for suggest overlay to appear and click "show all results".
   // const allResultsSelector = '.devsite-suggest-all-results';
   // await page.waitForSelector(allResultsSelector);
 
   const html = await page.content(); // serialized HTML of page DOM.
   await page.click('#ussd');
   await page.type('#username', 'admin', {delay: 200});
   await page.type('#password', 'Technomath', {delay: 200});
   await page.click('#pop_login');
   //wait a bit
   await page.waitForTimeout(5000);
   // go
   
   // general_command_select_input
   await page.type('#general_command_select_input', '*111*100#', {delay: 200});
   //wait a bit
   await page.waitForTimeout(5000);
   // go
   await page.click('#general_btn');
   console.log(html);
   //await browser.close();
   return html;
 
 
    await page.waitForTimeout(5000);
   // const allResultsSelector = '.dults';
   // await page.waitForSelector(allResultsSelector);
 
   await browser.close();
 })();
 