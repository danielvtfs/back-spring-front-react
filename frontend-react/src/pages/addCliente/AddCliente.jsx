import React, { Component } from 'react'
import ClienteService from '../../services/ClienteService';
import './addCliente.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validation = yup.object.shape({
    nome: yup.string().required(),
    cpf: yup.string().required(),
    dataDeNascimento: yup.string().required(),
    logradouro: yup.string().required(),
    bairro: yup.string().required(),
    cep: 
})

class AddCliente extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id: this.props.match.params.id,
            nome: '',
            cpf: '',
            dataDeNascimento: '',
            logradouro: '',
            bairro: '',
            cep: ''

        }
        this.changeNomeHandle = this.changeNomeHandle.bind(this);
        this.changeCpfHandle = this.changeCpfHandle.bind(this);
        this.changeDataHandle = this.changeDataHandle.bind(this);
        this.changeLogradouroHandle = this.changeLogradouroHandle.bind(this);
        this.changeBairroHandle = this.changeBairroHandle.bind(this);
        this.changeCepHandle = this.changeCepHandle.bind(this);
        this.saveOrUpdateCliente = this.saveOrUpdateCliente.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            ClienteService.getClienteById(this.state.id).then( (res) =>{
                let cliente = res.data;
                this.setState({
                    nome: cliente.nome,
                    cpf: cliente.cpf,
                    dataDeNascimento: cliente.dataDeNascimento,
                    logradouro : cliente.logradouro,
                    bairro : cliente.bairro,
                    cep : cliente.cep,

                });
            });
        }        
    }

    saveOrUpdateCliente = (e) => {
        e.preventDefault();
        let cliente = {
          nome: this.state.nome, 
          cpf: this.state.cpf, 
          dataDeNascimento: this.state.dataDeNascimento,
          logradouro: this.state.logradouro,
          bairro: this.state.bairro,
          cep: this.state.cep
        };
        console.log('cliente => ' + JSON.stringify(cliente));

        if(this.state.id === '_add'){
            ClienteService.addCliente(cliente).then(res =>{
                this.props.history.push('/');
              });
        }else{
            ClienteService.updateCliente(cliente, this.state.id).then( res => {
                this.props.history.push('/');
            });
        }

    }
    
    changeNomeHandle= (event) => {
        this.setState({nome: event.target.value});
        console.log(event.target.value);
    }

    changeCpfHandle= (event) => {
        this.setState({cpf: event.target.value});
    }

    changeDataHandle= (event) => {
        this.setState({dataDeNascimento: event.target.value});
    }

    changeLogradouroHandle= (event) => {
        this.setState({logradouro: event.target.value});
        console.log(event.target.value);
    }

    changeBairroHandle= (event) => {
        this.setState({bairro: event.target.value});
    }

    changeCepHandle= (event) => {
        this.setState({cep: event.target.value});
    }

    cancelar(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Cliente</h3>
        }else{
            return <h3 className="text-center">Editar Cliente</h3>
        }
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card ">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nome: </label>
                                            <input placeholder="Nome " name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandle}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CPF: </label>
                                            <input placeholder="CPF" name="cpf" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeCpfHandle}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data de nascimento: </label>
                                            <input type="date"  name="dataDeNascimento" className="form-control" 
                                                value={this.state.dataDeNascimento} onChange={this.changeDataHandle}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Logradouro: </label>
                                            <input placeholder="Logradouro"   name="logradouro" className="form-control" 
                                                value={this.state.logradouro} onChange={this.changeLogradouroHandle}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Bairo: </label>
                                            <input placeholder="Bairro"   name="bairro" className="form-control" 
                                                value={this.state.bairro} onChange={this.changeBairroHandle}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Cep: </label>
                                            <input placeholder="Cep"   name="cep" className="form-control" 
                                                value={this.state.cep} onChange={this.changeCepHandle}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCliente}>Enviar</button>
                                        <button className="btn btn-danger" onClick={this.cancelar.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddCliente
