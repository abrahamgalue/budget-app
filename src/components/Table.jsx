// component import
import ExpenseItem from './ExpenseItem'

const Table = ({ expenses }) => {
  const tableHeaders = ['Name', 'Amount', 'Date', 'Budget', '']

  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
