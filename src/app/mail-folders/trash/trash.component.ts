import { Component, OnInit } from "@angular/core";
import { MailService } from "src/app/shared/mail.service";
import { Mail } from "src/app/shared/mail.model";
import { Params, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-trash",
  templateUrl: "./trash.component.html",
  styleUrls: ["./trash.component.css"]
})
export class TrashComponent implements OnInit {
  trashMails: Mail[];
  id: number;

  constructor(
    private mailService: MailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.trashMails = this.mailService.trashMail;
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
  }

  onEmptyTrash() {
    this.trashMails = this.mailService.emptyTrash();
  }
}
