import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"

@NgModule({
  declarations: [
    //todos componentes que fazem parte desse módulo app.module.ts
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [
    //componente que vai ser carregado nesse módulo. Ele só é usado no module principal da aplicação.
    AppComponent,
  ],
  exports: [
    //tudo que é exportado daqui pra fora desse componente
    //como aqui é o módulo principal, não precisa exportar nada
    //é como se fosse uma árvore/pirâmide e o app.module.ts está no topo da hierarquia
  ]
})
export class AppModule { }
