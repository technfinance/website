import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
import { CorporatefdComponent } from './corporatefd/corporatefd.component';
import { RetirementcalculatorComponent } from './retirementcalculator/retirementcalculator.component';


@NgModule({
  declarations: [
    AppComponent,
    MutualfundComponent,
    CorporatefdComponent,
    RetirementcalculatorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'mutualfunds',
        component: MutualfundComponent
      },
      {
        path: 'corporatefds',
        component: CorporatefdComponent
      },
      {
        path: 'retirementcacalutalor',
        component: RetirementcalculatorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
