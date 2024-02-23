import './addData.css';


const AddData = ({tableData, setTableData, tableHeading}) => {


    // handle submit
    const handleSubmit= (e) =>{
        e.preventDefault();

        const newCourse = {
            id: tableData.length + 1,
            Title : e.target.title.value,
            Category : e.target.category.value,
            Price : e.target.price.value,
            Date : e.target.date.value,
            Author: e.target.author.value,
            Status: e.target.status.value,
        }
        
        setTableData([...tableData, newCourse]);
        e.target.reset();
    }


    return (
        <div className='course-container'>
            <h1 className='addData-title'>Add Courses</h1>

            {/* form */}
            <form 
                className='formContainer'
                onSubmit={handleSubmit}
            >
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" required/>
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" name="category" required/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" required/>
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" name="date" required/>

                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author" required/>
                </div>
                <div>
                    <label>Status:</label>
                    <select name="status" required>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                <div className='btn-container'>
                    <button type="submit" className='submitBtn'>Add</button>
                </div>
                
            </form>

        </div>
    );
};

export default AddData;