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

/**
 * @api {post} /auth/ SOlicitud de autenticación
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam {String} nombre Nombre de usuario.
 * @apiParam {String} password Password del usuario.
 * 
 * @apiSampleRequest /auth
 *
 * @apiSuccess {Number} statusCode Codigo HTTP correspondiente al resultado.
 * @apiSuccess {Object} usuario Información del usuario autenticado.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "statusCode": "200",
 *       "usuario": {
 *          "nombre": "Jhon",
 *          "token": "absdpbasdhbfashdbfasdf"
 *        }
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
router.post('/', function (req, res, next) {
  const nombre = req.body.nombre;
  const password = req.body.password;

  // ValidarUsuario
  const usuarioValido = users.find(user => {
    return user.nombre === nombre && user.password === password;
  });
  if (usuarioValido) {
    const token = jwt.sign({ id: users.id },
      process.env.APP_SECRET,
      { expiresIn: 86400 }
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
