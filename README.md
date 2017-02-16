# LAUNCHY ANIMATION #

----------
[http://www.oscarlijo.com/launchyAnimation/](http://www.oscarlijo.com/launchyAnimation/ "launchyAnimation")
<br><br>
**launchyAnimation.js** es un plugin de jQuery compatible con Zepto.js hecho con CoffeeScript.

*La version minificada de animatext pesa menos de 3kb!*

## Formas de instalar la librería ##

Desde el instalador de paquetes de node:

    npm install launchy-animation

Usando bower:

    bower install launchy-animation

Desde un CDN:

    //cdn.jsdelivr.net/launchyAnimation/latest/launchyAnimation.min.js

<br><br>
## INICIALIZACION DE LA LIBRERIA ##

Para inicializar launchyAnimation únicamente debemos cargar el archivo **launchyAnimation.min.js** si estamos en un entorno productivo, o el archivo **launchyAnimation.js** si estamos desarrollando y queremos modificar la libería.

Solo debemos cargar un archivo js, pero hay que tener en cuenta que esta librería tiene dos dependencias, la primera al tratarse de un plugin es cargar previamente la librería para la que fue desarrollado, en este caso es compatible tanto con *jquery* como con *zepto.js*.

En segundo lugar para realizar las animaciones esta librería se apoya en **animate.css** de manera que también lo tendremos que incorporar a nuestra página.

Después podemos arrancar sobre uno o varios elementos del dom el plugin con el siguiente código:

    $(".mis-elementos").launchyAnimation();

<br><br>
## EJEMPLOS ##

Para mas información y ver ejemplos de como funciona visita la página oficial:

[http://www.oscarlijo.com/launchyAnimation/](http://www.oscarlijo.com/launchyAnimation/ "launchyAnimation")
