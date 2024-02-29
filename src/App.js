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

function App() {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    if (window.innerWidth <= 900) {
      setVisible(true)
    }
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  }

  const [side, setSide] = useState({ left: '0' });
  const opensidebar = () => {
    if (window.innerWidth <= 900) {
      setSide({ left: '0' });

    }
  };
  const closeSidebar = () => {
    if (window.innerWidth <= 900) {
      setSide({ left: '-130%' });

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
          {/* <Sidebar visible={visible} closeSidebar={closeSidebar} /> */}
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
        <Home />
      </>
    )
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/playlist" element={<Playlists />} />
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
