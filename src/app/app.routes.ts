import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },


    { path: "details/:id", component: DetailsComponent },
    { path: 'home', component: HomeComponent },

    {path: '**', redirectTo: ''}
];
