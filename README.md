# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## crash course React
I followed a crash course of React to understand the fundamentals before I finish my quiz project.

I found this course on Youtube: https://www.youtube.com/watch?v=jLS0TkAHvRg .

### how I personally create a React project
I start by making my repository on GitHub and then inside this directory I do in the terminal `create-react-app .` so that I don't have 2 folders inside my React application. The dot (.) at the end creates the app without creating a new directory.

### what is React

React is an open source JavaScript library for building user interfaces.
- React is a JavaScript library.
- Building user interfaces.

### Why React?
React is one of the most popular UI libraries and is well known in the job market.

- A great community and behind it.
- A component based architecture.
- Is declarative, this means that you can tell React what you want true code, and React with his ReactDom library, will build the UI.

## What do you need for React?

- Browser.
- Node JS.
- Code editor.

## Application folder structure
@ The root level we have tree folders:
 - node_modules: this is the folder where all your dependencies are located.
 - public: this folders contains 6 files, but as a beginner you only need to focus on the index.html file. In this file normally you will not put any code.. You want React to control the UI true the `<div id="root"></div>`.
 - src: this is the folder where you will work the most during development =>
   - index.js:
   
  ![img.png](img.png)

The app component is rendered inside the root present in index.js.
   - App.js:

   ![img_1.png](img_1.png)

The app component represents the view of the application.


- And we also have 4 files:
    - .gitignore: to ignore files.
    - package-lock.json: this files ensures consistent installation of the dependencies.
    - package.json:  this files containes the dependencies (react and react-dom are necessary to create React application) and the scripts (start, build, test and eject) required for the project.
    - README.md: Standard readme file.


## What happens when you run the command npm start?
1) Index.html file is served in the browser and contains the root DOM node
2) Next the control enters index.js. The react dom library renders the App component onto the root DOM node
3) Inside the App.js, the app component contains the HTML, witch is ultimately displayed in the browser
   
## Components
In react a component represents a part of the user interface.
A traditional website can be broken down into a header, sidenav, main content and a footer.
Each section is represented by a component in react. All components when composed in the right way make up the entire website.

![img_2.png](img_2.png)

We also have a component that contains all the four components. It is called as root component and is usually named as app component.
Components are also reusable.

![img_3.png](img_3.png)

The same component can be used with different properties to display different information. For example the sidenav component can be the left sidenav as well the right sidenav. The UI can remain the same but the content can change.

![img_4.png](img_4.png)

## Components
We have 2 types of components:
- Functional components: 
- Class components.

Functional components are newer and is pretty much what you need to learn in the year 2022. But for me personally I also will do my research how to work with Class components because I like working with Classes, and this comes also in handy when using other frameworks that only use class components.

## Functional components
Functional components are literally javascript functions. They may accept some input properties and return html witch describes the UI.

![img_5.png](img_5.png)


## making my first function component
First I make a folder component and then I add a js file called Greet in the folder.

![img_6.png](img_6.png)


Then in the Greet component I make a function Greet and return and h1 tag with content inside.
I also export this function at the bottom of the function.

![img_7.png](img_7.png)


Then I import the Greet component in the App component and I put the Greet component between the div tags in the App function. The App component will render the Greet component and the App component will be rendered by the index.js file.

![img_8.png](img_8.png)

## Differences between default and name exports
The main difference is that if you use default export you can rename your import and call it whatever you want, and it still will work.

Default export:

![img_10.png](img_10.png)

![img_9.png](img_9.png)

In this example I call the import Blabla and I call it again in the App function and this will work and not break my application.

Named export:

![img_11.png](img_11.png)

In this case I export the Greet function at the function.

![img_12.png](img_12.png)

And I have to import the component using curly brackets and using the same name as my function in the Greet component.

## What is JSX?
Jsx looks like html but it isn't. It's a syntax extension to javascript. In react, jsx is what describes how the UI should look like.
It also comes with the full power of javascript library.

This are some differences between JSX and html:
![img_13.png](img_13.png)

## Props
Pops(short word for properties) is the optional input that any component can accept. It allows the component content to be dynamic.

The good thing about using component is that you can reuse them many times.

Here is an example how to use props to make the components reusable:

![img_14.png](img_14.png)

To specify a property for a component we specify them as attributes. In this case I want to specify a name prop, so I add a name attribute to Greet component in the App.js function?

How do we retrieve the value of the Greet component:

![img_15.png](img_15.png)

In this case I add a parameter to the function component (props) and then I replace where before was a name with `{props.name}` this way we can retrieve the value of the attribute previously set in the App component.

Passing a number as a prop/attribute:

![img_16.png](img_16.png)

In case we need to pas a number and not a string, you need to put your number value in curly braces.

![img_17.png](img_17.png)

For the Greet component it's the same as before, you just give in prop and then the name(age) of the attribute set in App.js

## Children props
We can also pass unknown content using children props.

![img_18.png](img_18.png)

I specified some content(string and a button) between the opening en closing tag of the component. 

![img_19.png](img_19.png)

Then I retrieve the value of the children properties by calling it in the function`{props.children}`. But first you have to wrap the return in a div, otherwise it will not work.

The children props are very useful when you have to compose new components from existing components.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
