const {$,currentURL,click,text,waitFor,image,dropDown,write,into,screenshot} = require('taiko');
const fs = require('fs');
const moment = require('moment');
const expect = require('expect');
const config = require('../config');

const syncApplication = async function () {
    await waitFor(500);
};

const errorHandler = async function () {
    if (await text('Oops, Something went wrong!').exists()){
        await screenshot({fullPage:true})
        gauge.message('ERROR OCCURED')
    }
}

module.exports = {
    syncApplication,
    errorHandler
};