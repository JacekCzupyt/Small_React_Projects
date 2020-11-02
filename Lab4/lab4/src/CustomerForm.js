import React, {useState} from 'react';
import AddressStep from './FormSteps/AddressStep';
import NameStep from "./FormSteps/NameStep";
import SummaryStep from './FormSteps/SummaryStep';

function CustomerForm(){

    //temporarly changed for developement, change to 0 for final version
    const [ind, setInd] = useState(0);
    const [values, setValues] = useState({});
    const [ReachedSummary, SetReachedSummary] = useState(false);
    

    function MoveToNextStep(result, stepName, newind=-1) {
        let tempVal = Object.assign({}, values);
        tempVal[stepName] = Object.assign({}, result);
        setValues(tempVal);
        if(newind===-1){newind = ind+1;}
        if(newind==2){
            SetReachedSummary(true);
        }
        setInd(newind)
    }

    function MoveToSelectedStep(index){
        setInd(index);
    }

    const FormSteps = [ <NameStep MoveNextHook={MoveToNextStep} data={values.Name} ReachedSummary={ReachedSummary}/>, 
                        <AddressStep MoveNextHook={MoveToNextStep} data={values.Address} MoveWithoutSaving={MoveToSelectedStep}/>, 
                        <SummaryStep data={values} MoveCallback={MoveToSelectedStep}/>]

    return(
        <div>
            {FormSteps[ind]}
        </div>
    )
}

export default CustomerForm;