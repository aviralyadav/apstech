import { Component, OnInit } from '@angular/core';

import { DataMarketingService } from '../shared/data-marketing.service';
import { MarketingCard } from '../shared/marketing.model';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  constructor(private dataHomeService: DataMarketingService) { }
  marketingData: MarketingCard[];

  ngOnInit() {
    this.marketingData = this.dataHomeService.getMarketingData();
  }

}
