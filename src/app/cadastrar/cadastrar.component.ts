import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit { 

  usuario: any = {};

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  cadastrar(){
    this.usuarioService.cadastrar(this.usuario);
  }

}
