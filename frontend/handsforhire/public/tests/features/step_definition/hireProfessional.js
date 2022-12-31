const { Given, When, Then } = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');
const { By, Key } = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


let driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();




Given('I am in a professionals profile after logging in', async() => {
    driver.manage().window().maximize()
    await driver.get('http://localhost:3000/professional/Hardik55')
});



When('I enter hire start and end date and click hire', async() => {
    await driver.findElement(By.id("btnHireModal")).sendKeys("btnHireModal", Key.RETURN);
    await driver.findElement(By.name("hire_start_date_time")).sendKeys("2021-09-15 00:00");
    await driver.findElement(By.name("hire_start_date_time")).sendKeys("2021-09-18 00:00");

    driver.sleep(3000)

    await driver.findElement(By.id("hireBtn")).sendKeys("hireBtn", Key.RETURN);
});

Then('I see successfully hired in toast', async() => {
    await driver.get('http://localhost:3000/list-all-professionals');
    driver.quit()
});