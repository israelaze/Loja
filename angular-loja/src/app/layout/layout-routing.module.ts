import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedoresCadComponent } from './../fornecedores/components/fornecedores-cad/fornecedores-cad.component';
import { FornecedoresListComponent } from './../fornecedores/components/fornecedores-list/fornecedores-list.component';
import { HomeComponent } from './../home/components/home/home.component';
import { RelatoriosComponent } from './../relatorios/components/relatorios/relatorios.component';
import { UsuariosListComponent } from './../usuarios/components/usuarios-list/usuarios-list.component';
import { VendedoresCadComponent } from './../vendedores/components/vendedores-cad/vendedores-cad.component';
import { VendedoresListComponent } from './../vendedores/components/vendedores-list/vendedores-list.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      { path: 'vendedores', component: VendedoresListComponent },
      { path: 'cadastrar-vendedor', component: VendedoresCadComponent },
      { path: 'usuarios', component: UsuariosListComponent },


      {
        path: 'clientes',
        loadChildren: () => import('../clientes/clientes.module').then(m=> m.ClientesModule)
      },
      {
        path: 'produtos',
        loadChildren: () => import('../produtos/produtos.module').then(m=> m.ProdutosModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/pedidos.module').then(m=> m.PedidosModule)
      },
      {
        path: 'fornecedores',
        loadChildren: ()=> import('../fornecedores/fornecedores.module').then(m=> m.FornecedoresModule)
      },
      { path: 'relatorios',
       loadChildren:()=> import('../relatorios/relatorios.module').then(m=> m.RelatoriosModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
