import React, { useState } from 'react'



function AddressInput(props){

    function OnInputChange(e, att){
        let val = Object.assign({}, props.data);
        val[att] = e.target.value;
        props.StateCallBack(val);
    }

    return(
        <div>
            {props.Title}
            <br/>
            <input value={props.data.street} onChange={(e) => OnInputChange(e, "street")} placeholder="Street" disabled={!props.enabled}/>
            <label style={{color:"red"}}>{props.Errors.street}</label>
            <br/>
            <input value={props.data.zipCode} onChange={(e) => OnInputChange(e, "zipCode")} placeholder="Zip code" disabled={!props.enabled}/>
            <label style={{color:"red"}}>{props.Errors.zipCode}</label>
            <br/>
            <input value={props.data.city} onChange={(e) => OnInputChange(e, "city")} placeholder="City" disabled={!props.enabled}/>
            <label style={{color:"red"}}>{props.Errors.city}</label>
            <br/>
        </div>
    )
}



function AddressStep(props){
    const [DeliveryAddress, SetDeliveryAddress] = useState({street:"", zipCode:"", city:""});
    const [InvoiceAddress, SetInvoiceAddress] = useState({street:"", zipCode:"", city:""});

    const [DeliveryAddressErrors,SetDeliveryAddressErrors] = useState({});
    const [InvoiceAddressErrors, SetInvoiceAddressErrors] = useState({});

    const [CheckBoxMarked, SetCheckBox] = useState(false);

    const ZipCodeRegExp = new RegExp('^[0-9]{2}[-][0-9]{3}$');

    function ValidateAddress(val){
        let err = {};
        if(val.street == ""){
            err.street = "Street must be provided";
        }
        if(val.city == ""){
            err.city = "City must be provided";
        }
        if(val.zipCode == ""){
            err.zipCode = "Zip code must be provided";
        }
        else if(!ZipCodeRegExp.test(val.zipCode)){
            err.zipCode = "Invalid zip code";
        }
        //console.log(err);
        //console.log(Object.entries(err).length === 0);

        return err;
    }

    function NextButtonPressed(){
        let err1 = ValidateAddress(DeliveryAddress);
        let err2 = ValidateAddress(InvoiceAddress) ;

        if(Object.entries(err1).length === 0 && Object.entries(err2).length === 0){
            props.MoveNextHook({DeliveryAddress, InvoiceAddress}, "Address");
        }
        else{
            SetDeliveryAddressErrors(err1);
            SetInvoiceAddressErrors(err2);
        }
    }

    function UniversalCallBack(e){
        SetDeliveryAddress(e);
        SetInvoiceAddress(e);
    }

    return(
        <div>
            <AddressInput data = {DeliveryAddress} StateCallBack={CheckBoxMarked ? UniversalCallBack : SetDeliveryAddress} Errors={DeliveryAddressErrors} Title="Delivery Address" enabled={true}/>
            <br/>
            <AddressInput data = {InvoiceAddress} StateCallBack={SetInvoiceAddress} Errors={InvoiceAddressErrors} Title="Invoice Address" enabled={!CheckBoxMarked}/>
            <input type="checkbox" checked={CheckBoxMarked} onChange={(e) => {SetCheckBox(e.target.checked); SetInvoiceAddress(DeliveryAddress);}}/> The same as delivery address
            <br/><br/>
            <button onClick={() => NextButtonPressed()}>Next</button>
        </div>
    )
}

export default AddressStep;