

import ExpenseForm from "./components/ExpenseForm"
import ExpenseTable from "./components/ExpenseTable"
import "./style.css"

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseTable />
    </div>
  )
}

export default App;
