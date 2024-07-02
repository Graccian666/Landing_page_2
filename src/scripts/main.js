AOS.init();

//Definindo a data do evento
const dataDoEvento = new Date("Dec 3, 2024 12:00:00");

//Instanciando o timestamp do evento
const timeStampDoEvento = dataDoEvento.getTime();

const contador = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const difDoEvento = timeStampDoEvento - timeStampAtual

    const diasAteOEvento = Math.floor(difDoEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor(((difDoEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    const minutosAteOEvento = Math.floor((difDoEvento % (1000 * 60 * 60)) / (1000 * 60))
    const segundosAteOEvento = Math.floor((difDoEvento % (1000 * 60)) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m
    ${segundosAteOEvento}s`

    if(difDoEvento < 0){
        clearInterval(contador)

        document.getElementById('contador').innerHTML = `Evento Expirado`
    }

}, 1000)






