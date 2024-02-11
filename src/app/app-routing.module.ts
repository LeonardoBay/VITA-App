import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//começar a importar daqui os meus arquivos p/ fazer as rotas de navegaçao

//importa {nomeDoArquivo da tela} para a "URL", no caso especifico as pastas
//de onde se localiza o meu arquivo da tela


//aqui sao as rotas
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


//canActivate: [ApiGuard] --> É uma api p/ usuário se manter
//logado na tela, mesmo que ele saia do app

//ApiGuard cria regra --> Só pode ficar/se manter na tela se retornar TRUE
