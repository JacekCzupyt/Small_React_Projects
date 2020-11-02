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
            <button>Edit Name (to be implemented)</button>
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
            <button>Edut Address (to be implemented)</button>
        </div>
    )
}

export default SummaryStep;