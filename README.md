# Readme

### End to End Test Automation  :
This is a simple node.js framework that automates the Leisure Pass Group - Go-Boston All Inclusive Pass webpage using Taiko, which allows targeting of the DOM using text rather than selectors and Gauge which supports writing Behaviour driven development BDD spec files.
https://gocity.com/boston/en-us/products/all-inclusive 

#### Features : 
* Clear folder structure
* Runnning tests in parallel 

#### Scenarios Covered :
* E2E purchase of all inclusive pass using Credit/Debit card (the tests in real world will use CC details from .env file but currently hardcoded)
* E2E purchase of all inclusive pass using Paypal (Just confirming here that user is redirected to paypal login modal and then back, due to lack of active paypal account)

#### Scenarios in Pipeline to Automate :  
Due to lack of time the below mentioned scenario's couldn't be automated for this test.
* Clicking a Closed attraction and see if user can purchase it 
* Clicking an Open attraction and see if user can purchase it 
* Signup Limited time offer with email 
* Win $250 voucher flow
* Test the 90 days cancellation policy flow
* Test BUY button flow to select day passes


#### To Get Started
##### Pre-requistes
1. Make sure Node.js is installed on your computer. Install it from nodejs.org
2. Yarn or Npm package manager installed
3. Install gauge ```brew install gauge```
4. Install Taiko ```npm install -g taiko```
5. Initialize Gauge using npm 
```
    npm install @getgauge/cli
    gauge init js
```


##### Run Scripts
* Clone the repository. Keep the folder structure intact
* Navigate to project root folder and run
 ```npm install```
* Run ``` npm run test ``` to run all tests
* Run ``` npm run wip ``` to run Work in progress tests
* Run ``` gauge run specs/*.spec -p -n 2 ``` to run parallel tests
* Run ```npm run test:single -- specs/LPG-01_card.spec ``` to run individual tests 
where "LPG-01_card.spec" is the test spec name

#### HTML Reports
Default Gauge HTML reports are generated which can be customized according to specific needs

#### Reference
* Follow links below for further documentation on Taiko Gauge 

[https://taiko.gauge.org/](https://taiko.gauge.org/)

[What’s Taiko?](https://www.npmjs.com/package/taiko)

[Dotenv Documentation](https://www.npmjs.com/package/dotenv)

----
