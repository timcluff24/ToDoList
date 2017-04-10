import { FirbaseAngular2Page } from './app.po';

describe('firbase-angular2 App', () => {
  let page: FirbaseAngular2Page;

  beforeEach(() => {
    page = new FirbaseAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
