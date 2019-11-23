import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(chave: string, item: any){
    let conversao = JSON.stringify(item);
    localStorage.setItem(chave, conversao);
    return item;
  }

  getItem(chave: string){
    let conversao = JSON.parse(localStorage.getItem(chave));
    return conversao || [];
  }

  removeItem(chave: string){
    localStorage.removeItem(chave);
    return this.getItem(chave);
  }
}
