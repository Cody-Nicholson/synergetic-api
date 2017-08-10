import { SynergeticApiPage } from './app.po';

describe('synergetic-api-ng App', () => {
  let page: SynergeticApiPage;

  beforeEach(() => {
    page = new SynergeticApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
