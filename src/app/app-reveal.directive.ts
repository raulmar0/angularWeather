import { Directive, ElementRef, HostListener, DoCheck, Output} from '@angular/core'
import * as EventEmitter from 'node:events'

@Directive({
    selector: '[appReveal]'
})

export class RevealDirective implements DoCheck {
    card: any
    modal: any
    isClicked: boolean = false
    
    @Output() messageEvent = new EventEmitter<any>()

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
        this.sendMessage()
    }


    sendMessage() {
        this.messageEvent.emit(this.isClicked)
    }
}