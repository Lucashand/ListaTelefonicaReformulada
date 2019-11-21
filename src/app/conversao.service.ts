import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ConversaoService {

  conversao: any;
  constructor() { }

  conversaoParaString(listaUsuarios: Usuario){
    this.conversao = JSON.stringify(listaUsuarios);
    return this.conversao;
  }

  conversaoParaObjeto(listaUsuarios: string){
    this.conversao = JSON.parse(listaUsuarios);
    return this.conversao;
  }
}
