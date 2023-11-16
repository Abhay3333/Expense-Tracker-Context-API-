import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction2 from "./Transaction2";
const Transaction = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction2 transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};

export default Transaction;
