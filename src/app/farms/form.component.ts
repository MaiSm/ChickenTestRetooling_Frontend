import { booleanAttribute, Component } from '@angular/core';
import { Farm } from './farms';
import { FarmService } from './farms.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  farm: Farm= new Farm();
  titulo: String= "Editing Farm";

  constructor(private farmService : FarmService,
    private router : Router, 
    private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(){
      this.loadFarm();
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

  update(): void{
      this.farmService.update(this.farm)
      .subscribe(
        (response => this.router.navigate(['/farms'])) 
    );       
  }

}