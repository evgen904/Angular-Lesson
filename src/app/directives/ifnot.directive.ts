import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set isNot(condition: boolean) {
    if (!condition) {
      // показыть блок
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      // скрыть
      this.viewContainer.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
