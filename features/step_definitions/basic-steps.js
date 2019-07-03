const { After, Given, Then, When } = require("cucumber");

Given('I visit the site', async function () {
    return await this.openHomePage()
  });

Then('I should see {string}', async function (content) {
    return await this.pageHasTextContent(content)
});

After(async function() {
  return await this.closeHomePage()
})

When('I click {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see {string} or {string} or {string}', function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see {string} or {string} or {string}', function (string, string2, string3) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see {string} or {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see {string} update depending on whether or not I won the game', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

// const { After, Given, Then, When } = require('cucumber')
// //this works
// Given('I visit the site', async function () {
//   return await this.openHomePage()
// })
// //this works
// After(async function () {
//   return await this.closeHomePage()
// })
// //this works
// Then('I should see {string}', async function (content) {
//   return await this.pageHasTextContent(content)

// })
// //this works
// When('I click {string}', async function (string) {
//   return await this.clickOnButton(string)

// })
// //this works
// Then('I fill in {string} with {string}', async function (field, content) {
//   return await this.fillFormField(field.toLowerCase(), content)
// })

// Then('I should have {int} contact in my address book', async function (contactCount) {
//   return await this.checkContactStorageCount(contactCount)
// })

// Then('I should not see {string}', async function (content) {
//   return await this.pageDoesNotHaveTextContent(content)
// })
