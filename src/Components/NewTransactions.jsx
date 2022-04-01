import { useState } from "react";
import { Typography, Box , makeStyles , TextField, Button } from "@material-ui/core";

const useStyle = makeStyles({
    container: {
        display:'flex',
        flexDirection:'column',
        '& > *' : {
            marginTop: 30
        }
    },
    button: {
        background:"#445A6F",
        color:'#FFF'
    }
})
const NewTransactions= ({addTransaction}) => {
    const classes=useStyle();
    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);

    const newTransaction = () => {
        const transaction = {
            id: Math.floor(Math.random() * 10000),
            text: text,
            amount:  +amount
        }
        addTransaction(transaction);
    }

    return (
        <Box className={classes.container}>
        <Typography variant="h6">NewTransactions</Typography>
        <TextField  label="Enter Expense" onChange = {(e) => setText(e.target.value)} />
        <TextField label="Total Amount" onChange = {(e) => setAmount(e.target.value)} />
        <Button variant="contained" onClick={newTransaction} className={classes.button}>Add New Transactions</Button>
        </Box>
    )

    
}
export default NewTransactions;