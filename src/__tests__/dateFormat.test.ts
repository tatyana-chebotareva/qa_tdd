// The function here is copied in at the top of the test file, but that's just fine.

function dateFormat(shortDate: string): string {
  // this function will accept a numeric short date:
  // MM-DD-YYYY
  // and will return a long date, for example:
  // "2-5-2019" => "February 5, 2019"
  // "11-12-2022" => "November 12, 2022"
  return "";
}

// The describe block here is set up the same way as the prior tests.
describe("dateFormat", () => {
  // How exactly you test the date formatter is mostly up to you.
  //  - For example, how you organize different dates into multiple "it"s
  //    or if you only have one.
  // The requirements do leave a few questions as well.
  it("should format shorter short dates correctly", () => {
    expect(dateFormat("1-1-2000")).toBe("January 1, 2000");
    expect(dateFormat("3-3-1900")).toBe("March 3, 1900");
  });
  it("should format a longer 'short' date correctly", () => {
    // Presumably we're ok testing a two digit date with a leading zero
    // though the requirements aren't clear on that.
    expect(dateFormat("01-01-2000")).toBe("January 1, 2000");
    expect(dateFormat("12-10-2000")).toBe("December 10, 2000");
  });
  // The function may not be designed to handle stuff like this, but we can
  // always try!
  it("should format long past or future dates", () => {
    expect(dateFormat("1-1-1")).toBe("January 1, 1");
    expect(dateFormat("12-31-99999")).toBe("December 31, 99999");
  });
});
