
# Making Contributions

**NOTE:**
**This section is outdated and needs to be re-written. It is based off a previous TypeScript project.**

Contributions by all developers are welcome, regardless of experience. 

> If you are making a major contribution that adds a new feature, page, or changes a significant amount of code-- please checkout a new branch and make your changes there. You may then submit a pull request for us to review and merge.

>ℹ️ Be sure to have read up on the [Project Structure](#ProjectStructure) and [Style Guides and Best Practices](#StyleGuides) when making your contributions.

```bash
# Create a new branch and automatically switch to it
git checkout -b BranchFeatureName

# Make your modifications
...

# Stage and commit your changes
git add .
git commit -m "<brief description of changes>"

# Push your new branch and its changes
git push origin BranchFeatureName

```
> ℹ️ New branches and comitted changes will not be visible to other users until your push your branch.

> Git is a rather complex topic for new developers. Please don't hesitate to reach out to me with any questions if you get stuck. - @MichaelRooplall


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

## Project Structure

### Components
Components shared between pages (eg. the Navbar) should be placed in ``app/components/``.
Components that belong to a particular page should be placed in ``app/PAGE/components``.

Component files should be placed in folders and named using PascalCase. The ``.jsx`` file should be the same name as the folder-- do not use ``index.tsx`` to create every component.

Example:
```
.
└── app/
    └── components/
        ├── Navbar/
        │   ├── Navbar.tsx
        │   └── navbar.module.css
        └── Robots/
            └── Robot/
                ├── Robot.tsx
                └── robot.module.css
```

### Styles
Global styles or styles pertaining to an entire particular page belong in ``app/styles/``, as opposed to grandular styles for individual components which are placed in stylesheet modules in the component's directory.

Global CSS Variables should be defined in ``app/styles/global.css ``

Example:
```
.
└── app/
    └── styles/
        ├── global.css
        ├── Home.module.css
        └── Robots.module.css
```

### Assets
Images, fonts, and other assets (inc. 3d files, sounds, etc.) are placed in their respective folders under ``/public/assets/``

Example:
```
.
└── public/
    └── assets/
        ├── fonts/
        │   └── BLADRMF_.TTF
        ├── images/
        │   └── Logo.png
        └── models/
            └── TheHound.obj
```

> 💡 There are libraries that create small, blurred placeholder images (compressed base64 image strings) that we can preload for the user. These placeholders will then fade into the real HD image when loading is completed. Great for faking early responsivity.

This project also uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Open Sans, a custom Google Font.


## Style Guides & Best Practices

> Design wise, there are currently no concerete examples of what the end product of the websie should look like. In the future, we hope to have a mood board of Figma members can look at to draw inspiration from. 

To keep the project code manageable between different developers, we strongly reading up on the the following style conventions:

[AirBNB's JavaScript Style Guide](https://github.com/airbnb/javascript)
[AirBNB's React/JSX Style Guide](https://airbnb.io/javascript/react/)

This project doesn't necessarily follow them to a tee, but they are a good starting point for keeping things clean.

Along with these rules, please consider the following:
1. Use react functional components over class components [1]
2. Avoid in-line styles whenever possible by creating a stylesheet module. [2]
3. When using certain css values across multiple pages, eg. an accent color, define the value once as a css root variable in the global stylesheet and import it wherever you need to use it.
4. If you are making a large change or adding a new feature, first checkout a new branch, make your changes, commit the branch, and make a pull request. Someone will review it and merge it in.
5. Don't confuse ``margin`` and ``padding``. Use ``margin`` on elements to space them away from eachother. Use ``padding`` on elements that act as <em>containers</em> to give "borders" of space.
6. Use [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) when making complex layouts wherever reasonable. Use the css rule 'gap' for spacing elements inside of a flexbox container rather than margins when possible.
7. Remember that in-line styles take precedence over styles applied from stylesheets. Also remember that stylesheets are 'cascading', meaning that latter rules have a high priority and can overwrite former rules.

>[1] There are two ways of writing React components. We prefer to use functional components over class components. This may seem challenging for developers coming from object-oriented languages like Java. You can read more about functional components and class components [here](https://www.twilio.com/blog/react-choose-functional-components).

>[2] If you like to build your components with in-line styles first, you can definitely do this and then move them to a modular css file later.
