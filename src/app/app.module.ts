import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { CoolButtonDirective } from './directives/cool-button.directive';
import { TruncatePipe } from './pipe/truncate.pipe';
import { PhoneFormatPipe } from './pipe/phone-format.pipe';
import {ProductService} from "./services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AdvantageComponent,
    CoolButtonDirective,
    TruncatePipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
