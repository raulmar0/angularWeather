import { Directive, ElementRef, HostListener, DoCheck } from '@angular/core'

@Directive({
    selector: '[appReveal]'
})

export class RevealDirective implements DoCheck {
    card: any
    modal: any
    isClicked: boolean

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
        isClicked = isClicked ? false : true
        console.log(this.isClicked)
        // como pasar esta variable locations.component.ts
    }
}