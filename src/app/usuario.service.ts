import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private localStorageService: LocalStorageService) {}

  cadastrar(usuario: Usuario){
    let listaUsuarios = this.localStorageService.getItem('listaUsuarios');
    listaUsuarios.push(usuario);
    this.localStorageService.setItem('listaUsuarios', listaUsuarios);
    alert('Cadastro efetuado com sucesso!');
  }

  consultarLista(){
    return this.localStorageService.getItem('listaUsuarios') || [];
  }

  consultarUsuario(id: string){
    let listaUsuarios = this.localStorageService.getItem('listaUsuarios');
    return listaUsuarios[id];
  }

  excluir(id: string){
    let listaUsuarios = this.localStorageService.getItem('listaUsuarios');
    this.localStorageService.setItem('listaUsuarios', listaUsuarios.splice(id, 1));
    alert('Exclusão efetuada com sucesso!');
    return listaUsuarios;
  }

  editar(usuario: Usuario, id: string){
    let listaUsuarios = this.localStorageService.getItem('listaUsuarios');
    listaUsuarios.splice(id, 1, usuario);
    this.localStorageService.setItem('listaUsuarios', listaUsuarios);
    alert('Alteração efetuada com sucesso!');
  }
}
