import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import { Doughnut } from 'react-chartjs-2';

function Dashboard() {
    const {
        totalExpenses,
        incomes,
        expenses,
        totalIncome,
        totalBalance,
        getIncomes,
        getExpenses,
    } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    // Sample data for the donut chart
    const donutData = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                data: [totalIncome(), totalExpenses()],
                backgroundColor: ['#00ff00', '#ff0000'],
                hoverBackgroundColor: ['#00cc00', '#cc0000'],
            },
        ],
    };

    return (
        <DashboardStyled>
            <InnerLayout>
                <div className="stats-con">
                    <div className="chart-con">
                        <div className="amount-con">
                            <div className="income">
                                <h3>Total Income</h3>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>

                        <div className="main-chart-con">
                            <Chart />
                            <div className="donut-chart-con">
                                <h3>Income vs Expense</h3>
                                <Doughnut data={donutData} />
                            </div>
                        </div>

                        <div className="history-con">
                            <History />
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        p {
            color: white;
            font-size: 30px;
        }

        h2 {
            color: lightgray;
            font-size: 20px;
            height: 20px;
        }
        h3 {
            color: lightgray;
            font-size: 20px;
        }

        .chart-con {
            grid-column: 1/5;
            height: 300px;
            .amount-con {
                padding: 1rem;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 1rem;
                margin-top: 2rem;

                .income,
                .expense,
                .balance {
                    background: #262626;
                    color: white;
                    align-items: left;
                    border-radius: 20px;
                    padding: 1rem;
                    margin-top: -3rem;
                }
            }

            .main-chart-con {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .donut-chart-con {
                    width: 500px;
                    height: 300px;
                    background: #262626;
                    border-radius: 20px;
                    padding: 1rem;
                }
            }
        }

        .history-con {
            margin-top: 70px;
            h2 {
                color: white;
                margin: 1rem 0;
            }
        }
    }
`;

export default Dashboard;
