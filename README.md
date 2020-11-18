<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Setup:

- First fork, then clone this repository; you'll be able to push your changes
  back up to your forked repository in the near future.

# Lab Exercise 1

<details> <summary> View exercise 1... </summary>

# Project Summary

Review the tests in `/src/__tests__/newFunction.test.ts`.

- You'll notice the line:
  ```typescript
  import { myFunction } from "../newFunction";
  ```
- The tests run against the function that `/src/newFunction.ts` exports, which
  is blank for now.

## Instructions

- Edit the function `myFunction` in `/src/newFunction.ts` to pass the tests in
  `/src/__tests__/newFunction.test.ts`
- Execute the tests by running the command `jest newFunction`
- If the tests fail, review your error messages, and correct your function; you
  do not need to edit the tests.

## Submission

Copy and paste the content of `newFunction.ts` (NOT `newFunction.test.ts`) into
Canvas to submit this assignment.

</details>

# Lab Exercise 2

<details> <summary> View exercise 2... </summary>

# Project Summary

Your organization is in need of a date formatting function. To get som epractice
with unit testing and TDD, they have assigned you to write unit tests for the
`dateFormat` function.

Unlike the previous exercise, neither the function, nor the tests have been set
up already.

## Instructions

- Create a new test file, `/src/__tests__/dateFormat.test.ts`
- Add the mock function your developer gave you:
  ```typescript
  function dateFormat(shortDate: string): string {
    // this function will accept a numeric short date:
    // MM-DD-YYYY
    // and will return a long date, for example:
    // "2-5-2019" => "February 5, 2019"
    // "11-12-2022" => "November 12, 2022"
    return "";
  }
  ```
- Add a describe block, and then tests.
  - The comments in the code should give you everything you need for the
    function's requirements.
  - The tests from the prior exercise should give you a format to follow for
    your tests.

## Submission

Copy and paste the content of your `dateFormat.test.ts` into Canvas to submit
this assignment.

</details>

## Solution

You can review this repository's `solution` branch to view a working function
for lab exercise 1, and the tests for lab exercise 2 as well.

## Review

That's the core of TDD! Only if the requirements are wrong do the tests need
updating.

- (These tests are written accurately, so you can trust them)

The tests aren't perfect, especially when it comes to user experience, but
that's nothing new; you should always have a manual tester checking something
like that. However, for a function like this, it's perfect! Good work.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and
create a pull request so we can review your changes and merge them into the
master repo and branch.

## Copyright

© DevMountain LLC, 2020. Unauthorized use and/or duplication of this material
without express and written permission from DevMountain, LLC is strictly
prohibited. Excerpts and links may be used, provided that full and clear credit
is given to DevMountain with appropriate and specific direction to the original
content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
