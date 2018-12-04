import { Mail } from "./mail.model";
import { BehaviorSubject } from "rxjs";

export class MailService {

  inboxMail: Mail[] = [
    {
      sender: "Facebook",
      address: "security@facebookmail.com",
      subject: "Facebook password",
      message: "Hi Nenad, Your Facebook password was changed on Saturday, Dec 3, 2018 at 14:50pm (GMT+01).",
      time: "Dec 3, 14:57h"
    },
    {
      sender: "Google",
      address: "no-reply@accounts.google.com",
      subject: "Security alert",
      message: "Your Google Account was just signed in to from a new Windows device. You're getting this email to make sure it was you.",
      time: "Oct 28, 11:01h"
    },
    {
      sender: "GitHub",
      address: "noreply@github.com",
      subject: "A personal access token has been added to your account",
      message: "Hey nenadr! A personal access token (git: https://github.com/ on NESTONESTO at 14-sep-2018 13:41) with gist and repo scopes was recently added to your account. Visit https://github.com/settings/tokens for more information.",
      time: "Sep 14, 13:36h"
    }
  ];

  sentMail: Mail[] = [
    {
      sender: "Nenad R",
      address: "nenadr@co.yu",
      subject: "Prijava",
      message: "Postovani, u prilogu Vam dostavljam motivaciono pismo i CV.",
      time: "Dec 2, 12:01h"
    },
    {
      sender: "Dea Pas",
      address: "dea@t-com.dea",
      subject: "ručak",
      message: "av av av av av av av...",
      time: "Nov 24, 14:57h"
    },
    {
      sender: "sent test",
      address: "test@testmail.com",
      subject: "Testing long long long long subject line",
      message: "test tekst tekst tekst test tekst tekst tekst",
      time: "Nov 11, 17:26h"
    }
  ];

  trashMail: Mail[] = [];
  draftsMail: Mail[] = [];
  check: boolean = false;

  private inboxMails = new BehaviorSubject<Mail[]>(this.inboxMail);
  currentInbox = this.inboxMails.asObservable();

  private sentMails = new BehaviorSubject<Mail[]>(this.sentMail);
  currentSent = this.sentMails.asObservable();

  private draftMail = new BehaviorSubject<Mail[]>(this.draftsMail);
  currentDrafts = this.draftMail.asObservable();

  getCheck() {
    return this.check;
  }

  getInboxMail(index: number) {
    return this.inboxMail[index];
  }

  getDraftMail(index: number) {
    return this.draftsMail[index];
  }

  getSentMail(index: number) {
    return this.sentMail[index];
  }

  getTrashMail(index: number) {
    return this.trashMail[index];
  }

  onDeleteMessage(index: number, path: string) {
    if (path === "inbox") {
      this.trashMail.unshift(this.inboxMail[index]);
      this.inboxMail.splice(index, 1);
      return this.inboxMail;
    } else if (path === "sent") {
      this.trashMail.unshift(this.sentMail[index]);
      this.sentMail.splice(index, 1);
      return this.sentMail;
    } else if (path === "trash") {
      this.trashMail.splice(index, 1);
      return this.trashMail;
    } else if (path === "drafts") {
      this.trashMail.unshift(this.draftsMail[index]);
      this.draftsMail.splice(index, 1);
      return this.draftsMail;
    }
  }

  mailCount(path: string) {
    if (path === "inbox") {
      if (this.inboxMail.length > 0) {
        return this.inboxMail.length;
      }
      return "";
    } else if (path === "sent") {
      if (this.sentMail.length > 0) {
        return this.sentMail.length;
      }
      return "";
    } else if (path === "trash") {
      if (this.trashMail.length > 0) {
        return this.trashMail.length;
      }
    } else if (path === "drafts") {
      if (this.draftsMail.length > 0) {
        return this.draftsMail.length;
      }
      return "";
    }
  }

  emptyTrash() {
    return this.trashMail = [];
  }
}
