import { Todo } from "./todo.class";

export class TodoList {
  //constructor de la clase TodoList
  constructor() {
    this.cargarLocalStorage();
  } //fin del constructor

  //métodos
  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  elimarCompletado() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  cargarLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    /*
    //same as above
    if (localStorage.getItem('todo')) {
        
        this.todos= JSON.parse(localStorage.getItem('todo'));
        console.log('cargarLocal:', this.todos);
    } else {
        this.todos= [];
    }
    */

    this.todos = this.todos.map((obj) => Todo.fromJson(obj));
  } //fin cargar localStorage
} //fin de la clase TodoList
