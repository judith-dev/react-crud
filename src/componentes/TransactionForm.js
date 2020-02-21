import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class TransactionForm extends Component {

    state = { ...this.returnStateObject() } 

    returnStateObject(){
         if(this.props.currentIndex === -1)
         return {
            bAccountNo:'',
            iFSC:'',
            bName:'',
            amount:''
        }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
       this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddOrEdit(this.state);
    }
    render() {
        return (
          <form onSubmit={this.handleSubmit} autoComplete="off">
             <input name="bAccountNo" placeholder="A/C No." value={this.state.bAccountNo} onChange={this.handleInputChange} ></input><br></br>
             <input name="iFSC" placeholder="iFSC" value={this.state.iFSC} onChange={this.handleInputChange} ></input><br></br>
             <input name="bName" placeholder="bName" value={this.state.bName} onChange={this.handleInputChange} ></input><br></br>
             <input name="amount" placeholder="amount" value={this.state.amount} onChange={this.handleInputChange} ></input><br></br>
             <Button type="submit">Submit</Button>
          </form>
        )
    }
}
export default TransactionForm;
