 // Cuando termina el contador
var fechaVencimiento = new Date('2024-07-26T18:59:59').getTime();
            
 // Actualizar la cuenta regresiva cada segundo
var x = setInterval(function() {
     // Obtener la fecha y hora actual
    var ahora = new Date().getTime();

     // Calcular la diferencia entre la fecha de vencimiento y la fecha actual
    var diferencia = fechaVencimiento - ahora;

     // Calcular días, horas, minutos y segundos
     var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
     var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
     var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

     // Mostrar la cuenta regresiva en el elemento con su id
    document.getElementById('cuenta-regresiva').innerHTML = 'Quedan:   ' + dias + 'd ' + horas + 'h ' + minutos + 'm ' + segundos + 's ';

     // Cuando la cuenta regresiva llega a cero,se muestra el mensaje
    if (diferencia < 0) {
        clearInterval(x);
        document.getElementById('cuenta-regresiva').innerHTML = '¡Empiezan los Juegos Olimpicos!';
    }
 }, 1000); // Actualizar cada segundo