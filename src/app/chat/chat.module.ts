import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDashboardComponent } from './components/chat-dashboard/chat-dashboard.component';
import { ChatRoutes } from './chat.routing';
import { PrivateChatComponent } from './components/private-chat/private-chat.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { CreateChannelComponent } from './components/create-channel/create-channel.component';
import { SelectUserToChatComponent } from './components/select-user-to-chat/select-user-to-chat.component';
import { MaterialModule } from '../material/material.module';
import { MessageComponent } from './components/message/message.component';
import { ReceivedMessageComponent } from './components/received-message/received-message.component';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  imports: [CommonModule, ChatRoutes, MaterialModule],
  declarations: [
    ChatDashboardComponent,
    PrivateChatComponent,
    GroupChatComponent,
    CreateChannelComponent,
    SelectUserToChatComponent,
    MessageComponent,
    EditorComponent,
    ReceivedMessageComponent,
  ],
})
export class ChatModule { }
