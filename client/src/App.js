import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
// import SignIn from "./Components/Pages/SignIn";
// import Grocery from "./Components/Pages/Grocery";
// import Mobiles from "./Components/Pages/Mobiles";
// import Appliances from "./Components/Pages/Appliances";
// import Travel from "./Components/Pages/Travel";
import PageNotFound from "./Components/Pages/404Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            {/* <Route path="/grocery" element={<Grocery />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/appliances" element={<Appliances />} />
            <Route path="/travel" element={<Travel />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
