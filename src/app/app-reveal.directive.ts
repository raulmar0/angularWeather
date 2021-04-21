import { Directive, ElementRef, EventEmitter, HostListener } from '@angular/core'

@Directive({
    selector: '[appReveal]'
})

export class RevealDirective {
    card: any
    cardReveal: any
    close: any

    constructor(private eleRef: ElementRef) {
        console.log(eleRef.nativeElement)
        this.card = eleRef.nativeElement
        this.cardReveal = document.getElementById('cardReveal')
    }

    @HostListener('click') onClick() {
        console.log(this.cardReveal)
        this.cardReveal.style.opacity === 1 ? this.cardReveal.style.opacity = 0 : this.cardReveal.style.opacity = 1
    }
}