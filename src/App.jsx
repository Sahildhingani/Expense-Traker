import React,{ useEffect, useState } from 'react'
import Bar from './Component/Comonenst1'
function App() {
  let [income,setincome]=useState(0);
  let [exp,setexp]=useState(0);
  let [text,settext]=useState('');
  let [amount,setamount]=useState('');
  // local storage 
  let [storage,setstorage]=useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem('store');
    if (storedData) {
      setstorage(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(storage));
  }, [storage]);
  function onclickHandler(){
    const transactionAmount = Number(amount);
    const newTransaction = { text:text,amount: transactionAmount };

    if (transactionAmount >= 0) {
      setincome(income + transactionAmount);
    } else {
      setexp(exp + transactionAmount);
    }

    setstorage([...storage, newTransaction]);
    settext('');
    setamount('');
  }

  return (
    < >
  <div className='bg-slate-900 h-screen w-screen flex flex-col justify-center items-center'>
    <h1 className='text-white font-bold text-2xl mb-4'>Expense Tracker</h1>
    <div className='bg-white h-128 w-80' >

      {/* // balance div */}
      <div className='ml-2'>
        <h3 className='font-bold'>Your Balance</h3>
        <h1 className='font-bold text-3xl'> ${income+exp}</h1>
      </div>

      {/* // income and expense Block */}
      <div className='flex gap-1 ml-3 mt-5'>
      <div className='border-2 shadow-lg h-20 w-36 flex flex-col justify-center items-center'>
        <h1 className='font-bold'>INCOME</h1>
        <h1 className='text-green-800 font-bold text-lg'>${income}</h1>
        </div>
        <div className='border-2  shadow-lg h-20 w-36 flex flex-col justify-center items-center'>
        <h1 className='font-bold'>EXPENSE</h1>
        <h1 className='text-red-800 font-bold text-lg'>${exp}</h1>
        </div>
      </div>

       {/* History Box */}
       
       <div className='w-72 ml-3 mt-2 h-48 flex flex-col '>
       <h1 className='font-bold text-black text-lg'>History</h1>
          <ul className=' flex flex-col overflow-auto'>
            {storage.map((item, index) => (
              <div key={index} className="h-8 flex justify-between">
                <h1 className="text-black font-bold">{item.text}</h1>
                <h1 className={`text-black font-bold ${item.amount >= 0 ? 'text-green-800' : 'text-red-800'}`}>
                  {item.amount >= 0 ? `+${item.amount}` : `${item.amount}`}
                </h1>
              </div>
            ))}
          </ul>
        </div>

      {/* addition box */}
      <div >
        <h1 className='text-black font-bold ml-2'>Add New Transaction</h1>
        <div className='flex gap-8 ml-3 mt-1'>
        <div>
          <h1 className='font-bold'>Text</h1>
          <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}}  placeholder='Enter Text...' className=' pl-2 border-2 border-black w-32'  />
        </div>
        <div>
          <h1 className='font-bold'>Amount(With Sign)</h1>
          <input type="number" value={amount} onChange={(e)=>{setamount(e.target.value)}}  placeholder='Enter Amount...' className=' pl-2 border-2 border-black w-32'  />
        </div>
        </div>
      </div>
      <button onClick={onclickHandler}  className=' ml-14 mt-5 border-2 border-black w-44 h-8 rounded bg-blue-800 hover:bg-blue-950 text-black text-lg font-bold'>Add Transaction</button>
    </div>
  </div>
    </>
  )
}


export default App
