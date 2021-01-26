/* globals gauge*/
"use strict";
const {$, scrollDown, write, press, focus, click, below, dropDown, waitFor, toLeftOf, into, toRightOf,openBrowser, closeBrowser, goto,text,textBox,deleteCookies,closeTab,openTab} = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() === 'true';
const expect = require('expect');
const moment = require('moment');
const casual = require('casual');
const general = require('../support/pages/general');
const env = require("../env");

beforeScenario(async () => {
    await openBrowser({headless: headless},{args:[
            '--window-size=1024,1024',
            '--disable-offer-store-unmasked-wallet-cards',
            '--disable-popup-blocking',
            '--enable-automation',
            '--enable-viewport',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
            '--single-process']})
});

afterScenario(async () => {
    await deleteCookies();
    await closeBrowser();
});

step("Goto Go Boston All Inclusive page", async () => {
    await goto("https://gocity.com/boston/en-us/products/all-inclusive",{navigationTimeout:20000});
   // await general.syncApplication();
});

step("Go to Choose your All-Inclusive pass", async () => {
    await scrollDown(200);
    expect(await text("Choose your All-Inclusive pass").exists()).toEqual(true);
});

step("Select Number of Days Pass <days>", async (days) => {
    await scrollDown(200);

    switch(days){
        case '1':
            await dropDown({class:'form-control'}).select("Bos_Prod_Go_d1");
            break;
        case '2':
            await dropDown({class:'form-control'}).select("Bos_Prod_Go_d2");
            break;
        case '3':
            await dropDown({class:'form-control'}).select("Bos_Prod_Go_d3");
            break;
        case '5':
            await dropDown({class:'form-control'}).select("Bos_Prod_Go_d5");
            break;
        case '7':
            await dropDown({class:'form-control'}).select("Bos_Prod_Go_d7");
            break;
    }
});

step("Select Adults <adult>", async (adult) => {

    if(adult>0){
        for(let i=0;i< adult;i++){
            await click('+', toRightOf('Adult'));
        };
    };
});

step("Select Child <child>", async (child) => {
    if(child>0){
        for(let i=0;i< child;i++){
            await click('+', toRightOf('Child (3–12)'));
        };
    };
});

step("Click Checkout and check Order Total of <adult> and <child>", async (adult,child) => {

    let visitorCount = adult+child;
    if(visitorCount !== 0){
        let total = adult * 65 + child * 44;
        await click('Checkout');
    }
    else
    {
        expect(await text('$0').exists()).toEqual(true);
        gauge.message('Please enter more than 1 Adult or Child');
    }

});