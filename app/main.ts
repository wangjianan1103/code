// import {bootstrap} from 'angular2/platform/browser';
// import {AppComponent} from './root/app.component';
// bootstrap(AppComponent);
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
