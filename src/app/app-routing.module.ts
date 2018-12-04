import { MailFoldersComponent } from "./mail-folders/mail-folders.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { InboxComponent } from "./mail-folders/inbox/inbox.component";
import { SentComponent } from "./mail-folders/sent/sent.component";
import { TrashComponent } from "./mail-folders/trash/trash.component";
import { OpenMailComponent } from "./mail-folders/open-mail/open-mail.component";
import { DraftsComponent } from "./mail-folders/drafts/drafts.component";
import { TodoComponent } from "./todo/todo.component";

const appRoutes: Routes = [
  { path: '', redirectTo: "/inbox", pathMatch: 'full' },
  { path: '', component: MailFoldersComponent },
  { path: 'inbox', component: InboxComponent},
  { path: 'inbox/:id', component: OpenMailComponent },
  { path: 'sent', component: SentComponent },
  { path: 'sent/:id', component: OpenMailComponent },
  { path: 'drafts', component: DraftsComponent },
  { path: 'drafts/:id', component: OpenMailComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'trash/:id', component: OpenMailComponent },
  { path: 'notes', component: TodoComponent },
  { path: '**', redirectTo: "/inbox", pathMatch: 'full'}
];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {}
