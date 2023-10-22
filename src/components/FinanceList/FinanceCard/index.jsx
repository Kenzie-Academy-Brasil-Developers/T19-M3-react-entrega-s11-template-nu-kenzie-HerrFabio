import styles from "./style.module.scss";

export const FinanceCard = ({ description, amount, selectedOption, id, deleteCard }) => {
    
    const formattedAmount = parseFloat(amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    
     return ( 
 
        <div className={`${styles.cardBox} ${selectedOption === "Entrada" ? styles.green : styles.grey}`}>
            <h2 className="title three">{description}</h2>

            <div>
                {selectedOption}
            </div>

            <div>
                {formattedAmount}
            </div>

            <button className="btn small" onClick={() => deleteCard(id)}>Excluir</button>

        </div>

    );
};