define({ "api": [
  {
    "type": "post",
    "url": "/auth/",
    "title": "SOlicitud de autenticación",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password del usuario.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/auth"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "usuario",
            "description": "<p>Información del usuario autenticado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"statusCode\": \"200\",\n  \"usuario\": {\n     \"nombre\": \"Jhon\",\n     \"token\": \"absdpbasdhbfashdbfasdf\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Credenciales inválidas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/app/todos/id",
    "title": "Inserta un nuevo TODO",
    "name": "Crear",
    "group": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/app/todos/id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "todo",
            "description": "<p>TODO Insertado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"statusCode\": \"200\",\n  \"todo\": {\n      id: 1,\n      nombre: 'Todo 1',\n      status: 'Pendiente'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"statusCode\": \"400\",\n    \"message\": \"El campo nombre es requerido\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/todos.js",
    "groupTitle": "Todo"
  },
  {
    "type": "put",
    "url": "/app/todos/id",
    "title": "Modifica un TODO por el id",
    "name": "Editar",
    "group": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/app/todos/id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "todo",
            "description": "<p>TODO editdo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"statusCode\": \"200\",\n  \"todo\": {\n      id: 1,\n      nombre: 'Todo 1',\n      status: 'Pendiente'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"statusCode\": \"404\",\n    \"message\": \"The requested resource (ID 1) was not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/todos.js",
    "groupTitle": "Todo"
  },
  {
    "type": "delete",
    "url": "/app/todos/id",
    "title": "Elimina un TODO por el id",
    "name": "Editar",
    "group": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/app/todos/id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "removedItems",
            "description": "<p>Cantidad de registros eliminados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"statusCode\": \"200\",\n  \"removedItems\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"statusCode\": \"404\",\n    \"message\": \"The requested resource (ID 1) was not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/todos.js",
    "groupTitle": "Todo"
  },
  {
    "type": "get",
    "url": "/app/todos/id",
    "title": "Obtener un TODO por su id",
    "name": "GetbyId",
    "group": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/app/todos/id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "todos",
            "description": "<p>Listado de todos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"statusCode\": \"200\",\n  \"todo\": {\n      id: 1,\n      nombre: 'Todo 1',\n      status: 'Pendiente'\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n  \"message\": \"The requested resource (ID ${todoId}) was not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/todos.js",
    "groupTitle": "Todo"
  },
  {
    "type": "get",
    "url": "/app/todos/",
    "title": "Obtener el listado de TODOS",
    "name": "Listar",
    "group": "Todo",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/app/todos/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "todos",
            "description": "<p>Listado de todos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"statusCode\": \"200\",\n  \"todos\": [\n   {\n      id: 1,\n      nombre: 'Todo 1',\n      status: 'Pendiente'\n    },\n    {\n      id: 2,\n      nombre: 'Todo 2',\n      status: 'Pendiente'\n    },\n    {\n      id: 3,\n      nombre: 'Todo 3',\n      status: 'Completado'\n    }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Codigo HTTP correspondiente al resultado.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Credenciales inválidas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/todos.js",
    "groupTitle": "Todo"
  }
] });
