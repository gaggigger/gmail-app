import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MailItemsComponent } from './mail-items/mail-items.component';
import { HeaderComponent } from './header/header.component';
import { MailFoldersComponent } from './mail-folders/mail-folders.component';
import { AppRoutingModule } from './app-routing.module';
import { OpenMailComponent } from './mail-folders/open-mail/open-mail.component';
import { MailService } from './shared/mail.service';
import { InboxComponent } from './mail-folders/inbox/inbox.component';
import { SentComponent } from './mail-folders/sent/sent.component';
import { TrashComponent } from './mail-folders/trash/trash.component';
import { NewMailComponent } from './mail-items/new-mail/new-mail.component';
import { DataService } from './shared/data.service';
import { FormsModule } from '@angular/forms';
import { DraftsComponent } from './mail-folders/drafts/drafts.component';
import { HighlightDirective } from './shared/highlight.directive';
import { TodoComponent } from './todo/todo.component';
import { ToDoService } from './shared/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    MailItemsComponent,
    HeaderComponent,
    MailFoldersComponent,
    OpenMailComponent,
    InboxComponent,
    SentComponent,
    TrashComponent,
    NewMailComponent,
    DraftsComponent,
    HighlightDirective,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [MailService, DataService, ToDoService],
  bootstrap: [AppComponent],
  entryComponents: [NewMailComponent]
})
export class AppModule { }
