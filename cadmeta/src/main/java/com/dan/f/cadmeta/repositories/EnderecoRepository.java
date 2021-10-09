package com.dan.f.cadmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dan.f.cadmeta.domain.Endereco;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Integer>{

}
