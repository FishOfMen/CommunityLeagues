import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './app.routing';
import { LeaguesModule } from './views/leagues/leagues.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    RoutingModule,
    LeaguesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
