import { AppComponent } from './../app.component';
import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]' //pode mudar o nome de appFor para myFor
})
export class ForDirective implements OnChanges, OnInit {

  @Input("myForEm") numbers: number[] = []
  //myFor é o nome da diretiva
  //"em", indica que vai pegar o que vier após o que estiver escrito "em" na diretiva
  //está usando essa diretiva no footer, em um li dessa forma: <li *myFor="let n em  [1, 2, 3]"></li>

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {


  }

  ngOnChanges(changes: SimpleChanges): void {
    //sempre que tem alguma alteração executa esse código
  }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
    console.log(this.numbers)
  }

}
