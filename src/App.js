import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Browse from "./components/sidebar/sidebarPages/Browse";
import Discover from "./components/sidebar/sidebarPages/Discover";
import Playlists from "./components/sidebar/sidebarPages/Playlist";
import Likes from "./components/sidebar/sidebarPages/Likes";
import "./App.css";
import Mainpage from "./components/Main/Mainpage";
import { ToastContainer } from "react-toastify";



function App() {

  const [visible, setVisible] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

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
          {/* <Sidebar visible={visible} closeSidebar={closeSidebar} side={side} /> */}
          <Outlet />
        </main>
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Mainpage />} />
        <Route path="/home" element={<Mainpage />} />
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
      <ToastContainer position="bottom-center" autoClose={2000} pauseOnHover={false} theme="light" closeButton={false} />
      {/* <h1>hello word</h1> */}
    </div>
  );
}

export default App;
