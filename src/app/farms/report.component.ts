import { Component } from '@angular/core';
import { Farm } from './farms';
import { FarmService } from './farms.service';
import { ChickenService } from '../chickens/chickens.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})

export class ReportComponent {
  farm: Farm= new Farm();
  numberOfChickens: number;
  titulo: String= "Farm Report";

  constructor(private farmService : FarmService,
    private router : Router, 
    private activatedRoute: ActivatedRoute, private chickenService: ChickenService
    ){}

    ngOnInit(){
      this.loadFarm();
      this.loadNumberOfChickens();
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
      console.log('Entra acá NOF');
      this.activatedRoute.params.subscribe(params=>{
        let id = params ['id']
        console.log('Entra acá NOF id: ' + id);

        if(id){
          this.chickenService.getChickensByFarm(id).subscribe(
            (numberOfChickens => this.numberOfChickens = numberOfChickens)
          )
        }
      })
    }
}
