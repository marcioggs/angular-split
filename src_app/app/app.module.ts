import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './component/app.component';
import { PetitionSplitPaneComponent } from './component/petition-split-pane/petitionSplitPane.route.component';


const routes = [{
    path: '', component: PetitionSplitPaneComponent,
}];

@NgModule({
    declarations: [
        AppComponent,
        PetitionSplitPaneComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        AngularSplitModule.forRoot(),
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
