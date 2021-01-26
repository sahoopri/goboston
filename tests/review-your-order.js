/* globals gauge*/
"use strict";
const {$, scrollDown, write, press, focus, click, below, dropDown, waitFor, toLeftOf, into, toRightOf,openBrowser, closeBrowser, goto,text,textBox,deleteCookies,closeTab,openTab} = require('taiko')
const expect = require('expect');
const moment = require('moment');
const casual = require('casual');
const general = require('../support/pages/general');
const env = require("../env");

step("Enter visiting Boston date <visitingDate>", async (visitingDate) => {
    await focus(textBox({class:'travel-date--calendar travel-date-element hasDatepicker'}));
    await click('Next');
    await click(visitingDate);
});

step("Click Continue To Payment", async () => {
    await click("Continue to payment");
});