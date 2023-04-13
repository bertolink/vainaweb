import React, { Component } from "react";
import axios from "axios";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

export default class App extends Component {
  state = {
    info: [],
  };

  getApi = async () => {
    const resposta = await Api.get();
    console.log(resposta.data.results);
    const items = resposta.data.results.map((item) => {
      return { ...item };
    });
    this.setState({ info: items });
  };

  componentDidMount() {
    this.getApi();
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.info.map((batata) => (
            <div>
              <li>{batata.name}</li>
              <img src={batata.image} alt={batata.name}/>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
