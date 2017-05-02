import { Ng4materialPage } from './app.po';

describe('ng4material App', () => {
  let page: Ng4materialPage;

  beforeEach(() => {
    page = new Ng4materialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
