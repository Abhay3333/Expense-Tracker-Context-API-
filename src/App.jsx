import React from "react";
import Navbar from "./Components/Navbar";
import Balance from "./Components/Balance";
import "./App.css";
import IncomeExpenses from "./Components/IncomeExpenses";
import Transaction from "./Components/Transaction";
import AddTransaction from "./Components/AddTransaction";

import { GlobalProvider } from "./Context/GlobalState";
const App = () => {
  return (
    <GlobalProvider>
      <Navbar />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transaction />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
