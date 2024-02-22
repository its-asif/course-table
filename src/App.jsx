import { useState } from 'react'
import './App.css'
import MyTable from './myTable/MyTable';
import AddData from './addData/AddData';

function App() {

  // states
  const tableHeading = [ "Title", "Category", "Price", "Date", "Author", "Status", "Action" ]
  const [tableData, setTableData] = useState([]);

  const [visibleColumns, setVisibleColumns] = useState(
    tableHeading.reduce((acc, col) => { 
      // console.log('acc:', acc, 'col:', col);
      acc[col] = true; // initially all columns are visible 
                      //  acc[col] = false-> Initially, all columns are hidden
      return acc;
    }, {})
  );

  // console.log('visibleColumns:', visibleColumns);


  // toggle - visibility of columns
  const toggleColumnVisibility = (columnName) => {
    setVisibleColumns({
      ...visibleColumns,
      [columnName]: !visibleColumns[columnName]
    });
  };

  return (
    <>

      <h1 className='pageTitle'>Courses</h1>


            {/* add data */}
            <AddData 
              tableData={tableData} 
              setTableData={setTableData} 
              tableHeading={tableHeading}
            />



{/* -------------------------------------------------------------------------- */}


    <div className='container2'>
        
        {/* Dropdown - columns */}
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



{/* -------------------------------------------------------------------------------- */}


      <div className='container'>


        {/* Table */}
        <MyTable 
          tableHeading={tableHeading} 
          tableData={tableData} 
          visibleColumns={visibleColumns}
          toggleColumnVisibility={toggleColumnVisibility}
        />
    </div>
      
    </>
  )
}

export default App
