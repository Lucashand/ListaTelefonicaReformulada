import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit { 


  constructor() { }

  ngOnInit() {
  }

  cadastrar(){
    let nome: any;
    console.log(nome);
  }

}
