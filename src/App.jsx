import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AddToCardPage from "./pages/addToCard";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="add-to-card" element={<AddToCardPage />} />
      </Routes>
    </>
  );
}

export default App;
