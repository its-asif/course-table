import'./Table.css';

const Table = ({ tableHeading, tableData, visibleColumns, toggleColumnVisibility}) => {
    return (
        <div>
            <div className="table">

{/* --------------------------------------------------------------------------------- */}

                {/* Table Header */}
                <div className="table-row">
                {tableHeading.map((item, index) => (
                    visibleColumns[item] && // if visible then show
                    
                    <div key={index} className="table-col table-heading">
                        <div className='rowData'>{item}</div>
                    </div>
                ))}
                </div>
                
{/* --------------------------------------------------------------------------------- */}

                {/* Table Data - map */}
                {tableData.map((row, rowIndex) => (
                    <div key={rowIndex} className="table-row">
                        {tableHeading.map((col, colIndex) => (
                            visibleColumns[col] && // if visible then show
                            <div key={colIndex} className={`table-col `}>
                                <div className={`${ col=="Action" ? 'actionBtn' : 'rowData'}`}>
                                    {row[col]}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;