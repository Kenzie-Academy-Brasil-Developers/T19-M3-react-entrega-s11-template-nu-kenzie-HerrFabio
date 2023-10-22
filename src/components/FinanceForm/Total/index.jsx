import { SumBalance } from "../../FinanceList/SumBalance/index.jsx";
import styles from "./style.module.scss"

export const Total = ({ financeInfo }) => {
    return (
        financeInfo.length > 0 ? (

            <div className={styles.totalBox}>

                <h3>Valor total:</h3>
                
                
                <SumBalance financeInfo={financeInfo} />
                

                <p>O valor se refere ao saldo</p>

            </div>
        ) : (
            <div></div>
        )
    );
};
