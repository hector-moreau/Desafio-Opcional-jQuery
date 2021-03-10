# Desafio-Opcional-jQuery

Ejercicio 1

1. Crea una nueva carpeta
2. Dentro de la carpeta creada, crea un archivo index.html
3. Dentro de la carpeta creada, crea un archivo script.js
4. Copia y pega el siguiente código en el archivo index.html

<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Ejercicio 01</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
    crossorigin="anonymous">
</head>
<body>
    <header>
        <h1>Ejercicio 01</h1>
    </header>
    <section>
        <h2 class="h2red">Primera sección <i class="far fa-smile-beam"></i></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="socialnetworks">
                <li><a href="#" class="fb">Facebook</a></li>
                <li><a href="#" class="in">Instagram</a></li>
                <li><a href="#" class="tw">Twitter</a></li>
                <li><a href="#" class="sn">Snapchat</a></li>
            </ul>
        <p><i class="far fa-smile-beam fa-2x"></i> <i class="far fa-smile-beam fa-2x"></i> <i class="far fa-smile-beam fa-2x"></i></p>
    </section>
        
    <section>
        <h2 class="h2red">Segunda sección <i class="far fa-smile-wink"></i></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ul class="socialnetworks">
                    <li><a href="#" class="fba">Facebook</a></li>
                    <li><a href="#" class="in">Instagram</a></li>
                    <li><a href="#" class="tw">Twitter</a></li>
                    <li><a href="#" class="sn" id="last" >Snapchat</a></li>
                </ul>
            <p><i class="far fa-smile-wink fa-2x"></i> <i class="far fa-smile-wink fa-2x"></i> <i class="far fa-smile-wink fa-2x"></i></p>
    </section>
    <section>
        <h2 class="h2red">Tercera sección <i class="far fa-surprise"></i></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="socialnetworks">
                <li><a href="#" class="fb">Facebook</a></li>
                <li><a href="#" class="in">Instagram</a></li>
                <li><a href="#" class="tw">Twitter</a></li>
                <li><a href="#" class="sn">Snapchat</a></li>
            </ul>
            <p><i class="far fa-surprise fa-2x"></i> <i class="far fa-surprise fa-2x"></i> <i class="far fa-surprise
                fa-2x"></i></p>
    </section>
                    
    <section>
        <h2 class="h2red">Cuarta sección <i class="far fa-grin-hearts"></i></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="socialnetworks">
                <li><a href="#" class="fba">Facebook</a></li>
                <li><a href="#" class="in">Instagram</a></li>
                <li><a href="#" class="tw">Twitter</a></li>
                <li><a href="#" class="sn">Snapchat</a></li>
            </ul>
            <p><i class="far fa-grin-hearts fa-2x"></i> <i class="far fa-grin-hearts fa-2x"></i> <i class="far fa-grin-hearts fa-2x"></i></p>
    </section>
    <!--Llamado a jQuery-->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-
    FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <!--Mi propio script-->
    <script src="script.js"></script>
    
</body>
</html>


Ejercicio 2

Las siguientes instrucciones deben hacerse solo con JavaScript (jQuery), sin modificar el código
HTML ni modificar/agregar clases.

A continuación se detalla lo que debes realizar en el archivo script.js :

1- Escribe el Document Ready Event.
2- A cada link (etiqueta <a> ) se le debe atribuir el atributo target con valor _blank
3- A cada link (etiqueta <a> ), a través del método prepend() , se le añada su ícono de FontAwesome correspondiente:

    Facebook: <i class="fab fa-facebook-f"></i>
    Instagram: <i class="fab fa-instagram"></i>
    Twitter: <i class="fab fa-twitter"></i>
    Pinterest: <i class="fab fa-pinterest"></i>

4- Al clickear cualquier <h2> cambie su color de letra a rojo.
5- Seleccionar el cuarto <li> de la segunda <section>

    Por medio de un append agrega este string: <ul><li><a href="#">link 4.a</a></li></ul>
    Por medio de un un after agrega este otro string: <li><a href="#">link 5</a></li>
