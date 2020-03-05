import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { NotAuthorizedComponent } from 'app/main/notauthorized/notauthorized.component';

const routes = [
    {
        path     : 'notauthorized',
        component: NotAuthorizedComponent
    }
];

@NgModule({
    declarations: [
        NotAuthorizedComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        FuseSharedModule
    ]
})
export class NotAuthorizedModule
{
}
