import { useState } from "react";
import { LandingPages } from "../src/pages/LandingPages/index.jsx";

function App() {
  const [financeInfo, setFinanceInfo] = useState ([]);

  const addFinanceInfo = (description, amount, selectedOption) => {
    const id = crypto.randomUUID();
    const newFinance = {description, amount, selectedOption, id};

    setFinanceInfo([...financeInfo, newFinance]);
    
  };

  const deleteCard = (id) =>{
    const cardFiltered = financeInfo.filter((balance) => {
      if(balance.id !== id){
        return balance;
      };
    });
    setFinanceInfo(cardFiltered);
  };


  return (
    <>
            
      <LandingPages financeInfo={financeInfo} addFinanceInfo={addFinanceInfo} deleteCard={deleteCard}/>
 
    </>
  );
};

export default App;
