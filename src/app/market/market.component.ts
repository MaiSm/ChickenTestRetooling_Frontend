import { Component } from '@angular/core';
import { FarmService } from '../farms/farms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, catchError, of, Observable } from 'rxjs';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {

  selectedValue: string = 'buy';
  selectedValueType: string = 'eggs';
  amount: number = 1;

  constructor(private farmService : FarmService,
    private router : Router, 
    private activatedRoute: ActivatedRoute
    ){}

  

  handleSubmit(): any{   
    this.activatedRoute.params.subscribe(params=>{       
        this.farmService.handleMarketOperation(this.selectedValue, this.selectedValueType, this.amount).subscribe(
          (response => this.router.navigate(['/farms/report/1']))
        )     
    })
    //alert('You clicked the button!')
  }

}
