<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

Review the tests in `/src/__tests__/newFunction.test.ts`.

- You'll notice the line:
  ```typescript
  import { myFunction } from "../newFunction";
  ```
- The tests run against the function that `/src/newFunction.ts` exports, which
  is blank for now.

## Step 1

- Edit the function `myFunction` in `/src/newFunction.ts` to pass the tests in
  `/src/__tests__/newFunction.test.ts`
- Execute the tests by running the command `jest newFunction`
- If the tests fail, review your error messages, and correct your function; you
  do not need to edit the tests.

## Solution

You can review this repository's `solution` branch to view a working function.

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
