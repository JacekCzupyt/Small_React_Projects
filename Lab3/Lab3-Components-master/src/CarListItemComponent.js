import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col, Button} from 'reactstrap';

class CarListItemComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pricePerDay: props.pricePerDay,
            isBeingEdited: false
        }

        this.OnEditPrice = this.OnEditPrice.bind(this);
        this.DefaultView = this.DefaultView.bind(this);
        this.EditedView = this.EditedView.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
    }

    OnEditPrice(e, val){
        this.setState({isBeingEdited: val});
        if(val===false)
        {
            this.props.editHook(this.state.pricePerDay, this.props.ind);
        }
    }


    DefaultView(){
        return(
            <Col>
                <Row style={{fontSize: 8}}>
                    Price per day:
                </Row>
                <Row style={{marginTop: "-6px"}}>
                    {this.state.pricePerDay} PLN
                </Row>
                
                <Row>
                   <Button style={{height: "20px", fontSize: 8, paddingTop:"0px", paddingBottom:"0px"}} color="primary"
                        onClick={(e) => this.OnEditPrice(e, true)}>Edit</Button>
                   <Button style={{height: "20px", fontSize: 8, paddingTop:"0px", paddingBottom:"0px"}} color="danger"
                        onClick={() => this.props.removeHook(this.props.ind)}>Delete</Button>
                </Row>
            </Col>
        )
    }


    EditedView(){
        return(
            <Col>
                <Row>
                    <input type="number" value={this.state.pricePerDay} onChange={this.HandleChange}  />
                </Row>
                <Row>
                    <Button style={{height: "20px", fontSize: 8, paddingTop:"0px", paddingBottom:"0px"}} color="primary"
                        onClick={(e) => this.OnEditPrice(e, false)}>Save</Button>
                    <Button style={{height: "20px", fontSize: 8, paddingTop:"0px", paddingBottom:"0px"}} color="danger"
                        onClick={() => this.props.removeHook(this.props.ind)}>Delete</Button>
                </Row>
               
            </Col>
        )
    }

    HandleChange(e){
        this.setState({pricePerDay: e.target.value });

    }
    
    //!('' + this.props.carName).toLocaleLowerCase().includes(this.props.searchTerm.toLocaleLowerCase())

    render(){
        return(
            <div style={{margin:"10px"}}>
                <Container style={{border:"1px solid black", width: "100%", maxWidth: "100%", background:"#AED6F1"}}>
                    <Row width="100%">
                        <Col>
                            {this.props.carName}
                        </Col>
                        <Col>
                            {this.props.seats} seats
                            <br/>
                            {this.props.doors} doors
                        </Col>
                        <Col>
                        {
                            this.state.isBeingEdited ?
                                this.EditedView()
                                :
                                this.DefaultView()
                        }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CarListItemComponent