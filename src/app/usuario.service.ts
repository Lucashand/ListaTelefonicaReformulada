import { Injectable } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  conversao;

  constructor() {}

  cadastrar(usuario: any){
    let usuariosCadastrados = [];// = this.consultar();
    usuariosCadastrados.push(
      {nome: usuario.nome, telefone: usuario.telefone, email: usuario.email, sexo: usuario.sexo}
    );
    console.log(usuariosCadastrados);
    /*this.conversao = JSON.stringify(usuario);
    console.log(this.conversao);
    localStorage.setItem('cadastro', this.conversao);
    alert('Cadastro efetuado com sucesso!');*/
  }

  consultar(){
    let usuario = JSON.parse(localStorage.getItem('cadastro'));
    return usuario;
  }
}
