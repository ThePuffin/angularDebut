import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-departement-list',
  template: `
    <h3>Departement liste</h3>
    <ul class="items">
    <li (click)="onSelect(departement)" [class.selected]=isSelected(departement) *ngFor="let departement of departements"><span>{{departement.id}}</span>=> {{departement.name}}</li>
    </ul>
  `,
  styles: []
})
export class DepartementListComponent implements OnInit {
  public selectedId;
  departements = [
    { "id": 1, "name": "angular" },
    { "id": 2, "name": "node" },
    { "id": 3, "name": "mongodb" },
    { "id": 4, "name": "ruby" },
    { "id": 5, "name": "boostrap" },
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }
  // on ajouter private router: router pour l'utiliser dans onSelect
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(departement) {
    //this.router.navigate(['/departements', departement.id]);
    //on passe le chemin, et l'id désirée mais manque de flexibilité

    this.router.navigate([departement.id], { relativeTo: this.route })
    //on envoie l'id en utilisant la route actuelle quelqu'elle soit

  }

  isSelected(departements) {
    return departements.id === this.selectedId;
  }
}
