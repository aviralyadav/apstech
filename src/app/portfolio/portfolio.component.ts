import { Component, OnInit } from '@angular/core';
import { DataPortfolio } from '../shared/data-portfolio.service';
import { MarketingCard } from '../shared/marketing.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private dataPortfolio: DataPortfolio) { }
  portfolioItems: MarketingCard[];

  ngOnInit() {
    this.portfolioItems = this.dataPortfolio.getPortfolio();
  }

}
