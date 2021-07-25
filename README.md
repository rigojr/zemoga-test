Zemoga Front End Development - José Salas Test
==================================================

## Summary
The following project, follow all the [acceptance criteria](https://github.com/zemoga/ui-test#acceptance-criteria) shown in the Zemoga repository.

Since the requirement is to add a `list of polls` to vote into a Website made with raw HTML & CSS, in order to improve the developer experience, those files were properly added into the `public folder`. With this approach, the component can be seen in live into the expected context.

## Pre-requisite
To fully run the current project, please be sure to have the following versions:

`Node v14.16.0` & `Npm v6.13.7`.

## Start Project
In order to start, please go to the root folder and execute `npm run start`.

## Tools & Packages
1. `Typescript`, with this javascript subset are avoided a lot of common mistakes and improve our code with strong type.
2. `create-react-app`, the current project was bootstrapping using `npx create-react-app my-app --template redux-typescript`, adding `redux toolkit` & `typescript` templates.
3. `Sass`, with this CSS preprocessor and the `BEM` methodology the code experience is powerful.
4. `esLint` & `prettier` are being used in order to improve easy code reading.
5. `date-fns` is used to manage all date-related logic.
6. `axios` is used to manage all promise http(s) calls.
7. `firebase`, to respond the persist requirement, all the data gave into the `data.json` was migrated to `firebase - real time database`. With this service is possible to get the needed data and to mutate it.
8. `react-icons` provide the required icons.

## Improvement opportunities
1. Add `unit testings`, to introduce the best good practice to the code, It is important to invest the required time to test the code with a good coverage, including edge cases.
2. Integrate `redux persist` or any other persist tool, in order to manage the user session, with this approach it is possible to determine for which poll the user has already voted.
3. Improve the refresh process, after a vote is emitted, it is important to refresh all the current polls with `firebase`, to properly handle the expected concurrence, and avoid data incongruity.
4. Prepare the end project (where this inner project will be living), the idea is to integrate easily after any update is made.

### This document was made by José Salas ([@rigojr](https://github.com/rigojr))