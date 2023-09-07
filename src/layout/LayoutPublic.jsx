import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="py-5">
          {navigation.state === "loading" && (
            <div className="alert alert-info my-5">Loading</div>
          )}
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
