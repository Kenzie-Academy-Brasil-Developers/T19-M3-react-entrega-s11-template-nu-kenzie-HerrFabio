import {FinanceCard} from "./FinanceCard/index.jsx"

export const FinanceList = ({financeInfo, deleteCard}) => {
    

    return (
        <section>
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
        </section>
    );
}