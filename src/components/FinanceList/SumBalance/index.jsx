import React from "react";

export const SumBalance = ({ financeInfo }) => {
  const totalFinance = financeInfo.reduce((prevAmount, balance) => {
    const balanceAmount = parseFloat(balance.amount);

    // Usando operador ternário para verificar a opção e subtrair ou somar
    const updatedAmount =
      balance.selectedOption === "Despesa"
        ? prevAmount - balanceAmount
        : prevAmount + balanceAmount;

    return updatedAmount;
  }, 0);

  const roundedTotal = totalFinance.toFixed(2);

  const formattedTotal = parseFloat(roundedTotal).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (<div>{formattedTotal}</div>);
};



