import React, {useState} from 'react';
import AddressStep from './FormSteps/AddressStep';
import NameStep from "./FormSteps/NameStep";
import SummaryStep from './FormSteps/SummaryStep';

function CustomerForm(){

    //temporarly changed for developement, change to 0 for final version
    const [ind, setInd] = useState(0);
    const [values, setValues] = useState({});
    

    function MoveToNextStep(result, stepName) {
        let tempVal = Object.assign({}, values);
        console.log(tempVal);
        console.log(result);
        tempVal[stepName] = Object.assign({}, result);
        //console.log(stepName);
        console.log(tempVal);
        setValues(tempVal);
        setInd(ind+1);
        console.log(values);
    }

    const FormSteps = [<NameStep MoveNextHook={MoveToNextStep}/>, <AddressStep MoveNextHook={MoveToNextStep}/>, <SummaryStep data={values}/>]

    return(
        <div>
            {FormSteps[ind]}
        </div>
    )
}

export default CustomerForm;