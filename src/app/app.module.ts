import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { HomeComponent } from './pages/home/home.component'
import { FindComponent } from './pages/find/find.component'
import { LeaseComponent } from './pages/lease/lease.component'
import { LoginRegisterComponent } from './pages/login-register/login-register.component'
import { RegisterComponent } from './pages/register/register.component'
import { HttpClientModule } from '@angular/common/http'
import { AdminComponent } from './pages/admin/admin.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxDropzoneModule } from 'ngx-dropzone'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FindComponent,
    LeaseComponent,
    LoginRegisterComponent,
    RegisterComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
