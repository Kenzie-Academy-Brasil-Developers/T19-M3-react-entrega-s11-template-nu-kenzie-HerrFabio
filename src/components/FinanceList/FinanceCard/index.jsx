import styles from "./style.module.scss";

export const FinanceCard = ({ description, amount, selectedOption, id, deleteCard }) => {
    
    const formattedAmount = parseFloat(amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    
     return ( 
 
        <div className={styles.cardBox}>
            <h2 className="title three">{description}</h2>

            <div className="option">
                {selectedOption}
            </div>

            <div className="value">
                {formattedAmount}
            </div>

            <button className="btn small" onClick={() => deleteCard(id)}>Excluir</button>

        </div>

    );
};