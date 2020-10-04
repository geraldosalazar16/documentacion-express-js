var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const users = [
  {
    id: 1,
    nombre: 'admin',
    password: 'admin'
  }
]

/* GET home page. */
router.post('/', function (req, res, next) {
  const nombre = req.body.nombre;
  const password = req.body.password;

  // ValidarUsuario
  const usuarioValido = users.find(user => {
    return user.nombre === nombre && user.password === password;
  });
  if (usuarioValido) {
    const token = jwt.sign({ id: users.id}, 
      process.env.APP_SECRET, 
      {expiresIn: 86400}
    );
    const usuario = {
      id: usuarioValido.id,
      nombre: usuarioValido.nombre,
      token
    }
    res.json({
      statusCode: 200,
      usuario
    })                   
  } else {
    res.status(401).json({
      message: 'Credenciales inválidas'
    })
  }
});

module.exports = router;
