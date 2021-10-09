package com.dan.f.cadmeta.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.dan.f.cadmeta.domain.Cliente;
import com.dan.f.cadmeta.domain.Endereco;
import com.dan.f.cadmeta.dto.ClienteAllDTO;
import com.dan.f.cadmeta.dto.ClienteDTO;
import com.dan.f.cadmeta.repositories.ClienteRepository;
import com.dan.f.cadmeta.repositories.EnderecoRepository;
import com.dan.f.cadmeta.services.exceptions.DataIntregrityException;
import com.dan.f.cadmeta.services.exceptions.ObjectNotFoundException;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository repository;
	
	@Autowired
	private EnderecoRepository repoEnd;
	
	public Cliente find(Integer id){
		
		Optional<Cliente> obj = repository.findById(id);
		
		return obj.orElseThrow(
					() -> new ObjectNotFoundException(
							"Objeto não encontrado! ID: " + id
								+ ", Tipo: " + Cliente.class.getName()));
	}
	
	@Transactional
	public Cliente insert(Cliente obj){
		obj.setId(null);
		obj = repository.save(obj);
		repoEnd.saveAll(obj.getEnderecos());
		
		return obj;
	}
	
	public List<Cliente> findAll() {
		return repository.findAll();
	}
	
	public Cliente update(Cliente obj) throws ObjectNotFoundException {
		Cliente newObj = find(obj.getId());
		updateData(newObj, obj);
		return repository.save(newObj);
	}
	
	public void delete(Integer id) throws ObjectNotFoundException {
		find(id);
		try {
			repository.deleteById(id);
		}catch(DataIntegrityViolationException e) {
			throw new DataIntregrityException("Não é possível excluir este Cliente!");
		}
	}
	
	public Cliente FromDTO(ClienteAllDTO objDTO) {
		Cliente cli = new Cliente(null, objDTO.getNome(), objDTO.getCpf(), objDTO.getDataDeNascimento());
		Endereco end = new Endereco(null, objDTO.getLogradouro(), objDTO.getBairro(), objDTO.getCep(), cli);
		cli.getEnderecos().add(end);
		
		return cli;
	}
	
	public Cliente FromDTO(ClienteDTO objDTO) {
		return new Cliente(objDTO.getId(), objDTO.getNome(), objDTO.getCpf(), objDTO.getDataDeNascimento());
	}
	
	private void updateData(Cliente newObj, Cliente obj) {
		newObj.setNome(obj.getNome());
		newObj.setCpf(obj.getCpf());
	}
}
