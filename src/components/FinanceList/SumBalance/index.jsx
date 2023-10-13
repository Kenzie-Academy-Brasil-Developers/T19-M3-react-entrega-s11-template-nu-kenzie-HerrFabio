export const SumBalance = ({financeInfo}) => {
    // console.log(financeInfo.reduce)
    const totalFinance = financeInfo.reduce ((prevAmount, balance) => {
        
        return prevAmount + balance.amount
    }, 0);
    return (
        <div>
            {totalFinance}
        </div>       
    );
}