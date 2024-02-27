 // Cuando termina el contador
    const fechaVencimiento = new Date('2024-07-26T18:59:59').getTime();
            
 // Actualizar la cuenta regresiva cada segundo
    const x = setInterval(function() {
     // Obtener la fecha y hora actual
    const ahora = new Date().getTime();

     // Calcular la diferencia entre la fecha de vencimiento y la fecha actual
    const diferencia = fechaVencimiento - ahora;

     // Calcular días, horas, minutos y segundos
     const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
     const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
     const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

     // Mostrar la cuenta regresiva en el elemento con su id
    document.getElementById('cuenta-regresiva').innerHTML = 'Quedan:   ' + dias + 'd ' + horas + 'h ' + minutos + 'm ' + segundos + 's ';

     // Cuando la cuenta regresiva llega a cero,se muestra el mensaje
    if (diferencia < 0) {
        clearInterval(x);
        document.getElementById('cuenta-regresiva').innerHTML = '¡Empiezan los Juegos Olimpicos!';
    }
 }, 1000); // Actualizar cada segundo