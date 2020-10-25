package com.hea.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hea.bean.Todo;
import com.hea.todo.service.TodoService;

@CrossOrigin(origins="*")
@RestController
public class TodoController {

	@Autowired
	private TodoService todoService;
	
	
	@GetMapping(path="/users/{userName}/todo")
	public List<Todo> getAllTodos(@PathVariable String userName){
		return todoService.findAll();
	}
	
	@GetMapping(path="/users/{username}/todo/{id}")
	public Todo getTodoById(@PathVariable int id) {
		Todo t = todoService.findById(id);
		return t;
	}
	
	/*
	@DeleteMapping(path="/users/{userName}/todo/{id}")
	public Todo removeTodo(@PathVariable String userName, @PathVariable int id) {
		Todo t = todoService.removeTodo(id);
		return t;
	}
	*/
	
	@DeleteMapping(path="/users/{userName}/todo/{id}")
	public ResponseEntity<Void> removeTodo(@PathVariable String userName, @PathVariable int id) {
		Todo t = todoService.removeTodo(id);
		if(t != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	
	
	@PutMapping(path="/users/{userName}/todo/{id}")
	public ResponseEntity<Todo> EditTodo(@RequestBody Todo todo,@PathVariable String userName, @PathVariable int id) {
		Todo todoUpdated = todoService.saveTodo(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	
	@PostMapping(path="/users/{userName}/todo")
	public ResponseEntity<Todo> CreateTodo(@RequestBody Todo todo, @PathVariable String userName) {
		Todo newTodo = todoService.saveTodo(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	
	
	
	
	
	
}
