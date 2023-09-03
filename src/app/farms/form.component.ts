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
  public errors : string[];

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
      .subscribe({
        next: json =>{
        alert(json.Message);
      } ,
      error: err => {
        this.errors = this.farmService.getErrors();
        alert(this.errors);
      },
      complete : () => {
        this.router.navigate(['/farms']);
      }
    });   
  }


}