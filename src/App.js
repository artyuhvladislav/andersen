import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import UseCallBackAndMemo from "./components/UseCallBackAndMemo";
import UseContextTheme from "./components/UseContextTheme";
import UseReducer from "./components/UseReducer";
import UseStateAndEffect from "./components/UseStateAndEffect";
import WithLoading from "./hoc/WithLoadingHOC";
import useWindowsWidth from "./hooks/useWIndowWidth";
import DataProvider from "./renderProp/DataProvider";
import FirstMarkup from "./renderProp/FirstMarkup";
import SecondMarkup from "./renderProp/SecondMarkup";

export const Context = React.createContext("dark");

function App() {
  const onSmallScreen = useWindowsWidth();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  const WithLoadingHeader = WithLoading(Header, isLoading);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/hoc">HOC</Link>
            </li>
            <li>
              <Link to="/renderProp">renderProp</Link>
            </li>

            <li>
              <ul>
                <li>
                  <Link to="/hooks/customHook">useContext</Link>
                </li>
                <li>
                  <Link to="/hooks/useContext">useContext</Link>
                </li>
                <li>
                  <Link to="/hooks/useCallBackMemo">useMemoCallback</Link>
                </li>
                <li>
                  <Link to="/hooks/stateEffect">useStateEffect</Link>
                </li>
                <li>
                  <Link to="/hooks/reducer">useReducer</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/hoc">
            <WithLoadingHeader />
          </Route>
          <Route path="/renderProp">
            <>
              <DataProvider
                text="First markup"
                renderContent={(text) => <FirstMarkup text={text} />}
              />
              <DataProvider
                text="Second markup"
                renderContent={(text) => <SecondMarkup text={text} />}
              />
            </>
          </Route>
          <Route path="/hooks/useContext">
            <Context.Provider value="dark">
              <UseContextTheme />
            </Context.Provider>
          </Route>
          <Route path="/hooks/customHook">
            {onSmallScreen ? "small version" : "large version"}
          </Route>
          <Route path="/hooks/useCallBackMemo">
            <UseCallBackAndMemo />
          </Route>
          <Route path="/hooks/stateEffect">
            <UseStateAndEffect />
          </Route>
          <Route path="/hooks/reducer">
            <UseReducer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
