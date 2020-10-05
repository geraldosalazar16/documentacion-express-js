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

/**
 * @api {get} /app/todos Obtener el listado de TODOS
 * @apiName Listar
 * @apiGroup Todo
 *
 * @apiHeader {String} access-token
 *
 * @apiSampleRequest /app/todos
 *
 * @apiSuccess {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiSuccess {Object[]} todos Listado de todos.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "statusCode": "200",
 *       "todos": [
 *        {
 *           id: 1,
 *           nombre: 'Todo 1',
 *           status: 'Pendiente'
 *         },
 *         {
 *           id: 2,
 *           nombre: 'Todo 2',
 *           status: 'Pendiente'
 *         },
 *         {
 *           id: 3,
 *           nombre: 'Todo 3',
 *           status: 'Completado'
 *         }
 *        ]
 *     }
 *
 * @apiError {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiError {String} message   Mensaje de error.
 * @apiErrorExample {json} Error-Response:
*     HTTP/1.1 401 Unauthorized
*     {
*       "message": "Credenciales inválidas"
*     }
*/
router.get('/', function(req, res, next) {
  res.json({
    statusCode: 200,
    todos
  });
});


/**
 * @api {get} /app/todos/:id Obtener un TODO por su id
 * @apiName GetbyId
 * @apiGroup Todo
 *
 * @apiHeader {String} access-token
 * @apiSampleRequest /app/todos/1
 *
 * @apiSuccess {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiSuccess {Object[]} todos Listado de todos.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "statusCode": "200",
 *       "todo": {
 *           id: 1,
 *           nombre: 'Todo 1',
 *           status: 'Pendiente'
 *         }
 *     }
 *
 * @apiError {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiError {String} message   Mensaje de error.
 * @apiErrorExample {json} Error-Response:
*     HTTP/1.1 200 Ok
*     {
*       "message": "The requested resource (ID ${todoId}) was not found"
*     }
*/
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

/**
 * @api {post} /app/todos Inserta un nuevo TODO
 * @apiName Crear
 * @apiGroup Todo
 *
 * @apiHeader {String} access-token
 * @apiParam {String} nombre Nombre
 *
 * @apiSampleRequest /app/todos
 *
 * @apiSuccess {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiSuccess {Object} todo TODO Insertado.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "statusCode": "200",
 *       "todo": {
 *           id: 1,
 *           nombre: 'Todo 1',
 *           status: 'Pendiente'
 *         }
 *     }
 *
 * @apiError {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiError {String} message   Mensaje de error.
 * @apiErrorExample {json} Error-Response:
*     HTTP/1.1 200 Ok
*     {
*         "statusCode": "400",
*         "message": "El campo nombre es requerido"
*     }
*/
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

/**
 * @api {put} /app/todos/:id Modifica un TODO por el id
 * @apiName Editar
 * @apiGroup Todo
 *
 * @apiHeader {String} access-token
 * @apiParam {String} nombre Nombre
 *
 * @apiSampleRequest /app/todos/1
 *
 * @apiSuccess {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiSuccess {Object} todo TODO editdo.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "statusCode": "200",
 *       "todo": {
 *           id: 1,
 *           nombre: 'Todo 1',
 *           status: 'Pendiente'
 *         }
 *     }
 *
 * @apiError {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiError {String} message   Mensaje de error.
 * @apiErrorExample {json} Error-Response:
*     HTTP/1.1 200 Ok
*     {
*         "statusCode": "404",
*         "message": "The requested resource (ID 1) was not found"
*     }
*/
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

/**
 * @api {delete} /app/todos/:id Elimina un TODO por el id
 * @apiName Editar
 * @apiGroup Todo
 *
 * @apiHeader {String} access-token
 *
 * @apiSampleRequest /app/todos/1
 *
 * @apiSuccess {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiSuccess {Number} removedItems Cantidad de registros eliminados.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "statusCode": "200",
 *       "removedItems": 1
 *     }
 *
 * @apiError {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiError {String} message   Mensaje de error.
 * @apiErrorExample {json} Error-Response:
*     HTTP/1.1 200 Ok
*     {
*         "statusCode": "404",
*         "message": "The requested resource (ID 1) was not found"
*     }
*/
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
