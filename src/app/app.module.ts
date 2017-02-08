import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { List } from '../pages/list/list';

@NgModule({
  declarations: [
    MyApp,
    Home,
    List
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    List
  ],
  providers: [
	Storage,
	{provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
