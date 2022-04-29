import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[view]' })
export class ViewDirective {

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef)
    { }

    @Input() set view(condition: boolean) {
        if (condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
    }
}
