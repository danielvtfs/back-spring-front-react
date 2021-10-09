package com.dan.f.cadmeta.resources.exceptions;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.dan.f.cadmeta.services.exceptions.DataIntregrityException;
import com.dan.f.cadmeta.services.exceptions.ObjectNotFoundException;

@ControllerAdvice
public class ResourceExceptionHandler {
	
	@ExceptionHandler(ObjectNotFoundException.class)
	public ResponseEntity<StandartError> 
		ObjectNotFound(ObjectNotFoundException e, HttpServletRequest request){
		
		StandartError err = new StandartError(
				System.currentTimeMillis(), 
				HttpStatus.NOT_FOUND.value(), 
				e.getMessage());
		
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
	}
	
	@ExceptionHandler(DataIntregrityException.class)
	public ResponseEntity<StandartError> dataIntegrity(DataIntregrityException e, HttpServletRequest request){
		
		StandartError err = new StandartError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(), "NÃ£o encontrado", e.getMessage(), request.getRequestURI());
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
	}
}
