import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule}    from '@angular/http';

import {AppComponent}   from './app.component';
import {routing} from './app.routing';
import {HomeComponent}      from './home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}