import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!-- ngIf  -->

  <!-- if seulement
  <h2 *ngIf="true">
  Codevolution
  </h2> ---> 
  
  <!-- if/else
  <h2 *ngIf="displayName; else elseBlock">
  Codevolution
  </h2>

  <ng-template #elseBlock>
  <h2> 
  Name is hidden
  </h2>
  </ng-template> -->

  <!-- autre methode if/else
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
  <h2>montrer</h2>
  </ng-template>

  <ng-template #elseBlock>
  <h2>cacher</h2>
  </ng-template>
 -->




<!-- ngSwitch -->
<!--
<h2>couleur :</h2>
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">rouge</div>
  <div *ngSwitchCase="'blue'">bleu</div>
  <div *ngSwitchCase="'green'">vert</div>
  <div *ngSwitchDefault>Not a color</div>
</div> 
-->


<!-- ngfor 
<!-- affichage index puis couleur de la liste
<h2>liste de couleur :</h2>
<div *ngFor="let coulor of colors; index as i">
<h3>{{i}}:{{coulor}}</h3>
</div>
-->

<!-- verifie une condition -->
<!--
<h2>liste de couleur :</h2>
<div *ngFor="let coulor of colors; first as f">
<h3>{{f}}:{{coulor}}</h3>
</div>
<br>
<div *ngFor="let coulor of colors; last as l">
<h3>{{l}}:{{coulor}}</h3>
</div><br>
<div *ngFor="let coulor of colors; odd as o">
<h3>{{o}}:{{coulor}}</h3>
</div><br>
<div *ngFor="let coulor of colors; even as e">
<h3>{{e}}:{{coulor}}</h3>
</div>
-->


<!-- component interaction -->
<!--
<h3>{{"hello " + parentData}}</h3>
<h3>{{"salut "+ nom}}</h3>
<button (click)="fireEvent()">click</button>
-->
<!-- pipes -->
<h2>{{prenom}}</h2>
<h2>{{prenom | lowercase}}</h2>
<h2>{{prenom | uppercase}}</h2>
<h2>{{prenom | slice:2:5}}</h2>
<br>
<h2>{{message }}</h2>
<h2>{{message | titlecase}}</h2>
<br>
<h2>{{person | json}}</h2>
<hr>
<p>{{3.143 | number:'1.2-3'}}</p>
<p>{{3.143 | number:'3.4-5'}}</p>
<p>{{3.143 | number:'3.1-2'}}</p>
<p>{{3.1 | number:'1.2-3'}}</p>
<br>

<p>{{0.25 | percent}}</p>
<p>{{0.25 | currency}}</p>
<p>{{0.25 | currency:"EUR"}}</p>
<p>{{0.25 | currency:"EUR":"code"}}</p>

<hr>
<p>{{date}}</p>
<p>{{date | date:'short'}}</p>
<p>{{date | date:'shortDate'}}</p>
<p>{{date | date:'shortTime'}}</p>
<p>{{date | date:'medium'}}</p>
<p>{{date | date:'long'}}</p>





  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName= false;

  public color= "red";

  public colors= ["red", "blue", "green", "yellow"];

  @Input() public parentData;
  @Input('parentData') public nom;
  @Output() public childEvent = new EventEmitter();


  public prenom = "Vincent";
  public message = "Welcome in hell"
  public person = {
    "firstname": "John",
    "lastname": "Doe"
  }
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('envoi depuis l enfant')
  }

}
