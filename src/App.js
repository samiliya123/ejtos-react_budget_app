import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                 
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                     <Budget />     

                        {/* Add Remaining component here under */} 
                    
                    <div className='col-sm'>
                        <Remaining />
                    </div>       

                        {/* Add ExpenseTotal component here under */}  
                    
                    <div className='col-sm'>
                        <ExpenseTotal/>
                    </div>      
                       
                        {/* Add ExpenseList component here under */} 
                    <div className=''> 
                    <ExpenseList/>  
                    </div>     

                        {/* Add ExpenseItem component here under */} 
                    <div className=''>
                    <ExpenseItem/>      
                    </div> 

                        {/* Add AllocationForm component here under */}  
                    <div className=''>
                    <AllocationForm/>      
                    </div>

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
