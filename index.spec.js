// Simple test which imports .txt file as string and verifies its contents
// See transform-txt.js for details
const bannerText = require('./banner.txt');

describe('bannerText', () => {
  it('should spell "Hello world!"', () => {
    expect(bannerText.trim()).toBe('Hello world!');
  });
});