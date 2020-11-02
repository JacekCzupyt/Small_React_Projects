import React, {useState} from 'react';
import AddressStep from './FormSteps/AddressStep';
import NameStep from "./FormSteps/NameStep";
import SummaryStep from './FormSteps/SummaryStep';

function CustomerForm(){

    //temporarly changed for developement, change to 0 for final version
    const [ind, setInd] = useState(1);
    

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