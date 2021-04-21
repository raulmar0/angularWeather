import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
    selector: '[appReveal]'
})

export class RevealDirective implements OnInit{
    card: any

    constructor(private eleRef: ElementRef) {
        console.log(eleRef.nativeElement)
        this.card = eleRef.nativeElement
        // console.log(document.getElementById('cardReveal'))
    }
    
    ngOnInit() {
        this.card.addEventListener('click', () => this.clickHandler())
    }

    clickHandler() {
        console.log('click')
        this.card.style.opacity = 1
    }
}