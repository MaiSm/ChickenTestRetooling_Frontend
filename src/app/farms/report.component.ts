import { Component } from '@angular/core';
import { Farm } from './farms';
import { FarmService } from './farms.service';
import { ChickenService } from '../chickens/chickens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Chicken } from '../chickens/chickens';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})

export class ReportComponent {
  farm: Farm= new Farm();
  chickens: Chicken[] = [];
  numberOfChickens: number;
  numberOfEggs: number;
  titulo: String= "Farm Report";

  constructor(private farmService : FarmService,
    private router : Router, 
    private activatedRoute: ActivatedRoute, private chickenService: ChickenService
    ){}

    ngOnInit(){
      this.loadFarm();
      this.loadNumberOfChickens();
      this.loadNumberOfEggs();
      this.loadChickens();
    }

    loadFarm(): void{
      this.activatedRoute.params.subscribe(params=>{
        let id = params ['id']
        if(id){
          this.farmService.getFarm(id).subscribe(
            (farm => this.farm = farm)
          )
        }
      })
    }

    loadNumberOfChickens(): any{
      this.activatedRoute.params.subscribe(params=>{
        let id = params ['id']
        if(id){
          this.farmService.getChickensByFarm(id).subscribe(
            (numberOfChickens => this.numberOfChickens = numberOfChickens)
          )
        }
      })
    }

    loadNumberOfEggs(): any{
      this.activatedRoute.params.subscribe(params=>{
        let id = params ['id']
        if(id){
          this.farmService.getEggsByFarm(id).subscribe(
            (numberOfEggs => this.numberOfEggs = numberOfEggs)
          )
        }
      })
    }  
    
    loadChickens(): void{          
      this.chickenService.getAllChickens().subscribe(
        chickens => this.chickens = chickens
      )          
    }

}
