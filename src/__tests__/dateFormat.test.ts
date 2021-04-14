function dateFormat(shortDate: string): string {
    // this function will accept a numeric short date:
    // MM-DD-YYYY
    // and will return a long date, for example:
    // "2-5-2019" => "February 5, 2019"
    // "11-12-2022" => "November 12, 2022"
    return "";
 }

describe("dateFormat", () => {

    //"11-12-2022" => "November 12, 2022"
    it("convert from numeric short date MM-DD-YYYY to a long date Month DD, YYYY", () => {
        expect(dateFormat("20-10-2018")).toBe("October 20, 2018");
    });

    //"2-5-2019" => "February 5, 2019"
    it("convert from numeric shorter date M-D-YYYY to a long date Month D, YYYY", () => {
        expect(dateFormat("1-2-1999")).toBe("February 1, 1999");
    });

    //what should dateFormat return if shortDate string is not in mm-dd-yyyy/m-d-yyyy format? i.e. dd-mm-yyy for past dates
    it("convert past dates?", () => {
        expect(dateFormat("1-2-578")).toBe("February 1, 578");
    });
    //what should dateFormat return if shortDate string is not in mm-dd-yyyy/m-d-yyyy format? i.e. dd-mm-yyyyy for future dates
    it("conver future dates?", () => {
        expect(dateFormat("5-6-35001")).toBe("June 5, 35001");
    });

    it("converts Feb 29 date from leap year (i.e.2020)", () => {
        expect(dateFormat("29-02-2020")).toBe("February 29, 2020");
    });

    //what if date is formatted right but is incorrect? i.e.32-13-2021
    it("valid format but non existent date", () => {
        expect(dateFormat("32-13-2021")).toBe("Error");
    });

    //what if date is valid but in yyyy-mm-dd/mm.dd.yyyy/etc. format?
    it("valid date but different format", () => {
        expect(dateFormat("2021-7-8")).toBe("Error");
    });

});