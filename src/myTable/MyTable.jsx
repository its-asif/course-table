import { useState, useEffect } from 'react';
import './Table.css';

const Table = ({ tableHeading, tableData, visibleColumns, setTableData }) => {

    const [editIndex, setEditIndex] = useState(-1);

    const visibleColumnCount = Object.values(visibleColumns).filter(Boolean).length;

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // get the new data
        const newCourse = {
            Title: e.target.title.value,
            Category: e.target.category.value,
            Price: e.target.price.value,
            Date: e.target.date.value,
            Author: e.target.author.value,
            Status: e.target.status.value,
        }

        // update the table data
        tableData[editIndex] = newCourse;
        setTableData([...tableData]);

        e.target.reset();   // reset the form
        document.querySelector('.edit-table').style.display = 'none'; // hide the edit form
    }

    
    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.classList.contains('delete-btn')) {
                
                // Handle delete button click
                // const rowIndex = e.target.id;
                // console.log(rowIndex);
                // console.log(tableData);
                // tableData.splice(rowIndex, 1);
                // console.log(tableData);
                // setTableData([...tableData]);
                
                
            } else if (e.target.classList.contains('edit-btn')) {
                // Handle edit button click
                const rowIndex = e.target.id;
                document.querySelector('.edit-table').style.display = 'block'; // show the edit form
                setEditIndex(rowIndex); // set the index of the row to be edited

                // get the row data
                const row = e.target.parentElement.parentElement.parentElement;
                console.log('row:', row);
                const cols = row.querySelectorAll('.rowData');
                const form = document.querySelector('.edit-table form');
                form.title.value = cols[0].textContent; // set the form values
                form.category.value = cols[1].textContent;
                form.price.value = cols[2].textContent;
                form.date.value = cols[3].textContent;
                form.author.value = cols[4].textContent;
                form.status.value = cols[5].textContent;
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []); 



    
    return (
        <div>
            <div className="edit-table">
                <h2>Edit Table Data</h2>


                {/* Edit form */}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder='Title' required />
                    <input type="text" name="category" placeholder='Category' required />
                    <input type="number" name="price" placeholder='Price' required />
                    <input type="date" name="date" placeholder='Date' required />
                    <input type="text" name="author" placeholder='Author' required />
                    <select name="status" required>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>

{/* _____________________________________________________________________________________________________________________________________ */}


            {/* Table */}
            <div className="table" style={{ "gridTemplateColumns": `repeat(${visibleColumnCount}, minmax(150px, 1fr))` }} >
                {/* Table Header */}
                <div className="table-row">
                    {tableHeading.map((item, index) => (
                        visibleColumns[item] && // if visible then show
                        <div key={index} className="table-col table-heading">
                            <div className='rowData'>{item}</div>
                        </div>
                    ))}
                </div>

{/* ------------------------------------------------------------------------------------------------------- */}

                {/* Table Data - map */}
                {tableData.map((row, rowIndex) => (
                    <div key={rowIndex} className="table-row">
                        {tableHeading.map((col, colIndex) => (
                            visibleColumns[col] && // if visible then show
                            <div key={colIndex} className={`table-col `}>
                                    {col === "Action" ? (
                                            <div className='button-container'>
                                                <button className="actionBtn edit-btn" id={rowIndex}>Edit</button>
                                                {/* <button className="actionBtn delete-btn" id={rowIndex}>Delete</button> */}
                                            </div>
                                        ) : (
                                            <div className="rowData" id={rowIndex}>
                                                {
                                                    row[col]
                                                }
                                            </div>
                                        )
                                    }
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
