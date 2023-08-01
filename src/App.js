import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [itemList, setItemList] = useState([]);
  const [cartShows, setCartShows] = useState(false);

  const dataHandler = (input) => {
    setItemList((prevState) => {
      return [...prevState, input];
    });
  };

  const hideCarthandler = () => {
    setCartShows(false);
  };
  const showCarthandler = () => {
    setCartShows(true);
  };

  return (
    <BrowserRouter>
      <Header onShow={showCarthandler}></Header>
      <Routes>
        <Route
          path="/"
          element={<Home itemlist={itemList} onSaveData={dataHandler} />}
        ></Route>
        <Route
          path="/cart"
          element={cartShows && <Cart onClose={hideCarthandler} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
