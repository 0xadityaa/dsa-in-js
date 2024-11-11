const { BrowserHistory } = require("../solutions/design-browser-history");

describe("BrowserHistory", () => {
  let browserHistory;

  beforeEach(() => {
    browserHistory = new BrowserHistory("homepage.com");
  });

  test("should initialize with the homepage", () => {
    expect(browserHistory.history).toEqual(["homepage.com"]);
    expect(browserHistory.current).toBe(0);
  });

  test("should visit a new URL", () => {
    browserHistory.visit("google.com");
    expect(browserHistory.history).toEqual(["homepage.com", "google.com"]);
    expect(browserHistory.current).toBe(1);
  });

  test("should go back correctly", () => {
    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    expect(browserHistory.back(1)).toBe("google.com");
    expect(browserHistory.current).toBe(1);
    expect(browserHistory.back(1)).toBe("homepage.com");
    expect(browserHistory.current).toBe(0);
  });

  test("should not go back beyond the homepage", () => {
    browserHistory.visit("google.com");
    browserHistory.back(1);
    expect(browserHistory.back(1)).toBe("homepage.com");
    expect(browserHistory.current).toBe(0);
  });

  test("should go forward correctly", () => {
    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    browserHistory.back(1); // back to google.com
    expect(browserHistory.forward(1)).toBe("facebook.com");
    expect(browserHistory.current).toBe(2);
  });

  test("should not go forward beyond the last visited URL", () => {
    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    browserHistory.back(1); // back to google.com
    browserHistory.forward(1); // forward to facebook.com
    expect(browserHistory.forward(1)).toBe("facebook.com");
    expect(browserHistory.current).toBe(2);
  });

  test("should truncate history when visiting a new URL after going back", () => {
    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    browserHistory.back(1); // back to google.com
    browserHistory.visit("twitter.com");
    expect(browserHistory.history).toEqual(["homepage.com", "google.com", "twitter.com"]);
    expect(browserHistory.current).toBe(2);
  });
});
