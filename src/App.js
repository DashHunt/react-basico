import React, { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario'

class App extends Component {

  state = {
    comentarios: [{
      nome: 'Pedro',
      email: 'pedro@mail.com', 
      data: new Date(2021, 12, 3, 17, 30, 0),
      mensagem: 'Olá, tudo bem?'
    },
    {
      nome: 'Joao',
      email: 'joao@mail.com', 
      data: new Date(2021, 12, 6, 14, 20, 0),
      mensagem: 'Olá, tudo bem sim....'
    }
  ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }
  adicionarComentarios = evento => {
    

    evento.preventDefault();
    console.log('Adicionado comentarios......');

    const novoComentario = {...this.state.novoComentario, data: new Date()}
    
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome: '', email: '', mensagem: ''}
    })
  }


  removerComentario = comentario => {
    let lista = this.state.comentarios
    lista = lista.filter(c => c !== comentario)

    this.setState({comentarios: lista})
  }

  digitacao = evento => {
    const {name, value} = evento.target
 
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  render(){
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, index) =>(
          <Comentario 
            key={index}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentarios} className="Novo-Comentario">
          <h2>Adicionar comentario</h2>
            <div>
              <div>
                <input 
                  type="text" 
                  name="nome"
                  value={this.state.novoComentario.nome}
                  onChange={this.digitacao}
                  required
                  placeholder="Digite seu nome"></input>
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  value={this.state.novoComentario.email}
                  onChange={this.digitacao}
                  required
                  placeholder="Digite seu email"></input>
              </div>
              <div>
                <textarea 
                  name= "mensagem"
                  value={this.state.novoComentario.mensagem}
                  onChange={this.digitacao}
                  required
                  rows="4"></textarea>
              </div>
              <button type="submit">Adicionar Comentario</button>
            </div>
        </form>
      </div>
    )
  }
}

export default App;
