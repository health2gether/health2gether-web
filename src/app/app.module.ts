import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from 'app/fake-db/fake-db.service';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { LoginModule } from 'app/main/login/login.module';
import { ProfileModule } from 'app/main/profile/profile.module';
import { UICardsModule } from 'app/main/cards/cards.module';
import { RegisterModule } from 'app/main/register/register.module';
import { AuthGuard } from './main/auth-guard.service';
import { AuthService } from './main/auth.service';
import { NotAuthorizedModule } from './main/notauthorized/notauthorized.module';

const appRoutes: Routes = [
    {
        path      : 'cards',
        redirectTo: 'cards'
    },
    {
        path      : 'login',
        redirectTo: 'login'
    },
    {
        path      : 'profile',
        redirectTo: 'profile'
    },
    {
        path      : 'register',
        redirectTo: 'register'
    },
    {
        path      : 'sample',
        redirectTo: 'sample'
    },
    {
        path      : 'notauthorized',
        redirectTo: 'notauthorized'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        LoginModule,
        ProfileModule,
        SampleModule,
        UICardsModule,
        RegisterModule,
        NotAuthorizedModule
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [AuthGuard, AuthService]
})
export class AppModule
{
}
