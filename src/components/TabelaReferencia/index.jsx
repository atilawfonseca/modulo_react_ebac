import style from './TabelaRef.module.css'

const TabelaReferencia = () => {
    return (
        <div className={style.referencia}>
            <h2>Tabela de referência</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            IMC
                        </th>
                        <th>
                            Diagnóstico
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> menor que 18,5kg/m² </td>
                        <td> baixo peso </td>
                    </tr>
                    <tr>
                        <td> maior que 18,5kg/m² até 24,9kg/m² </td>
                        <td> Peso adequado </td>
                    </tr>
                    <tr>
                        <td> maior igual a 25kg/m² até 29,9kg/m² </td>
                        <td> Sobre-peso </td>
                    </tr>
                    <tr>
                        <td> maior igual a 30kg/m² até 34,9kg/m² </td>
                        <td> Obsidade grau 1 </td>
                    </tr>
                    <tr>
                        <td> maior igual a 35kg/m² até 39,9kg/m² </td>
                        <td> Obsidade grau 2 </td>
                    </tr>
                    <tr>
                        <td> maior que 40kg/m² </td>
                        <td> Obesidade extrema </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabelaReferencia; 