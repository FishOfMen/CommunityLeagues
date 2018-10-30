import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    MaterialModule,
  ],
})
export class SharedModule { }
