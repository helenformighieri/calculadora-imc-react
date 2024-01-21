// No arquivo src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = (peso / (alturaMetros * alturaMetros)) / 10000;
      setImc(imcCalculado.toFixed(2));
    }
  };

  const getClassificacao = () => {
    if (imc === null) return '';

    if (imc < 18.5) {
      return { categoria: 'Abaixo do Peso', cor: 'red', mensagem: 'Procure ajuda profissional.' };
    } else if (imc < 24.9) {
      return { categoria: 'Peso Normal', cor: 'green', mensagem: '' };
    } else if (imc < 29.9) {
      return { categoria: 'Sobrepeso', cor: 'yellow', mensagem: '' };
    } else if (imc < 34.9) {
      return { categoria: 'Obesidade Grau 1', cor: 'red', mensagem: 'Procure ajuda profissional.' };
    } else if (imc < 39.9) {
      return { categoria: 'Obesidade Grau 2', cor: 'red', mensagem: 'Procure ajuda profissional.' };
    } else {
      return { categoria: 'Obesidade Grau 3', cor: 'red', mensagem: 'Procure ajuda profissional.' };
    }
  };

  const classificacao = getClassificacao();

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="input-group">
        <div>
          <label>Altura (cm)</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className="small-input"
          />
        </div>
        <div>
          <label>Peso (kg)</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="small-input"
          />
        </div>
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {imc !== null && (
        <div className="result">
          <h2>Resultado:</h2>
          <p style={{ color: classificacao.cor }}>
            IMC: {imc} - {classificacao.categoria}
          </p>
          {classificacao.mensagem && (
            <p style={{ color: 'red' }}>{classificacao.mensagem}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
