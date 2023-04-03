import React, { Component } from "react";
import "./App.css";
import alface from "./assets/alface.png";
import laranja from "./assets/laranja.png";
import cereja from "./assets/cereja.png";
import cenoura from "./assets/cenoura.png";
import manga from "./assets/manga.png";
import limao from "./assets/limao.png";
import beterraba from "./assets/beterraba.png";
import tomate from "./assets/tomate.png";
class App extends Component {
  state = {
    lista: [
      {
        fruta: `${alface}`,
      },
      {
        fruta: `${laranja}`,
      },
      {
        fruta: `${cereja}`,
      },
      {
        fruta: `${cenoura}`,
      },
      {
        fruta: `${manga}`,
      },
      {
        fruta: `${limao}`,
      },
      {
        fruta: `${beterraba}`,
      },
      {
        fruta: `${tomate}`,
      },
    ],
  };
  render() {
    return (
      <div className="index">
        <div className="box">
          <div className="titulo">
            <h1>Hortifruti</h1>
            <h2>Vnw</h2>
          </div>

          <ul>
            <h2>Nossos Produtos</h2>
            {this.state.lista.map((item) => (
              <img src={item.fruta} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
