import "./App.css";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Login from "./components/user/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Browse from "./components/sidebar/sidebarPages/Browse";
import Discover from "./components/sidebar/sidebarPages/Discover";
import Playlists from "./components/sidebar/sidebarPages/Playlist";
import Likes from "./components/sidebar/sidebarPages/Likes";

import { useEffect, useState } from "react";
import { useStateProvider } from "./utils/stateProvider";
import { reducerCase } from "./utils/constants";

function App() {
  const [visible, setVisible] = useState(false);

  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];
      dispatch({ type: reducerCase.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  // console.log(token);

  // useEffect(() => {
  //   if (window.innerWidth <= 900) {
  //     setVisible(true)
  //   }
  // }, []);

  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  }

  const [side, setSide] = useState(false);
  const opensidebar = () => {
    if (window.innerWidth <= 900) {
      setSide(true);

    }
  };
  const closeSidebar = () => {
    if (window.innerWidth <= 900) {
      setSide(false);

    }
  };

  window.addEventListener('resize', handleResize);
  const Root = () => {
    return (
      <>
        <nav className="headerS">
          <Navbar opensidebar={opensidebar} />
        </nav>
        <main className="flex">
          <Sidebar visible={visible} closeSidebar={closeSidebar} side={side} />
          <Outlet />
        </main>
        <Footer />
      </>
    );
  };
  function Main() {
    return (
      <>
        {token ? <Home /> : <Login />}
      </>
    )
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/playlist" element={<Playlists token={token} />} />
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
