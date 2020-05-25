import React, { useEffect } from "react";
import { WOW } from "wowjs";
import Navigation from "./Navigation";
function App() {
  useEffect(() => {
    new WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
