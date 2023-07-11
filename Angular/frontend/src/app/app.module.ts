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
import { MatCardModule } from "@angular/material/card"
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    //todos componentes que fazem parte desse módulo app.module.ts
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
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
