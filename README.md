# :checkered_flag:What It Looks Like :checkered_flag:: 

https://fleurimond-redux-todo.netlify.app/

# How It's Made :nut_and_bolt:🔨 :hammer::wrench::
 This application built with React.js, Redux, Webpack, Styled-Components, Semantic-UI.

## Optimizations.
I would love to correct the cards not bleeding into the footer, or have the footer stick below the main hero and main contents.

# How It's Works:white_check_mark::
I have to create a `reducer` in my `/Redux` folder to that handles all these state and action functions like `updateTodos`, `completeTodos`, `removeTodos`, `addTodos` for each one of the buttons a user can select...Once I write my reducers functions to handle state. When a user enters in a task within the input & press the  `submit` button, a function `add` will fire off another function `addTodos` from my reducer that is passed as a prop.

`./components/ToDoList/ToDoInput.jsx`  and this is passed to `./components/ToDoList/ToDoList.jsx` and then passed to the Parent component `App.jsx`
```
 const add = (e) => {
    if (todo === '') {
      alert('Input is Empty');
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo('');
    }
  };

   <div>
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          label='To Do'
          placeholder='Write your to do here'
        />
        <Button color='green' onClick={() => add()}>
          Submit
        </Button>
      </div>
  ```

```
const Homepage = (props) => {

  return (
    <Container>
      <GlobalStyle />
      <Nav />
      <MainHero />
      <ToDoList />
      <Footer />
    </Container>
  );
};
```

 A card will the displays the info from the user typed input state `const [todo, setTodo] = useState("");`, a textarea if the user wants to update task, three buttons that will fire off the events for the current state and action functions `updateTodos` on KeyPress and the user press enter `(e.which === 13)` it will update the task,  when the use clicks complete button, the  `completeTodos` function will fire off and complete the task, when the user clicks on the red X it will fire off `removeTodos` function and it will remove the todo. To make all this happen I have to connect my redux store with React App.

I pass that same reducer to my store, I wrap my main App component in `main.js` in `Provider` which is connecting redux store with React App. Now I can use the store & Redux functionalities in my components. 

You have to connect React component to Redux, 
`export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);`

With the `connect()` in React-Redux you can create methods that allow you to hook into state and the functions I created earlier in my `reducers` in my components.

`./components/ToDoList/ToDoItem.jsx`

     ``` <TextArea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
      />

      <Button onClick={() => changeFocus()}>
        <AiFillEdit />
      </Button>
      {item.completed === false && (
        <Button style={{ color: 'green' }} onClick={() => completeTodo(item.id)}>
          <IoCheckmarkDoneSharp />
        </Button>
      )}
      <Button style={{ color: 'red' }} onClick={() => removeTodo(item.id)}>
        <IoClose />
      </Button>
      <div style={{ padding: '.5rem 0' }}>
        {item.completed && (
          <Progress percent={100} success>
            This Task Is Completed
          </Progress>
        )}
      </div>
      <div style={{ padding: '.5rem' }}>
        {!item.completed && (
          <Progress percent={50} error>
            This Task Is Not Completed
          </Progress>
        )}
      </div>```

If a user brings its mouse to the `Navbar` clicks `Completed` Link, It will then take you to a new page with `react-router-dom` 

`App.jsx`

```const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/CompletedListPage/" component={CompletedListPage} />
      <Route path="/About/" component={About} />
    </Switch>
  </Router>
);
```

Where the user will see the Main Hero for the page and Two buttons that say `Completed` and `All` if the user selected the `Completed` Button then the `completedTodos` function will fire off. then it will have a success bar and a message saying `This Task Is Completed` if not say `This Task Is Not Completed` with a unsuccessful bar..

`./components/ToDoList/ToDoItem.jsx` this child component is passed to its parent component `./components/ToDoList/CompletedItems.jsx` then passed `./components/ToDoList/CompletedListPage.jsx`

`CompletedItems.jsx`

    ```
    <ButtonArea>
  <Button basic color="green" onClick={() => setSort("completed")}>
    Completed
  </Button>

  <Button basic color="red   " onClick={() => setSort("all")}>
    All
  </Button>
</ButtonArea>;

{
  props.todos.length > 0 && sort === "completed"
    ? props.todos.map(item => {
        return (
          item.completed === true && (
            <Segment inverted key={item.id}>
              <List divided inverted relaxed>
                <List.Item>
                  <List.Content>{item.item}</List.Content>
                </List.Item>
              </List>

              <UL>
                <li key={item.id} style={{ listStyle: "none !important" }}>
                  <ToDoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                </li>
              </UL>
            </Segment>
          )
        );
      })
    : null;
}
```

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
