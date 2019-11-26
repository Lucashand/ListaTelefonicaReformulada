import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit { 

  usuario = new Usuario;
  id: string;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.usuario = this.usuarioService.consultarUsuario(this.id);
    }
  }

  salvar(){
    if(this.id){
      this.usuarioService.editar(this.usuario, this.id);
    }else{
      this.usuarioService.cadastrar(this.usuario);
    }
    this.router.navigateByUrl('/consultar');
  }

}
