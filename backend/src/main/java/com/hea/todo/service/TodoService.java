package com.hea.todo.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.hea.bean.Todo;

@Service
public class TodoService {

	private static List<Todo> todoList = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todoList.add(new Todo(++idCounter, "Houssem", "Learn java and reactive programming", new Date(), false));
		todoList.add(new Todo(++idCounter, "Leandro", "JavaJscript from udemy", new Date(), true));
		todoList.add(new Todo(++idCounter, "Matheu", "Learn python coding", new Date(), false));
		todoList.add(new Todo(++idCounter, "Bruno", "Angular training", new Date(), true));
		todoList.add(new Todo(++idCounter, "Diego", "Mind programming", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todoList;
	}
	
	public Todo findById(long id) {
		for(Todo t : todoList) {
			if(t.getId() == id) {
				return t;
			}
		}
		return null;
	}
	
	public Todo removeTodo(long id) {
		Todo t = findById(id);
		if(t == null) return null;
		if(todoList.remove(t)) {
			return t;
		}
		return null;
	}
	
	public Todo saveTodo(Todo todo) {
		if(todo.getId() == -1) {
			todo.setId(++idCounter);
			todoList.add(todo);
		}
		else {
			removeTodo(todo.getId());
			todoList.add(todo);
		}
		return todo;
	}
	
}
