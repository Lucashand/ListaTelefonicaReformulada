import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  listaUsuarios = new Usuario;
  url: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.listaUsuarios = this.usuarioService.consultarLista();
    this.url = this.route.snapshot.paramMap.get('url');
  }

  excluir(indice: string){
    this.usuarioService.excluir(indice);
    this.verificarUrl();
  }

  editar(indice: string){
    this.router.navigateByUrl('/editar/'+indice);
  }

  resetar(){
    this.usuarioService.resetar();
    this.verificarUrl();
  }

  verificarUrl(){
    if(this.url){
      this.router.navigateByUrl('/consultar');
    }else{
      this.router.navigateByUrl('/consultar/'+1);
    }
  }

}
