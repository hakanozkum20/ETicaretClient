import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeModule } from './components/home/home.module';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    HomeModule,
  ],
  exports: [HomeModule],
})
export class UiModule {}
