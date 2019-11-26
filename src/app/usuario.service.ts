import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { LocalStorageService } from './localStorage.service';

const chave = 'listaUsuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private localStorageService: LocalStorageService) {}

  cadastrar(usuario: Usuario): Usuario{
    const listaUsuarios = this.localStorageService.getItem(chave);
    listaUsuarios.push(usuario);
    this.localStorageService.setItem(chave, listaUsuarios);
    alert('Cadastro efetuado com sucesso!');
    return listaUsuarios[listaUsuarios.length -1]; // Poderia retornar o "usuario" mas acho que não faz sentido retornar o que estou recebendo.
  }

  consultarLista(): Usuario{
    return this.localStorageService.getItem(chave) || [];
  }

  consultarUsuario(indice: string): Usuario{
    const listaUsuarios = this.localStorageService.getItem(chave);
    return listaUsuarios[indice];
  }

  excluir(indice: string): Usuario{
    const listaUsuarios = this.localStorageService.getItem(chave);
    const usuarioExcluido = this.consultarUsuario(indice); // Se eu retornasse o listaUsuarios[indice] teria perdido seu valor.
    listaUsuarios.splice(indice, 1);
    this.localStorageService.setItem(chave, listaUsuarios);
    alert('Exclusão efetuada com sucesso!');
    return usuarioExcluido;
  }

  editar(usuario: Usuario, indice: string): Usuario{
    const listaUsuarios = this.localStorageService.getItem(chave);
    listaUsuarios.splice(indice, 1, usuario);
    this.localStorageService.setItem(chave, listaUsuarios);
    alert('Alteração efetuada com sucesso!');
    return listaUsuarios[indice]; // Splice acrecenta o objeto no mesmo índice que exclui.
  }

  resetar(): Usuario{
    const listaUsuarios = this.consultarLista();
    this.localStorageService.removeItem(chave);
    return listaUsuarios;
  }
}
