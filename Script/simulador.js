function calcularConsumo(){
    const potencia = document.getElementById('equipamento').value;
    const horas = document.getElementById('horas').value;

    if(potencia == 0 || horas <= 0){
        document.getElementById('resultado').innerHTML = "Por favor selecione um equipamento";
        return;
    }

    const consumoDiario = (potencia * horas) / 1000;
    const consumoMensal = consumoDiario * 30;

    document.getElementById('resultado').innerHTML =`
        ConsumoDiario: ${consumoDiario.toFixed(2)}kWh<br>
        consumoMensal: ${consumoMensal.toFixed(2)}kWh
        `;
                                
}   