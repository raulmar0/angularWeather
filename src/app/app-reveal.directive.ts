import { Directive, ElementRef, HostListener, DoCheck } from '@angular/core'

@Directive({
    selector: '[appReveal]'
})

export class RevealDirective implements DoCheck {
    card: any
    cardReveal: any
    modal: any

    constructor(private eleRef: ElementRef) {
        this.card = eleRef.nativeElement
    }
    
    ngDoCheck () {
        for (const node of this.card.childNodes) {
            if (node.classList.contains('modal')) {
                this.modal = node
            }
        }
        console.log("modal: ", this.modal)

    }

    @HostListener('click') onClick() {
        if (this.modal.style.opacity === 1) {
            this.modal.style.opacity = 0
        } else {
            this.modal.style.opacity = 1
        }
    }
}