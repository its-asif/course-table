import { useState } from 'react'
import './App.css'
import MyTable from './MyTable';

function App() {

  // states
  const tableHeading = [ "Title", "Category", "Price", "Date", "Author", "Status", "Action" ]
  const [tableData, setTableData] = useState([
    {
      "Title": "Example Title 1",
      "Category": "Example Category 1",
      "Price": 10.99,
      "Date": "2024-02-22",
      "Author": "John Doe",
      "Status": "Active",
      "Action": "Edit"
    },
    {
      "Title": "Example Title 2",
      "Category": "Example Category 2",
      "Price": 19.99,
      "Date": "2024-02-21",
      "Author": "Jane Smith",
      "Status": "Inactive",
      "Action": "Delete"
    },
  ]);

  const [visibleColumns, setVisibleColumns] = useState(
    tableHeading.reduce((acc, col) => { 
      // console.log('acc:', acc, 'col:', col);
      acc[col] = true; // initially all columns are visible 
                      //  acc[col] = false-> Initially, all columns are hidden
      return acc;
    }, {})
  );

  // console.log('visibleColumns:', visibleColumns);


  // toggle the visibility of columns
  const toggleColumnVisibility = (columnName) => {
    setVisibleColumns({
      ...visibleColumns,
      [columnName]: !visibleColumns[columnName]
    });
  };

  return (
    <>

      <h1 className='pageTitle'>Courses</h1>

      {/* Dropdown - columns */}
        <div className='dropdown-container'>
          <div className="dropdown">


            {/* dropdown button */}
            <button className="dropbtn">Columns</button>


            {/* dropdown content */}
            <div className="dropdown-content">
              {tableHeading.map((item, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    checked={visibleColumns[item]}
                    onChange={() => toggleColumnVisibility(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>


        {/* Table */}
        <MyTable 
          tableHeading={tableHeading} 
          tableData={tableData} 
          visibleColumns={visibleColumns}
          toggleColumnVisibility={toggleColumnVisibility}
        />

      
    </>
  )
}

export default App
