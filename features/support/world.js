const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class RockPaperScissorsWorld {
  constructor() {}

  // Open the home page using puppeteer
  async openHomePage() {
    this.browser = await puppeteer.launch({headless: false, slowmo: 100})
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
  }

  // Close the home page when you're done, dude
  async closeHomePage() {
    await this.browser.close()
  }

  // Helper for checking if certain content (text) is on the page
  async pageHasTextContent(expectedContent) {
    const pageContent = await this.page.content()
    const actualContent = pageContent.match(expectedContent)[0]

    expect(actualContent).to.be.eq(expectedContent)
  }

  btnSelectorFromName(btnName) {
    if (btnName === 'rock') {
      return '#rock-throw'
    } else if (btnName === 'paper') {
        return '#paper-throw'
    } else if (btnName === 'scissors') {
        return '#scissors-throw'
    } else {
       `${btnName} button is not defined`
    }
  }

  async clickOnButton(btnName) {
    const btnSelector = this.btnSelectorFromName(btnName.toLowerCase())
    await this.page.waitForSelector(btnSelector)
    await this.page.click(btnSelector)
  }

}

setWorldConstructor(RockPaperScissorsWorld)