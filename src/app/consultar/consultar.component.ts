import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  listaUsuarios: Usuario;
  router: Router;

  constructor(private usuarioService: UsuarioService, http: Router, router: Router) {this.router = router;}

  ngOnInit() {
    this.listaUsuarios = this.usuarioService.consultarLista();
  }

  excluir(id: string){
    this.listaUsuarios = this.usuarioService.excluir(id);
  }

  editar(usuario: Usuario, id: string){
    this.router.navigateByUrl('/cadastrar/'+id);
  }
}
