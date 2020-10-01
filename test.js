var webdriver = require('selenium-webdriver');
// Input capabilities
var capabilities = {
  'device': 'iPhone 11',
  'realMobile': 'true',
  'os_version': '13.0',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1', // CI/CD job or build name
  'browserstack.user': 'valerygorodniche1',
  'browserstack.key': 'XXXXX',
  'browserName': 'iPhone'
}
var driver = new webdriver.Builder().usingServer('https://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).build();
driver.get('https://www.google.com').then(function () {
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack').then(function () {
    driver.getTitle().then(function (title) {
      console.log(title);
      driver.quit();
    });
  });
});
