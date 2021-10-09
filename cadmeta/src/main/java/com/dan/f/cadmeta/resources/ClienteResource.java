package com.dan.f.cadmeta.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.dan.f.cadmeta.domain.Cliente;
import com.dan.f.cadmeta.dto.ClienteAllDTO;
import com.dan.f.cadmeta.dto.ClienteDTO;
import com.dan.f.cadmeta.repositories.ClienteRepository;
import com.dan.f.cadmeta.services.ClienteService;
import com.dan.f.cadmeta.services.exceptions.DataIntregrityException;
import com.dan.f.cadmeta.services.exceptions.ObjectNotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/clientes")
public class ClienteResource {

	@Autowired
	private ClienteService service;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@GetMapping
	public List<Cliente> getAllClientes(){
		return clienteRepository.findAll();
	}

	@RequestMapping(value="/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable Integer id) {

		Cliente obj = service.find(id);

		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody ClienteAllDTO objDTO) {
		Cliente obj = service.FromDTO(objDTO);
		obj.setId(null);
		obj = service.insert(obj);
		
		//Pega a URI do NOVO recurso gerado.
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();

		return ResponseEntity.created(uri).build();
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody ClienteDTO objDTO, @PathVariable Integer id)
			throws ObjectNotFoundException {
		Cliente obj = service.FromDTO(objDTO);
		obj.setId(id);
		obj = service.update(obj);

		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id)
			throws DataIntregrityException, ObjectNotFoundException {

		service.delete(id);

		return ResponseEntity.noContent().build();
	}
}
