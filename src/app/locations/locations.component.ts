import { Component } from "@angular/core";

@Component({
    selector: 'fr-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css']
})

export class LocationsComponent {
    isEven: boolean = false
    locations: any[] = [
        {
            "city": "Monterrey",
            "icon": "../assets/svg/001-sun.svg",
            "min": 27,
            "max": 36
        },
        {
            "city": "Dallas",
            "icon": "../assets/svg/003-cloudy.svg",
            "min": 20,
            "max": 25
        },
        {
            "city": "Madrid",
            "icon": "../assets/svg/002-rain.svg",
            "min": 22,
            "max": 24
        },
        {
            "city": "Lyon",
            "icon": "../assets/svg/004-snowflake.svg",
            "min": 0,
            "max": 3
        },
    ]
}