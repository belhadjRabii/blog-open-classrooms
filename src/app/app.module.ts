import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// importer les modules de routes
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './item/item.component';
import { PostService } from './services/post.services';
import { UserService } from './services/user.services';
import { NavbarComponent } from './navbar/navbar.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ConnectUserComponent } from './connect-user/connect-user.component';
import {ActivateRoutesServices} from "./services/activate.routes.services";
import {DeactivateRoutesServices} from "./services/deactivate.routes.services";
import { PaginationComponent } from './pagination/pagination.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  // route de connexion c'est la route par defaut
  { path: 'connectUser',
    canActivate:[DeactivateRoutesServices],
    component: ConnectUserComponent },
    // route de liste des posts
  { path: 'posts',
    canActivate :[ActivateRoutesServices],
    component: ListItemComponent },
  // route de new Post
  { path: 'newPost',
    canActivate :[ActivateRoutesServices],
    component: NewPostComponent },
    // route de edit post
  { path: 'editPost/:id',
    canActivate :[ActivateRoutesServices],
    component: EditPostComponent },
    // route new user
  { path: 'newUser',
    canActivate:[DeactivateRoutesServices],
    component: NewUserComponent },
   // about application
  { path: 'aboutApp',
    component: AboutComponent },
   // route vide -> revenir à la liste de posts
  { path: '',
    redirectTo: 'connectUser',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ItemComponent,
    NavbarComponent,
    NewPostComponent,
    PageNotFoundComponent,
    EditPostComponent,
    NewUserComponent,
    ConnectUserComponent,
    PaginationComponent,
    AboutComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
// Injection de service
  providers: [
    PostService,
    UserService,
    ActivateRoutesServices,
    DeactivateRoutesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
