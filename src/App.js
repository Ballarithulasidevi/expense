import { useState } from 'react';
import './App.css';
import { makeStyles, Typography ,Box} from '@material-ui/core';
import Balance from './Components/Balance';
import NewTransactions from './Components/NewTransactions';
import ExpenseCard from './Components/ExpenseCard';
import Transactions from './Components/Transactions';

const useStyle = makeStyles({
  header: {
    color:'blue',
    fontSize: 35,
    margin:'10px 0',
    textTransform:'uppercase',
    textAlign: 'center'
  },
  component: {
    background:'#FFF',
    width:800,
    marginLeft:400,
    padding:10,
    borderRadius:20,
    display:'flex',
    '& > *': {
      width: '50%',
      padding: 10,
      height: '70vh'
    }
  }
})


function App() {
  const classes = useStyle();

  const[transactions , setTransaction] = useState([
    { id: 1, text: 'Sandwich' , amount: -20 },
    { id: 2, text: 'Salary', amount: 5000},
    { id: 3, text:'Book', amount: -100 },
    { id: 4, text:'Bonus' , amount: 1500},
  ]);

  const deleteTransaction = (id) => {
    setTransaction(transactions.filter(transaction => transaction.id !== id));
  }
  const addTransaction = (transaction) => {
     console.log(transaction);
    setTransaction(transactions => [transaction, ...transactions]);
  }
  

  return (
    
    <div className="App">
     <Typography className={classes.header}>Expense Tracker</Typography> 
       <Box className={classes.component}>
         <Box>
         <Balance transactions={transactions} />
         <ExpenseCard transactions={transactions} />
         <NewTransactions addTransaction = {addTransaction} />
         </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction} />
        </Box>
       </Box>
    </div>
  );
}

export default App;

