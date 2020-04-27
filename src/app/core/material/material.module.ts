import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSidenavModule,
         MatToolbarModule,MatIconModule, 
         MatButtonModule, MatListModule, 
         MatMenuModule, MatFormFieldModule,
         MatInputModule, MatRippleModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ]
})
export class MaterialModule { }
