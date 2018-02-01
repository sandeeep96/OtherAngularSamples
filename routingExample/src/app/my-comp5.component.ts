import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-my-comp5',

  template:`
  
  
  <h1> this boy is {{boyCharacter }}</h1>
  
  `,
  
})
export class MyComp5Component implements OnInit {

  public boyCharacter: String;
  private observerRef: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
     // this.boyCharacter=this.route.snapshot.params['character'];

      this.observerRef=this.route.params.subscribe(params=>{
          this.boyCharacter=params['character'];
      });
  }

  ngOnDestroy(){
    this.observerRef.unsubscribe();
  }
}
