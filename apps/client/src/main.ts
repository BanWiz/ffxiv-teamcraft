import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';
import { enableDebugTools } from '@angular/platform-browser';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const isCordovaApp = !!(<any>window).cordova;

if (environment.production) {
  enableProdMode();
}

document.addEventListener(isCordovaApp ? 'deviceready' : 'DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
    const applicationRef = module.injector.get(ApplicationRef);
    const appComponent = applicationRef.components[0];
    enableDebugTools(appComponent);
  });
});
