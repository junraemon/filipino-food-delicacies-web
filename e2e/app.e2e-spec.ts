import { FilipinoFoodDelicaciesWebPage } from './app.po';

describe('filipino-food-delicacies-web App', () => {
  let page: FilipinoFoodDelicaciesWebPage;

  beforeEach(() => {
    page = new FilipinoFoodDelicaciesWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
