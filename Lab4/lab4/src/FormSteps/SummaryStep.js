import React from 'react'

function SummaryStep(props){
    return(
        <div>
            FirstName: {props.data.Name.FirstName}
            <br/>
            LastName: {props.data.Name.LastName}
            <br/>
            Email: {props.data.Name.EmailAddress}
            <br/>
            <button onClick={() => props.MoveCallback(0)}>Edit Name</button>
            <br/><br/>
            Delivery Address:
            <br/>
            Street: {props.data.Address.DeliveryAddress.street}
            <br/>
            Zip Code: {props.data.Address.DeliveryAddress.zipCode}
            <br/>
            City: {props.data.Address.DeliveryAddress.city}
            <br/><br/>
            Invoice Address:
            <br/>
            Street: {props.data.Address.InvoiceAddress.street}
            <br/>
            Zip Code: {props.data.Address.InvoiceAddress.zipCode}
            <br/>
            City: {props.data.Address.InvoiceAddress.city}
            <br/>
            <button onClick={() => props.MoveCallback(1)}>Edit Address</button>
        </div>
    )
}

export default SummaryStep;