import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="py-5">
          <Outlet />
        </div>
      </main>
      <footer className="bg-light">
        <div className="container py-4 text-center">Footer</div>
      </footer>
    </>
  );
};

export default LayoutPublic;
