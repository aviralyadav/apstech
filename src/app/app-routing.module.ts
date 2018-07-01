import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import { LoginAuthGuard } from "./auth/login-auth-guard";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent, canActivate: [LoginAuthGuard] },
    { path: 'services', component: ServicesComponent },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}