// import { Location } from "@angular/common";
import { Component } from "@angular/core";

interface Locations {
    city: string;
    icon: string;
    min: number;
    max: number;
    url: string;
}

@Component({
    selector: 'fr-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css']
})


export class LocationsComponent {

    message: boolean = false;
    city: string | undefined;

    receiveMessage($event: boolean) {
        this.message = $event
    }

    openModal(city:string) {
        this.city = city
    }

    closeBtn() {
        this.message = false
    }

    locations: Locations[] = [
        {
            city: "Monterrey",
            icon: "../assets/svg/001-sun.svg",
            min: 27,
            max: 36,
            url: 'clima_Monterrey-America+Norte-Mexico-Nuevo+Leon-MMMY-1-21045.html'
        },
        {
            city: "Dallas",
            icon: "../assets/svg/003-cloudy.svg",
            min: 20,
            max: 25,
            url: 'clima_Dallas-America+Norte-Estados+Unidos-Tarrant-KDFW-1-10549.html'
        },
        {
            city: "Madrid",
            icon: "../assets/svg/002-rain.svg",
            min: 22,
            max: 24,
            url: 'clima_Madrid-Europa-Espana-Madrid-LEMD-1-313.html'

        },
        {
            city: "Lyon",
            icon: "../assets/svg/004-snowflake.svg",
            min: 0,
            max: 3,
            url: 'clima_Lyon-Europa-Francia-Rhone-LFLY-1-26124.html'

        },
        {
            city: "Vancouver",
            icon: "../assets/svg/001-sun.svg",
            min: 27,
            max: 36,
            url: 'clima_Vancouver-America+Norte-Canada-British+Columbia-CWHC-1-8282.html'

        },
        {
            city: "CDMX",
            icon: "../assets/svg/003-cloudy.svg",
            min: 20,
            max: 25,
            url: 'clima_Ciudad+de+Mexico-America+Norte-Mexico-Distrito+Federal--1-21043.html'

        },
    ]
}