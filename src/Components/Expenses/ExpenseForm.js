import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';
import Select from 'react-select';
import {
  FaGraduationCap,
  FaShoppingCart,
  FaHeartbeat,
  FaFilm,
  FaPizzaSlice,
  FaTshirt,
  FaPlane,
  FaQuestionCircle,
} from 'react-icons/fa';

// Options avec icônes
const options = [
  { value: 'education', label: 'Education', icon: <FaGraduationCap /> },
  { value: 'groceries', label: 'Groceries', icon: <FaShoppingCart /> },
  { value: 'health', label: 'Health', icon: <FaHeartbeat /> },
  { value: 'subscriptions', label: 'Subscriptions', icon: <FaFilm /> },
  { value: 'takeaways', label: 'Takeaways', icon: <FaPizzaSlice /> },
  { value: 'clothing', label: 'Clothing', icon: <FaTshirt /> },
  { value: 'travelling', label: 'Travelling', icon: <FaPlane /> },
  { value: 'other', label: 'Other', icon: <FaQuestionCircle /> },
];

// Style pour l'option personnalisée
const StyledCustomOption = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #ccc;

  span {
    margin-left: 8px; // Ajoute de l'espace entre l'icône et le texte
  }
`;

// Composant personnalisé pour Select
const CustomOption = (props) => (
  <StyledCustomOption {...props.innerProps}>
    {props.data.icon}
    <span>{props.data.label}</span>
  </StyledCustomOption>
);

function ExpenseForm() {
  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  const { title, amount, date, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    });
  };

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
      {error && <p className='error'>{error}</p>}
      <div className='input-control'>
        <input
          type='text'
          value={title}
          name='title'
          placeholder='Expense Title'
          onChange={handleInput('title')}
        />
      </div>
      <div className='input-control'>
        <input
          type='text'
          name='amount'
          placeholder='Expense Amount'
          value={amount}
          onChange={handleInput('amount')}
        />
      </div>
      <div className='input-control'>
        <DatePicker
          id='date'
          placeholderText='Enter a Date'
          selected={date}
          dateFormat='dd/MM/yyyy'
          minDate={new Date()} // Ne permet pas les dates antérieures à aujourd'hui
          onChange={(selectedDate) => setInputState({ ...inputState, date: selectedDate })}
         
        />
      </div>
      <div className='selects input-control'>
        <Select
          options={options}
          onChange={(option) => setInputState({ ...inputState, category: option.value })}
          components={{ Option: CustomOption }}
          placeholder='Select Category'
        />
      </div>
      <div className='input-control'>
        <textarea
          name='description'
          placeholder='Add a Reference'
          value={description}
          id='description'
          cols='30'
          rows='4'
          onChange={handleInput('description')}
        ></textarea>
      </div>
      <div className='submit-btn'>
        <Button
          name='Add Expense'
          icon={plus}
          bPad='.8rem 1.6rem'
          bRad='30px'
          bg='white'
          color='black'
        />
      </div>
    </ExpenseFormStyled>
  );
}


const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
   
    input, textarea, select {
        font-family: 'Times New Roman', serif; /* Correction du nom de la police */
        font-size: inherit;
        padding: 0.5rem 1rem; /* Unifier le remplissage */
        color: rgba(34, 34, 96, 1); /* Couleur de texte cohérente */
        background-color: white; /* Couleur de fond commune */
        border: 1px solid rgba(34, 34, 96, 0.5); /* Bordures similaires */
        border-radius: 15px; /* Ajout d'une bordure arrondie */
        transition: all 0.3s ease; /* Pour une transition fluide */
    }

    .input-control{
        input{
            width: 100%;
            color:black;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        grap:2erm 1erm%;
        select{
            color: black;
            width: 100%;
            
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);            }
        }
    }
    

    .submit-btn {
        display: flex;
        justify-content: center; /* Centrer horizontalement */
        align-items: center; /* Centrer verticalement */
        padding-top: 1rem; /* Ajout d'espace pour la séparation */
        
        button {
            box-shadow: white;
            &:hover {
                background: var(--color-green) !important;
            }
        }
`;
export default ExpenseForm 
