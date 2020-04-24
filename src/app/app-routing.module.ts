import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'artists',
    loadChildren: () => import('./artists/artists.module').then( m => m.ArtistsPageModule)
  },
  {
    path: 'vincent',
    loadChildren: () => import('./vincent/vincent.module').then( m => m.VincentPageModule)
  },
  {
    path: 'pablo',
    loadChildren: () => import('./pablo/pablo.module').then( m => m.PabloPageModule)
  },
  {
    path: 'jean',
    loadChildren: () => import('./jean/jean.module').then( m => m.JeanPageModule)
  },
  {
    path: 'salvador',
    loadChildren: () => import('./salvador/salvador.module').then( m => m.SalvadorPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./Forms/music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'painting',
    loadChildren: () => import('./Forms/painting/painting.module').then( m => m.PaintingPageModule)
  },
  {
    path: 'poetry',
    loadChildren: () => import('./Forms/poetry/poetry.module').then( m => m.PoetryPageModule)
  },
  {
    path: 'form-main',
    loadChildren: () => import('./Forms/form-main/form-main.module').then( m => m.FormMainPageModule)
  },
  {
    path: 'poetry',
    loadChildren: () => import('./poetry/poetry.module').then( m => m.PoetryPageModule)
  },
  {
    path: 'abot',
    loadChildren: () => import('./abot/abot.module').then( m => m.AbotPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./Forms/music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'painting',
    loadChildren: () => import('./Forms/painting/painting.module').then( m => m.PaintingPageModule)
  },
  {
    path: 'poetry',
    loadChildren: () => import('./Forms/poetry/poetry.module').then( m => m.PoetryPageModule)
  },
  {
    path: 'form-main',
    loadChildren: () => import('./Forms/form-main/form-main.module').then( m => m.FormMainPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
