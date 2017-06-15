import { FutbolAppAngularPage } from './app.po';

describe('futbol-app-angular App', () => {
  let page: FutbolAppAngularPage;

  beforeEach(() => {
    page = new FutbolAppAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
