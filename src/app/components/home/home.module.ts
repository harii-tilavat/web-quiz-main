import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductComponent } from 'src/app/components/home/product-list/add-product/add-product.component';
import { TeamsComponent } from './teams/teams.component';
import { AddTeamsComponent } from './teams/add-teams/add-teams.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestimonyComponent } from './testimony/testimony.component';
import { AddTestimonyComponent } from './testimony/add-testimony/add-testimony.component';
import { ResearchComponent } from './research/research.component';
import { AddResearchComponent } from './research/add-research/add-research.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AddBenefitComponent } from './benefits/add-benefit/add-benefit.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { AddTeamMemberComponent } from './meet-the-team/add-team-member/add-team-member.component';
import { PricingComponent } from './pricing/pricing.component';
import { AddPricingComponent } from './pricing/add-pricing/add-pricing.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'teams-of-shapes', component: TeamsComponent },
      { path: 'testimonial', component: TestimonyComponent },
      { path: 'ux-research', component: ResearchComponent },
      { path: 'benefits', component: BenefitsComponent },
      { path: 'meet-the-team', component: MeetTheTeamComponent },
      { path: 'pricing', component: PricingComponent },
      { path: '**', redirectTo:'dashboard', pathMatch:'full'}
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ProductListComponent,
    AddProductComponent,
    TeamsComponent,
    AddTeamsComponent,
    TestimonyComponent,
    AddTestimonyComponent,
    ResearchComponent,
    AddResearchComponent,
    BenefitsComponent,
    AddBenefitComponent,
    MeetTheTeamComponent,
    AddTeamMemberComponent,
    PricingComponent,
    AddPricingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
