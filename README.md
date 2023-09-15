# BNCHS Sentinels Website v5.0 <!-- omit in toc -->
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)	![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) 	![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)     ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

[![ESLint](https://github.com/Team5599/BNCHS-Sentinels-Website-v5/actions/workflows/lint.yml/badge.svg)](https://github.com/Team5599/BNCHS-Sentinels-Website-v5/actions/workflows/lint.yml)

The official website for the BNCHS Robotics Team | FRC Team #5599 - The Sentinels!

The goal is to build a beautiful modern new website, while at the same time allowing students to learn the JavaSccript ecosystem with minimal experience.

Visit the live version over at [beta.team5599.com](https://beta.team5599.com/).

**Built with JavaScript, NextJS, and Redux**

## Getting Started

To work on this project, you will need to have [git](https://git-scm.com/downloads) and [NodeJS](https://nodejs.org/en/download/) (v12 or higher) installed. 
If you don't have an editor yet, we recommend getting started with [VSCode](https://code.visualstudio.com/). 

```bash
# Clone the project repository
git clone https://github.com/Team5599/BNCHS-Sentinels-Website-v5.git

# Navigate into the project directory
cd BNCHS-Sentinels-Website-v5

# Install dependencies
npm install

# Run the project locally
npm run dev

# This will start the nextJS application.
# A live version of the website will be available for you to preview at https://localhost:3000/

# This project supports "hot-reloading", meaning any changes you make and save in your editor
# will automatically update in the browser without needing to restart the program or reload the page

```

Visit [http://localhost:3000/](http://localhost:3000/) in your browser to ensure the application is working.

> If you have any issues with installation, please contact @MichaelRooplall

## Resources

To learn more about React.js, take a look at the following resources:
- [React.js Documentation](https://reactjs.org/docs/getting-started.html) - Learn about React.js features
- [Intro to React.js](https://reactjs.org/tutorial/tutorial.html) - A introduction to React.js

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

To learn more about Redux, take a look at the following resources:
- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview) - Learn the core concepts, principles, and patterns of Redux
- [Redux Tutorials](https://redux.js.org/tutorials/index) - More resources for learning Redux

## Deploying to Heroku

The ``heroku`` branch is responsible for deploying to our live production server Heroku.

You cannot push directly to the ``heroku`` branch. You must create a pull request to merge your branch into the ``heroku`` branch. When you create a pull request, an ESLint check is run against your changes.

The ESLint check is responsible for catching breaking bugs and unoptimizations before being deployed to Heroku.

Once the ESLint check is successful, the pull request can be merged. When merging is complete, GitHub Actions runs our "Heroku Deploy action", uploading the changes to our Heroku host.

## API

Current documentation for the back-end API can be found [here](https://www.team5599.com/api/). 

# Contributors

\<Grid of contributors>