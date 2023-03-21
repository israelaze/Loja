import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';

import { UploadFileComponent } from '../upload-file/components/upload-file/upload-file.component';
import { CardListarComponent } from '../util/card-listar/card-listar.component';
import { CardFormComponent } from './../util/card-form/card-form.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
import { ClientesCadComponent } from './components/clientes-cad/clientes-cad.component';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { DialogExcluirComponent } from './components/dialog-excluir/dialog-excluir.component';


@NgModule({
  declarations: [
    ClientesListComponent,
    ClientesCadComponent,
    CardFormComponent,
    CardListarComponent,
    DialogExcluirComponent,
    ClienteUpdateComponent,
    ClienteDetalhesComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,

  ]
})
export class ClientesModule { }
