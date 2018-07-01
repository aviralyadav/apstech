import { Injectable } from "@angular/core";

@Injectable()

export class DataMarketingService {
    constructor () {}
    cards: Array<any> = [];

    getMarketingData () {
        this.cards = [
            { 
                name: 'Software',
                detail: 'We do software and web application design and development'
            },
            { 
                name: 'Mobile Apps',
                detail: 'We develop native, hybrid and cross platform applications'
            },
            { 
                name: 'Digital Marketing',
                detail: 'Its a good place for digital marketing'
            }
        ]
        return this.cards;
    }

}