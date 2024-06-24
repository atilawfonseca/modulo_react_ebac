import { useState } from "react";

import style from './Calcula.module.css'

const CalculaIMC = () => {

    const [inpAltura, setInpAltura] = useState(0);
    const [inpPeso, setInpPeso] = useState(0);
    const [estado, setEstado ] = useState(false);

    const [resultado, setResultado] = useState('');


    const imc = (e) => {
        e.preventDefault();
        let altura = parseFloat(inpAltura/100);
        let peso = parseFloat(inpPeso);

        let imc = peso/(altura*altura);
        console.log(imc.toFixed(2))
        
        if(imc<18.5){
            setResultado(`Seu imc foi de ${imc.toFixed(2)}, logo você está com baixo peso`);
        } else
        if(imc>=18.5 && imc<=24.9) {
            setResultado(`Seu imc foi de ${imc.toFixed(2)}, logo você está com peso adequado`);
        } else
        if(imc>=25.0 && imc<=29.9) {
            setResultado(`Seu imc foi de ${imc.toFixed(2)}, logo você está com sobre-peso`);
        } else
        if(imc>=30.0 && imc<=34.9) {
            setResultado(`Seu imc foi de ${imc.toFixed(2)}, logo você está com obsidade grau 1`);
        }else
        if(imc>=35.0 && imc<=39.9) {
            setResultado(`Seu imc foi de ${imc.toFixed(2)}, logo você está com obsidade grau 2`);
        }
        else {
            setResultado(`Seu imc foi de ${imc.toFixed(2)}, logo você está com obesidade extrema`);
        }

        //limpar os campos de input
        e.target.reset();
        setEstado(true);
        
    }

    return (
        <>
        <header className={style.cabecalho}>
            <h1>Cálculo do IMC na plataforma React</h1>
        </header>
        <form onSubmit={imc} className={style.formulario}>
            <input type="text" placeholder="Digite sua altura em cm" onBlur={evento => setInpAltura(evento.target.value)} required />
            <input type="text" placeholder="Digite seu peso" onBlur={evento => setInpPeso(evento.target.value)} required/>

            <button type="submit"> Calcular IMC </button>
        </form>
        <div className={style.resultado}>
            <h2>Resultado</h2>
            {estado ? (<p>{resultado}</p>) : (
                <p>Nenhum resultado exibido ainda!</p>
                )}
        </div>
        </>
        
    )
}
export default CalculaIMC; 