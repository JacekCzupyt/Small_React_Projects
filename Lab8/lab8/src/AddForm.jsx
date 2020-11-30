import react from 'react'


function AddForm(props){


    return(
        <div>
            <input type="checkbox" id="isActive" name="isActive">Is Active</input>
            <input type="text" name="age">Age</input>
            <input type="text" name="name">Name</input>
            <input type="text" name="company">Company</input>
            <input type="text" name="email">Email</input>
        </div>
    )
}

export default AddForm;

