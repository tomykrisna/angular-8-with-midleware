import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {environment} from '@env/environment';
import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {HomeModule} from '@app/pages/home/home.module';
import {ShellModule} from './shell/shell.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ApiService} from '@app/service/api.service';
import {AuthInterceptors} from '@app/provider/auth.interceptors';

@NgModule({
    imports: [
        BrowserModule,
        // ServiceWorkerModule.register('./ngsw-worker.js', {enabled: environment.production}),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        MaterialModule,
        CoreModule,
        SharedModule,
        ShellModule,
        HomeModule,
        HttpClientModule,
        AppRoutingModule // must be imported as the last module as it contains the fallback route
    ],
    declarations: [AppComponent],
    providers: [
        ApiService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptors,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
