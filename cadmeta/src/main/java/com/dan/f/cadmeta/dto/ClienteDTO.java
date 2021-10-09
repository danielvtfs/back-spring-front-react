package com.dan.f.cadmeta.dto;

import java.util.Date;

import com.dan.f.cadmeta.domain.Cliente;

public class ClienteDTO {
	
	private Integer id;

	private String nome;
	
	private String cpf;
	
	private Date dataDeNascimento;
	
	public ClienteDTO() {}

	public ClienteDTO(Cliente obj) {
		super();
		id = obj.getId();
		nome = obj.getNome();
		cpf = obj.getCpf();
		dataDeNascimento = obj.getDataDeNascimento();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public Date getDataDeNascimento() {
		return dataDeNascimento;
	}

	public void setDataDeNascimento(Date dataDeNascimento) {
		this.dataDeNascimento = dataDeNascimento;
	}
	
	
}
