import React, { Component } from 'react';
import ClienteService from '../../services/ClienteService';

export default class HomeClientes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientes: [],
      //enderecos: [],
    };
    this.editCliente = this.editCliente.bind(this);
    this.deleteCliente = this.deleteCliente.bind(this);
  }

  componentDidMount() {
    ClienteService.getClientes().then((res) => {
      this.setState({
        clientes: res.data,
      });
      console.log(res.data);
    });
  }

  deleteCliente(id) {
    ClienteService.deleteCliente(id).then((res) => {
      this.setState({
        clientes: this.state.clientes.filter((cliente) => cliente.id !== id),
      });
    });
  }
  viewCliente(id) {
    this.props.history.push(`/visualizarCliente/${id}`);
  }
  editCliente(id) {
    this.props.history.push(`/updateCliente/${id}`);
  }

  addCliente(){
    this.props.history.push("/addClientes/_add");
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Lista de Clientes</h1>

          <br></br>
        <div className = "row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nome completo</th>
                <th>CPF</th>
                <th>Data de nascimento</th>
                <th width={260}>Endereço</th>
                <th>Interações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.dataDeNascimento}</td>
                  <tr>
                    {cliente.enderecos.map((endereco) => (
                      <td width={265} height={70}>{endereco.logradouro} ...</td>
                    ))}
                  </tr>
                  <td>
                    <button
                      onClick={() => this.editCliente(cliente.id)}
                      className="btn btn-info"
                    >
                      Atualizar
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.deleteCliente(cliente.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.viewCliente(cliente.id)}
                      className="btn btn-info"
                    >
                      Visualizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
