import React, {useState} from 'react';
import AddressStep from './FormSteps/AddressStep';
import NameStep from "./FormSteps/NameStep";
import SummaryStep from './FormSteps/SummaryStep';

function CustomerForm(){

    const [ind, setInd] = useState(0);
    

    function MoveToNextStep() {
        setInd(ind+1);
    }

    const FormSteps = [<NameStep MoveNextHook={MoveToNextStep}/>, <AddressStep MoveNextHook={MoveToNextStep}/>, <SummaryStep/>]

    return(
        <div>
            {FormSteps[ind]}
            {ind}
        </div>
    )
}

export default CustomerForm;