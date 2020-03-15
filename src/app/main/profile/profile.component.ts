import { Component, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

import { User } from 'app/model/user.model';
import { GatewayService } from 'app/shared/gateway.service';
import { AuthService } from 'app/main/auth.service';

@Component({
    selector     : 'profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProfileComponent
{
    user: User;
    /**
     * Constructor
     */
    constructor(
        private authService: AuthService,
        private gatewayService: GatewayService
    ){ 
        this.gatewayService.getUser(authService.getToken())
        .subscribe(
            user => {
                if(user) {
                    console.log(user);
                } else {
                    console.error('Ocorreu um erro.');
                }
            },
            error => {
                console.error(error);
            }
          );
    }
}
