import { SumBalance } from "../../FinanceList/SumBalance/index.jsx";

export const Total = ({financeInfo}) => {
    return (
        <div>
            <h3>Valor total:</h3> <SumBalance  financeInfo={financeInfo}/>
            <p>O valor se refere ao saldo</p>
        </div>
        
    );
};