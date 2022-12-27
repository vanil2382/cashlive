import axios from 'axios';
import { useEffect, useState } from 'react';
import './Accounts.css';
import Table from '../components/Table';
// import { raw } from '../assets/AccountsData.txt'; // Relative path to your File
// console.log(raw)

function AccountsPage() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios.get('AccountsData.json')
  // axios('https://jsonplaceholder.typicode.com/users')
 //axios('https://cashlive-b2886-default-rtdb.firebaseio.com/meetups.json')
        .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

   const column = [
    { heading: 'Corp Name', value: 'name' },
    { heading: 'Virtual Account', value: 'vid' },
    { heading: 'Balance', value: 'balance' },
  ]

  return (
    <div className="App">
      <h1>Payament Accounts</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}
  export default AccountsPage;