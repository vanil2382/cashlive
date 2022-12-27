
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Accounts.css';
import Table from '../components/Table';

function AccountsPage() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]

  return (
    <div className="App">
      <h1>Dynamic Table</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}
  export default AccountsPage;