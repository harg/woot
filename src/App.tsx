import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import HomePage from "./pages/home_page";
import PageA from "./pages/page_a";
import NotFoundPage from "./pages/404_page";

const items: MenuProps["items"] = [
  {
    label: "Woot",
    key: "/",
  },
  {
    label: "Page A",
    key: "/page_a",
  },
  {
    label: "Page B",
    key: "/page_b",
  },
  {
    label: "Page C",
    key: "/page_c",
  },
];

const App = () => {
  const [location, setLocation] = useLocation();
  const [current, setCurrent] = useState("");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    setLocation(e.key);
  };

  return (
    <div className="App">
      <Menu
        onClick={onClick}
        selectedKeys={[current, location]}
        mode="horizontal"
        items={items}
      />

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/page_a">
          <PageA />
        </Route>
        <Route path="/:anything*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
