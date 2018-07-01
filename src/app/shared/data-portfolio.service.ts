import { MarketingCard } from "./marketing.model";

export class DataPortfolio  {
    constructor () {} 
    portfolio: MarketingCard[];
    getPortfolio () {
        this.portfolio = [
            {
                name: 'Project One',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
            },
            {
                name: 'Project Two',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.'
            },
            {
                name: 'Project Three',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!'
            }
        ];
        return this.portfolio;
    }
}