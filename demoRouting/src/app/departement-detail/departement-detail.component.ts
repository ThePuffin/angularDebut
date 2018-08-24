import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-departement-detail',
  template: `
    <h4>
      you selected departement with id = {{departementId}}
    </h4>
    <p>
    <button (click)='showOverview()'>Overview</button>
    <button (click)='showContact()'>Contact</button>

    </p>
    <router-outlet></router-outlet>

   <p> 
   <button (click)="goPrevious()" >Previous</button>
   <button (click)="goNext()" >Next</button>
   </p>
    <br>
    <button (click)="goBack()">go back!</button>
  `,
  styles: [
    ` a {
  color: "blue";
}`
  ]
})
export class DepartementDetailComponent implements OnInit {

  public departementId;
  constructor(private route: ActivatedRoute, private router: Router) { }
  //route sert pour savoir sur quelle route on est, l'autre sert pour envoyer sur une autre route (previous ou next)

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //on fait un snapshot de la route courante et on récupère l'id
    //this.departementId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departementId = id;
    });

  }

  goPrevious() {
    let previousId = this.departementId - 1;
    // this.router.navigate(['/departements', previousId]);
    this.router.navigate(['../', previousId], { relativeTo: this.route });
  }

  goNext() {
    let nextId = this.departementId + 1;
    // this.router.navigate(['/departements', nextId]);
    this.router.navigate(['../', nextId], { relativeTo: this.route });
  }

  goBack() {
    let selectedId = this.departementId ? this.departementId : null;
    //this.router.navigate(['/departements', { id: selectedId }])

    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route })
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route })
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route })

  }
}
