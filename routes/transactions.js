const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome, editIncome } = require('../controllers/income');

const router = require('express').Router();

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .put('/edit-income/:id', editIncome) // Utilisez la méthode put() pour les mises à jour
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router;
