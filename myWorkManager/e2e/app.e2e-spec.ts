import { MyWorkManagerPage } from './app.po';

describe('my-work-manager App', function() {
  let page: MyWorkManagerPage;

  beforeEach(() => {
    page = new MyWorkManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
