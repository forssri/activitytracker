import { User } from './user';

export interface Activity {
  activityId?: string;
  user: User;
  type: string;
  value: string;
}
