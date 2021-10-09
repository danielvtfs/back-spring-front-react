import React, { Component } from 'react'
import ClienteService from '../../services/ClienteService'
import './visualizar.css'

class VisualizarCliente extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            cliente: {}
        }
    }

    componentDidMount(){
        ClienteService.getClienteById(this.state.id).then( res => {
            this.setState({cliente: res.data});
            console.log("aqui" + JSON.parse(res) );
        })
        
    }

    cancelar(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card ">
                    <h3 className = "text-center"> View Cliente Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: </label>
                            <div className = "item"> { this.state.cliente.nome }</div>
                        </div>
                        <div className = "row">
                            <label> CPF: </label>
                            <div className = "item"> { this.state.cliente.cpf }</div>
                        </div>
                        <div className = "row">
                            <label> Nascimento: </label>
                            <div className = "item"> { this.state.cliente.dataDeNascimento }</div>
                        </div>
                        <button className="btn btn-danger" onClick={this.cancelar.bind(this)} style={{margin: "10px"}}>Voltar</button>

                    </div>
                    

                </div>
            </div>
        )
    }
}

export default VisualizarCliente
