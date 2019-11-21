import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { ConversaoService } from './conversao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private conversaoService: ConversaoService) {}

  listaUsuarios: any;

  cadastrar(usuario: Usuario){
    this.listaUsuarios = this.consultar();
    this.listaUsuarios.push(usuario);
    console.log(this.listaUsuarios);
    localStorage.setItem('listaUsuarios', this.conversaoService.conversaoParaString(this.listaUsuarios));
    alert('Cadastro efetuado com sucesso!');
  }

  consultar(){
    this.listaUsuarios = localStorage.getItem('listaUsuarios');
    if(this.listaUsuarios){
      return this.conversaoService.conversaoParaObjeto(this.listaUsuarios);
    }else{
      return new Array;
    } 
  }
  
}
