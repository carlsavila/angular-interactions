import { Routes } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { KittenCardComponent } from './kitten-card/kitten-card.component';
import { Zippy } from './zippy/zippy.component';

export const routes: Routes = [
    { path: 'list', component: ListKittenComponent},
    { path: 'new', component: CreateKittenComponent},
    { path: 'user', component: UserKittenComponent},
    { path: 'card', component: KittenCardComponent},
    { path: '', component: ListKittenComponent},
];
