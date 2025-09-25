import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import Ref from "../pages/RefPractice";
import Redux from "../pages/ReduxTest";
import BlackBoxCounter from "../test/unit/blackbox/BlackCounter";
import WhiteBoxCounter from "../test/unit/whitebox/WhiteCounter";
import TodoApp from "../test/integration/TodoApp";

const routes = [
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
  { path: "works", element: <Works /> },
  { path: "ref", element: <Ref /> },
  { path: "redux", element: <Redux /> },
  { path: "test/unit/blackbox/counter", element: <BlackBoxCounter /> },
  { path: "test/unit/whitebox/counter", element: <WhiteBoxCounter /> },
  { path: "test/integration/todoapp", element: <TodoApp /> },
];

export default routes;
