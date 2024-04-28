import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/1_MainPages/Home";
// import SignIn from "./Pages/SignIn";
// import Grocery from "./Pages/Grocery";
// import Mobiles from "./Pages/Mobiles";
// import Appliances from "./Pages/Appliances";
// import Travel from "./Pages/Travel";
import PageNotFound from "./Common/404Error";

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
