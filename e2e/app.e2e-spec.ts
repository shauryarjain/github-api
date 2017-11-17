import { GithubApiPage } from './app.po';

describe('github-api App', function() {
  let page: GithubApiPage;

  beforeEach(() => {
    page = new GithubApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
