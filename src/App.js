import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";
import About from "./components/About";
import "./App.css"
import userContext from "./utils/userContext";


const App = () => {
  const [todo, setTodo] = useState([]);
  const [userInfo,setUserInfo]=useState();

  useEffect(() => {
    fetchData();
    setUserInfo("Sangam")

  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const response = await data.json();

    setTodo(response);
  };

  //modify user context
  return (
    <>
      {" "}
      <userContext.Provider value={{loginInfo:userInfo}}>
      <Header />
      <div className="app">
        {todo.map((todo) => (
          <Body todo={todo} key={todo.id} />
        ))}
      </div>
      </userContext.Provider>
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
