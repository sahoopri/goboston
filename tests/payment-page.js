/* globals gauge*/
"use strict";
const {$, scrollDown, write, listItem, button, press, focus,checkBox, click, below, dropDown, waitFor, toLeftOf, into, toRightOf,openBrowser, closeBrowser, goto,text,textBox,deleteCookies,closeTab,openTab} = require('taiko')
const expect = require('expect');
const moment = require('moment');
const casual = require('casual');
const general = require('../support/pages/general');
const env = require("../env");

step("Pay for Booking with <payment> method", async (payment) => {
    switch(payment) {
        case 'card':
            await click('Debit / Credit Card');
            break;
        case 'paypal':
            await waitFor(1000);
            await click(listItem({class:'paypal-button false'}));
            break;
    }
    await waitFor(5000);
    //await scrollDown(50);
});

step("Enter Delivery Email Address", async () => {
    await focus(textBox({id:"checkout-form-email"}));
    await write("sahoo.29@gmail.com");
});

step("Select Signup for Travel Tips", async () => {
    await checkBox({name:'checkoutSubscription'}).check();
    await scrollDown(200);
});

step("Enter Card Payment Details", async () => {
    await focus(textBox({id:"credit-card-number"}));
    await write("4929498311405001"); //FAKE CARD NUMBER

    await scrollDown(100);
    await focus(textBox({id:"expiration-month"}));
    await write("01"); //FAKE CARD

    await focus(textBox({id:"expiration-year"}));
    await write("2022"); //FAKE CARD

    await focus(textBox({id:"cvv"}));
    await write("123"); //FAKE CARD

   // await scrollDown(100);
});

step("Enter Visitor Communication Details", async () => {
   // await scrollDown(100);
    await focus(textBox({id:"checkout-form-first-name"}));
    await write("Priyanka");

    await focus(textBox({id:"checkout-form-last-name"}));
    await write("Sahoo");

    await focus(textBox({id:"checkout-form-phone-number"}));
    await write("07766112233");
});

step("Enter Billing Address", async () => {
    await scrollDown(100);
    await focus(textBox({id:"checkout-form-address"}));
    await write("1 jdshjf jsdgjh sdjhf jdhgjhsdg");

    await click('Enter address manually');
    await waitFor(500);
    await scrollDown(50);

    await focus(textBox({id:"checkout-form-street"}));
    await write("1 jdshjf jsdgjh sdjhf");
    await focus(textBox({name:"address2"}));
    await write("abcd street");
    await focus(textBox({name:"city"}));
    await write("London");
    await dropDown({name:'country'}).select("GB"); //Country needs to be selected before state
    await dropDown('State').select("STH");
    await focus(textBox({name:"zipCode"}));
    await write("N1 9AW");
});

step("Select Agree Terms", async () => {
    await checkBox({name:'termsConditions'}).uncheck();  //in actual test it will be set to check()
    await waitFor(500);
    expect(await checkBox({name:'termsConditions'}).isChecked()).toEqual(false); //this will be true in actual test
});

step("Select Confirm Order And Pay", async () => {
    await waitFor(1000);
    await click('Confirm order and pay');
});

step("Check booking fails", async () => {
   /* Since we used invalid Credit Card details. We are leaving the terms unselected
      In real world this will be changed to a success message.
   * */
    expect(await text('This field is required').exists()).toEqual(true);
});

//* Select Paypal Checkout

step("Select Paypal Checkout", async () => {
    await waitFor(1000);
    await click(' Checkout');
    await click('Cancel and return to Leisure Pass Group Inc.'); //currently not using Paypal login details
});