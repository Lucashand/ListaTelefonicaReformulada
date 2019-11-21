import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { ConversaoService } from './conversao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private conversaoService: ConversaoService) {}

  listaUsuarios: any;

  setItem(usuario: Usuario){
    localStorage.setItem('listaUsuarios', this.conversaoService.conversaoParaString(usuario));
  }

  cadastrar(usuario: Usuario){
    this.listaUsuarios = this.consultarLista();
    this.listaUsuarios.push(usuario);
    this.setItem(this.listaUsuarios);
    alert('Cadastro efetuado com sucesso!');
  }

  consultarLista(){
    this.listaUsuarios = localStorage.getItem('listaUsuarios');
    if(this.listaUsuarios){
      return this.conversaoService.conversaoParaObjeto(this.listaUsuarios);
    }else{
      return new Array;
    } 
  }

  consultarUsuario(id: string){
    this.listaUsuarios = localStorage.getItem('listaUsuarios');
    if(this.listaUsuarios){
      let usuario = this.conversaoService.conversaoParaObjeto(this.listaUsuarios);
      return usuario[id];
    }else{
      return new Array;
    } 
  }

  excluir(id: string){
    this.listaUsuarios = this.consultarLista();
    this.listaUsuarios.splice(id, 1);
    this.setItem(this.listaUsuarios);
    alert('Exclusão efetuada com sucesso!');
    return this.listaUsuarios;
  }

  editar(usuario: Usuario, id: string){
    this.listaUsuarios = this.consultarLista();
    this.listaUsuarios.splice(id, 1, usuario);
    this.setItem(this.listaUsuarios);
    alert('Alteração efetuada com sucesso!');
  }
}
