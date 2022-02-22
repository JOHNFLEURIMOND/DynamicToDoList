# :checkered_flag:What It Looks Like :checkered_flag:: 

https://fleurimond-redux-todo.netlify.app/

# How It's Made :nut_and_bolt:🔨 :hammer::wrench::
 This application built with React.js, Redux, Webpack, Styled-Components, Semantic-UI.

## Optimizations.
I would love to correct the cards not bleeding into the footer, or have the footer stick below the main hero and main contents.

# How It's Works:white_check_mark::
I have to create a `reducer` in my `/Redux` folder to that handles all these state and action functions like `updateTodos`, `completeTodos`, `removeTodos`, `addTodos` for each one of the buttons a user can select...Once I write my reducers functions to handle state. When a user enters in a task within the input & press the  `submit` button, a function `add` will fire off another function `addTodos` from my reducer that that is passed as a prop.



 A card will the displays the info from the user typed input state `const [todo, setTodo] = useState("");`, a textarea if the user wants to update task, three buttons that will fire off the events for the current state and action functions `updateTodos`, `completeTodos`, `removeTodos`. To make all this happen I have to connect my redux store with React App.

I pass that same reducer to my store, I wrap my main App component in `main.js` in `Provider` which is connecting redux store with React App. Now I can use the store & Redux functionalities in my components. 

You have to connect React component to Redux, 
`export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);`

With the `connect()` in React-Redux you can create methods that allow you to hook into state and the functions I created earlier in my `reducers` in my components.

`./components/ToDoList/ToDoItem.jsx`


If a user brings its mouse to the `Navbar` clicks `Completed` Link, It will then take you to a new page with `react-router-dom` 

`App.jsx`



Where the user will see the Main Hero for the page and Two buttons that say `Completed` and `All` if the user selected the `Completed` Button then the `completedTodos` function will fire off. then it will have a success bar and a message saying `This Task Is Completed` if not say `This Task Is Not Completed` with a unsuccessful bar..
## My Awesome Project && Lessons Learned :mortar_board::



# Portfolio :open_file_folder::

** :computer:   WEBSITE:** [John Fleurimond](http://johnfleurimond.com)

# How To Get It Started :arrow_forward: :

## Installation

1. Clone repo
2. run `npm install`

## Available Scripts
 `node -v v16.13.2`
 `npm -v 8.1.2`

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

See the section about [deployment](#deployment) for more information.

### `npm run prettier`
This corrects the format.
