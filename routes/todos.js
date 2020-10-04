var express = require('express');
var router = express.Router();

let todos = [
  {
    id: 1,
    nombre: 'Todo 1',
    status: 'Pendiente'
  },
  {
    id: 2,
    nombre: 'Todo 2',
    status: 'Pendiente'
  },
  {
    id: 3,
    nombre: 'Todo 3',
    status: 'Completado'
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    statusCode: 200,
    todos
  });
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  const todoId = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === todoId);
  if (todo) {
    res.json({
      statusCode: 200,
      todo
    });
  } else {
    res.json({
      statusCode: 404,
      message: `The requested resource (ID ${todoId}) was not found`
    })
  }
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  const todo = req.body;
  if (!todo.nombre) {
    res.json({
      statusCode: 400,
      message: 'El campo nombre es requerido'
    });
    return;
  }
  todo.id = todos.length + 1;
  todos.push(todo)
  res.json({
    statusCode: 201,
    todo
  })
});

/* GET users listing. */
router.put('/:id', function(req, res, next) {
  const todo = req.body;
  if (!todo.nombre) {
    res.json({
      statusCode: 400,
      message: 'El campo nombre es requerido'
    });
    return;
  }
  todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  if (todoIndex >= 0) {
    todos[todoIndex].nombre = todo.nombre;
    todos[todoIndex].status = todo.status;
    res.json({
      statusCode: 200,
      todo: todos[todoIndex]
    });
  } else {
    res.json({
      statusCode: 404,
      message: `The requested resource (ID ${todoId}) was not found`
    })
  }
});

/* GET users listing. */
router.delete('/:id', function(req, res, next) {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  if (todoIndex >= 0) {
    todos = todos.splice(todoIndex, 1);
    res.json({
      statusCode: 200,
      removedItems: 1
    });
  } else {
    res.json({
      statusCode: 404,
      message: `The requested resource (ID ${todoId}) was not found`
    })
  }
});

module.exports = router;
