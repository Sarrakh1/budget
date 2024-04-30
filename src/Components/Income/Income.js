import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';



function Income() {
    const { incomes, getIncomes, deleteIncome, totalIncome, editIncome } = useGlobalContext();

    useEffect(() =>{
        getIncomes();
    }, []);

    const handleEditIncome = (id, newData) => {
        // Appeler la fonction d'édition du contexte global avec l'ID du revenu et les nouvelles données
        editIncome(id, newData);
    };

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span className='aa'>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => (
                            <IncomeItem
                                key={income._id}
                                {...income}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                                editItem={handleEditIncome} // Passer la fonction handleEditIncome pour l'édition
                            />
                        ))}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}



const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        // box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            font-color:white;
            color: var(--color-green);
        }
        
    }
    .income-content{
        display: flex;
        gap: 2rem;
        font-color:white;
        .incomes{
            flex: 1;
        }
    }
`;


export default Income