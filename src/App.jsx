import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Budget from "./pages/budget";
import NotFound from "./pages/notfound";

function App() {
  const routes = [
    { path: "/", element: <Dashboard /> },
    { path: "/budget", element: <Budget /> },
    { path: "*", element: <NotFound /> },
  ];
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
