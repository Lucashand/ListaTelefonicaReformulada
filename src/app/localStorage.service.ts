import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(chave: string, item: any){
    const conversao = JSON.stringify(item);
    localStorage.setItem(chave, conversao);
    return item;
  }

  getItem(chave: string){
    const conversao = JSON.parse(localStorage.getItem(chave));
    return conversao || [];
  }

  removeItem(chave: string){
    const item = this.getItem(chave);
    localStorage.removeItem(chave);
    return item;
  }
}
