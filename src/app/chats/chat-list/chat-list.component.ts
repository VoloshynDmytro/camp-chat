import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from '../shared/chat.model';

@Component({
  selector: 'ct-chat-list',
  styleUrls: ['./chat-list.component.css'],
  templateUrl: './chat-list.component.html'
})

export class ChatListComponent implements OnInit {

  @Input() chats: Promise<Chat[]>;

  constructor(private router: Router) {}

  ngOnInit() {

  }

  select(chat: Chat) {
    // Navigate with relative link
    this.router.navigate(['chat', chat.id])
  }

}
