import { Directive, ElementRef, OnInit, HostListener } from '@angular/core'

@Directive({
    selector: '[appReveal]'
})

export class RevealDirective {
    card: any

    constructor(private eleRef: ElementRef) {
        console.log(eleRef.nativeElement)
        this.card = eleRef.nativeElement
        // console.log(document.getElementById('cardReveal'))
        this.card.addEventListener('click', () => this.clickHandler())
    }

    @HostListener('click') onClick() {
        this.card.style.opacity = 1
    }

    clickHandler() {
        console.log('click')
        this.card.style.opacity = 1
    }
}