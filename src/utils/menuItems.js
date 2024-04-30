import {dashboard, expenses, transactions, trend,dollar,wallet} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'My wallet',
        icon: wallet,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Expenses",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Transactions",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Other",
        icon: dollar,
        link: "/dashboard",
    },
]