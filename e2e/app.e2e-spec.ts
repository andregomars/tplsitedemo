import { TplsitedemoPage } from './app.po';

describe('tplsitedemo App', () => {
  let page: TplsitedemoPage;

  beforeEach(() => {
    page = new TplsitedemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
