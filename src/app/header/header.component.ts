import {Component} from '@angular/core';
import { FarmService } from '../farms/farms.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({

selector: 'app-header',
templateUrl: './header.component.html' 
})

export class HeaderComponent{
title: string = 'Greendale Farm';
result: Object;
inputBlank : string = "";

constructor(private farmService : FarmService,
    private router : Router, 
    private activatedRoute: ActivatedRoute
    ){}

getValue(days:number): any{
    this.activatedRoute.params.subscribe(params=>{          
        if(days){
            this.farmService.moveInTime(days).subscribe(
            (result => this.result = result)
          )
          this.inputBlank = "";
          

        }
      })
  }

}