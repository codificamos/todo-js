export class Todo {
  static fromJson({ id, tarea, completado, creado }) {
    const tempTodo = new Todo(tarea);

    tempTodo.id = id;
    tempTodo.completado = completado;
    tempTodo.creado = creado;

    return tempTodo;
  }

  //método constructor
  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime(); //12345678123
    this.completado = false;
    this.creado = new Date();
  } //fin del método constructor

  imprimirClase() {
    console.log(`${this.tarea} - ${this.id}`);
  }
} //fin de la clase Todo
