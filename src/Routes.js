import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectPage from "./pages/ProjectPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/contact">
        <ContactPage />
      </Route>
      <Route exact path="/about-me">
        <AboutMePage />
      </Route>
      <Route exact path="/projects">
        <ProjectPage />
      </Route>
    </Switch>
  );
};

export default Routes;
