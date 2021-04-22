import { Directive, ElementRef, HostListener, Output, EventEmitter} from '@angular/core'

@Directive({
    selector: '[appReveal]'
})

export class RevealDirective {
    card: any
    modal: any
    isClicked: boolean = false
    
    @Output() messageEvent = new EventEmitter<boolean>()

    constructor(private eleRef: ElementRef) {
    }

    @HostListener('click') onClick() {
        this.isClicked = true
        // this.isClicked = this.isClicked ? false : true
        this.sendMessage()
    }


    sendMessage() {
        this.messageEvent.emit(this.isClicked)
    }
}