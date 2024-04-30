import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';

function History() {
    const { transactionHistory } = useGlobalContext();

    // Ensure transactionHistory returns an array
    const history = transactionHistory();

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            <div className="history-items">
                {history.map((item) => {
                    const { _id, title, amount, type } = item;
                    return (
                        <div
                            key={_id}
                            className="history-item"
                            style={{
                                color: type === 'expense' ? 'red' : 'var(--color-green)',
                            }}
                        >
                            <p>{title}</p>
                            <p>
                                {type === 'expense'
                                    ? `-${Math.max(amount, 0)}`
                                    : `+${Math.max(amount, 0)}`}
                            </p>
                        </div>
                    );
                })}
            </div>
        </HistoryStyled>
    );
}

const HistoryStyled = styled.div`

    .history-items {
        display: flex;
        flex-direction: column; /* Ensures items stack vertically */
        gap: 1rem; /* Spacing between history items */
    }

    .history-item {
        display: flex;
        align-items: center; /* Center-aligns text vertically */
        justify-content: space-between; /* Ensures even space between title and amount */
        background-color: #353030;
        border: 2px solid #FFFFFF;
        padding: 1rem;
        border-radius: 10px; /* Adjusted border-radius */
    }
`;

export default History;
