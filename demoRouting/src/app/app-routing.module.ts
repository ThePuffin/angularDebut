import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartementListComponent } from './departement-list/departement-list.component';

const routes: Routes = [
  //{path:'', component: DepartementListComponent}
  //chemin par defaut
  {path:'', redirectTo:'/departements', pathMatch:'full'}
  //chemin par defaut redirige pathMatch: prefixe ou full 
{path: 'departements', component: DepartementListComponent},
{path: 'employees', component: EmployeeListComponent}
// on définit les chemins departements et employees
{path: "**", component: PageNotFoundComponent}
//on défini une page si la route n'est pas trouvée doit être en dernier car lecture de haut en bas des chemins possibles
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartementListComponent, EmployeeListComponent, PageNotFoundComponent] 
//on exporte une constant avec un tableau comprenant les différents composants pour différentes routes