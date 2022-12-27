
import { useState} from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
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

export default App;

const cities = [
    {name:"London", temp:"50F", hum:"80"},
    {name:"Paris", temp:"50F", hum:"80"},
    {name:"Munich", temp:"50F", hum:"80"}
]

const Row = (props) => {
  const {name, temp, hum} = props
  return( <tr>
    <td>{name}</td>
    <td>{temp}</td>
    <td>{hum}</td>
  </tr>)
}

const Table = (props) => {
  const {data} = props
  console.log(data)
  return (<table>
    <tbody>
      {data.map(row => 
      <Row name = {row.name}
      temp = {row.temp}
      hum = {row.hum} />
      )}
    </tbody>
  </table>)
}

function AccountsPage() {
  // return <div> All Meetups Page</div>;
const [rows, setRows] = useState(cities)

    return (
      <div className="AccountsPage">
        <div> Table: Cities and Temperatures</div>
      <Table data = {rows} />
      </div>
      )
  }

export default AccountsPage;