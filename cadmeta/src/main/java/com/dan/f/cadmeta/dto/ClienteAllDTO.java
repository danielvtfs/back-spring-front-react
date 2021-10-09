package com.dan.f.cadmeta.dto;

import java.io.Serializable;
import java.util.Date;

import com.dan.f.cadmeta.domain.Endereco;

public class ClienteAllDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	
	private String nome;
	private String cpf;
	private Date dataDeNascimento;
	private String logradouro;
	private String bairro;
	private String cep;
	
	public ClienteAllDTO() {}
	
	
	public ClienteAllDTO(Endereco objEnd) {
		super();
		logradouro = objEnd.getLogradouro();

	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public Date getDataDeNascimento() {
		return dataDeNascimento;
	}

	public void setDataDeNascimento(Date dataDeNascimento) {
		this.dataDeNascimento = dataDeNascimento;
	}
	
	
}
	
