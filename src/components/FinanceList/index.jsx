import {FinanceCard} from "./FinanceCard/index.jsx"
import styles from "./style.module.scss"

export const FinanceList = ({financeInfo, deleteCard}) => {
    

    return (
        
            <div className={styles.listBox}>

            <h3 className="title three">Resumo financeiro</h3>
            {financeInfo.length > 0 ?(
                
                <ul>
                {financeInfo.map ((balance) => {
                    
                    const {description, amount, selectedOption, id} = balance;
                    
                    return (<FinanceCard key={id} id={id}
                        description={description} 
                        amount={amount} 
                        selectedOption={selectedOption} 
                        deleteCard={deleteCard}/>);
                        
                    } )}
                
            </ul>
            ) :
            <h2 className="title two">Você não possui nenhum lançamento</h2>
        }
        </div>
        
    );
}