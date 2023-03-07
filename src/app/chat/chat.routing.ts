import { Routes, RouterModule } from '@angular/router';
import { ChatDashboardComponent } from './components/chat-dashboard/chat-dashboard.component';

const routes: Routes = [
  { path: '', component: ChatDashboardComponent },
];

export const ChatRoutes = RouterModule.forChild(routes);
