import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { Header } from "./components/common/Header";
import { menus } from "./menus";

const menu =
 menus.find(x => x.pathname === window.location.pathname) ||
 menus.find(x => x.title === "Home");
console.log(menu.component);

const App = () => {
 return (
  <div className="container-fluid">
   <Header />
   <Suspense fallback={<h1></h1>}>
    <Route
     exact
     path={menu.pathname}
     component={lazy(() => menu.component())}
    ></Route>
   </Suspense>
  </div>
 );
};

export { App };
