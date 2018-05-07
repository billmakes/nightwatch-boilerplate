module.exports = {
 'Open browser and navigate to the Google homepage' : function (browser) {
   var homepage = browser.page.homepage();
   homepage.navigate();
 },

 'Google homepage - Checking for elements' : function (browser) {
   var homepage = browser.page.homepage();
   homepage.waitForElementPresent('@inputField', 5000);
 },

  'EXIT': function (browser) {
    browser.end();
  }
};
