export const SumBalance = ({ financeInfo }) => {
    const totalFinance = financeInfo.reduce((prevAmount, balance) => {
      const balanceAmount = parseFloat(balance.amount); 
      return prevAmount + balanceAmount;
    }, 0);
  

    const roundedTotal = totalFinance.toFixed(2);
  

    const formattedTotal = parseFloat(roundedTotal).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  
    return (
      <div>
        {formattedTotal}
      </div>
    );
  }
  