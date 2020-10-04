# Pasos pra generar la documentación #
En este proyecto se utilizó la herramienta apidoc [apidoc](https://apidocjs.com/)
- Instalar apidoc
´´´
npm install apidoc -g
´´´
- Descargar un template para apidoc, el template por default es [este](https://github.com/apidoc/apidoc/tree/master/template)
- Agregar el template de apidoc al proyecto
- Generar la documentación usando el comando
´´´
apidoc -i routes/ -o apidoc/ -t template/
´´´