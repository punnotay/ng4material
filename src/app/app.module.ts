import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule,
  MdInputModule, MdIconModule, MdDialogModule,
  MdToolbarModule, MdToolbar, MdIcon,
  MdMenuModule, MdMenu, MdTabsModule, MdTab,
  MdCardModule, MdCard, MdSliderModule, MdSlider,
  MdSlideToggleModule, MdSlideToggle   }
    from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule, MdDialogModule, MdToolbarModule,
    MdMenuModule, MdTabsModule, MdCardModule, MdSliderModule, MdSlideToggleModule
  ],
  providers: [MdToolbar, MdIcon, MdMenu, MdTab, MdCard, MdSlider, MdSlideToggle],
  bootstrap: [AppComponent]
})
export class AppModule { }
