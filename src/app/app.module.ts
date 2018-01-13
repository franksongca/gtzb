import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { HomeComponent } from './components/home-component/home-component.component';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'training/:featureName',
  //   component: FeaturesComponent
  //   // children: [
  //   //   {
  //   //     path: 'fillcolor',
  //   //     component: FillInTheColorComponent
  //   //   }
  //   // ]
  // },
  // {
  //   path: 'gaming/:featureName',
  //   component: FeaturesComponent
  // },
  // {
  //   path: 'testing/:featureName',
  //   component: FeaturesComponent
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
