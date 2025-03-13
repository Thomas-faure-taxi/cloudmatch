import React, { useState, useEffect, createContext } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import AddAnnonce from "./pages/AddAnnonce";

export const NavigationContext = createContext();

const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  const navigate = (url) => {
    window.history.pushState({}, "", url);
    window.dispatchEvent(new Event("popstate"));
    setCurrentPath(url);
  };

  let Component;
  const pathParts = currentPath.split("/");
  const id = pathParts[2];

  switch (currentPath) {
    case "/":
      Component = Home;
      break;
    case `/detail/${id}`:
      Component = () => <Detail id={id} />;
      break;
    case "/add-annonce":
      Component = AddAnnonce;
      break;
    default:
      Component = NotFound;
  }

  return (
    <NavigationContext.Provider value={navigate}>
      <div>
        <nav>
          <button onClick={() => navigate("/")}>Accueil</button>
          <button onClick={() => navigate("/add-annonce")}>Ajouter une annonce</button>
        </nav>
        <Component />
      </div>
    </NavigationContext.Provider>
  );
};

export default Router;
