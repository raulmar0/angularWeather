import { Directive, ElementRef, HostListener, DoCheck, TemplateRef, ViewContainerRef} from '@angular/core'

@Directive({
    selector: '[appReveal]'
})

export class RevealDirective implements DoCheck {
    card: any
    modal: any
    isClicked: boolean = false
    templateRef: TemplateRef<any> | undefined
    viewContainer: ViewContainerRef | undefined

    constructor(private eleRef: ElementRef) {
        this.card = eleRef.nativeElement
    }
    
    ngDoCheck () {
        for (const node of this.card.childNodes) {
            if (node.classList.contains('modal')) {
                this.modal = node
            }
        }
        // console.log("modal: ", this.modal)

    }

    @HostListener('click') onClick() {
        this.isClicked = this.isClicked ? false : true
        console.log(this.templateRef)
        // como pasar esta variable locations.component.ts
    }
}