import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

class TransactionList extends Component {
    state = {
        currentIndex:-1,
        list: this.returnList()
    }

    returnList(){
        if(localStorage.getItem("transactions") == null){
            localStorage.setItem('transactions', JSON.stringify([]))
        }
        return JSON.parse(localStorage.getItem("transactions"))
    }

    onAddOrEdit = (data) => {
        var list =  this.returnList()
        if(this.state.currentIndex === -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem("transactions",JSON.stringify(list))
        this.setState({list,currentIndex: -1})
    }

    handleEditar = (index) => {
        this.setState({currentIndex:index})
    }

    handleEliminar = (index) => {
      var list = this.returnList()
      list.splice(index,1)
      localStorage.setItem("transactions", JSON.stringify(list))
      this.setState({list, currentIndex: -1})
    }

    render() {
        return (
            <div>
                <TransactionForm 
                onAddOrEdit={this.onAddOrEdit}
                currentIndex = {this.state.currentIndex}
                list = { this.state.list}
                />
                <hr></hr>
                <table>
                <tbody>
                {
                    this.state.list.map((item, index) => {
                        return <tr key = {index}>
                             <td>{item.bAccountNo}</td>
                             <td>{item.bName}</td>
                             <td>{item.amount}</td>
                             <td><button onClick={() => this.handleEditar(index)}>Editar</button></td>
                             <td><button onClick={() => this.handleEliminar(index)}>Eliminar</button></td>
                        </tr>
                    })
                }
                </tbody>
                </table>
            </div>
        )
    }
}
export default  TransactionList;