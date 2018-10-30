const puppeteer = require('puppeteer');
const url = 'http://localhost:3003';
const path = require('path');
const request = require('request');

let page;
let browser;
const width = 1024;
const height = 512;


beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(path.join(url, '/buy/massdrop-copper-aaa-pocket-flashlight'), { waitFor: 'networkidle2' });
});

afterAll(() => {
  browser.close();
});

describe('server functionality', () => {
  describe('GET /', function() {
    test('should return the context of html', async(done) => {
      request.get('/')
      .expect(200)
    })
  })
})



