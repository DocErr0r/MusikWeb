import "./App.css";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Login from "./components/user/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

function App() {


  const Root = () => {
    return (
      <>
        <nav className="headerS">
          <Navbar />
        </nav>
        <main className="flex">
          <Sidebar />
          <Outlet />
        </main>
        <Footer />
      </>
    );
  };
  function Main() {
    return (
      <>
        <Home />
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
