import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";
import About from "./components/About";
import "./App.css"

const App = () => {
  const [todo, setTodo] = useState([]);
  console.log("App component created!!");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const response = await data.json();
    console.log(response);
    setTodo(response);
  };
  return (
    <>
      {" "}
      <Header />
      <div className="app">
        {todo.map((todo) => (
          <Body todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
