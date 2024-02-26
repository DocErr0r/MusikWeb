// import "./App.css";
import "../src/components/styles/Navbar.css";
import "../src/components/styles/Utility.css";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const Root = () => {
    return (
      <>
        <nav className="headerS">
          <Navbar />
        </nav>
        <Outlet />
      </>
    );
  };
  function Main() {
    return (
      <>
        <main className="flex">
          <Sidebar />
          <Home />
        </main>
        <Footer />
      </>
    )
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>This page is note found</h1>} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <h1>hello word</h1> */}
    </div>
  );
}

export default App;
