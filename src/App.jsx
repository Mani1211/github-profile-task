import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails/UserDetails";
import UsersList from "./components/UserLists/UserList";

function App() {
  const routes = [
    {
      routeProps: {
        path: "/",
        element: UsersList,
      },
      name: "Users",
    },
    {
      routeProps: {
        path: "/user-details/:username",
        element: UserDetails,
      },
      name: "UserDetails",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const Element = route.routeProps.element;
          return (
            <Route

              key={route.name}
              element={<Element />}
              path={route.routeProps.path}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
