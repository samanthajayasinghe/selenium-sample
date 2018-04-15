var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).
build();

driver.get('http://orangehrm.os');
var element = driver.findElement(webdriver.By.name("txtUsername"));
element.sendKeys("Admin");
driver.sleep(10*100);
driver.close();