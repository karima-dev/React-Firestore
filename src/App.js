import "./App.css";

import Login from "./containers/Login";
import ReadTodo from "./containers/ReadTodo";
import Inscription from "./containers/Inscription";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoApp from "./containers/TodoApp";
import Header from "./layouts/Header";
import { useFirestore } from "./hooks";
import { collections } from "./constants";
import { useDispatch } from "react-redux";
import { pushTasks } from "./containers/TodoApp/actions";
import { remplirListe } from "./utils/arrayUtils";

function App() {
  const { getAll } = useFirestore(collections.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    getAll().onSnapshot(getData);
    dispatch({ type: 'LOGIN' })
  }, []);

  const getData = (items) => {
    dispatch(pushTasks(remplirListe(items)));
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/inscription">
          <Inscription />
        </Route>
        <Route path="/todo">
          <TodoApp />
        </Route>
        <Route path="/tasks">
          <ReadTodo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
