import { INotification, NotificationType } from '../types/notifications';

interface NotificationData {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  image?: string;
  isRead?: boolean;
  isSelected?: boolean;
  type?: NotificationType;
  hasRedDot?: boolean;
}

export class NotificationModel implements INotification {
  public id: string;
  public title: string;
  public description: string;
  public timestamp: string;
  public image?: string;
  public isRead: boolean;
  public isSelected: boolean;
  public type: NotificationType;
  public hasRedDot: boolean;

  constructor(data: NotificationData) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.timestamp = data.timestamp;
    this.image = data.image;
    this.isRead = data.isRead || false;
    this.isSelected = data.isSelected || false;
    this.type = data.type || 'news';
    this.hasRedDot = data.hasRedDot || false;
  }

  public toggleSelection(): void {
    this.isSelected = !this.isSelected;
  }

  public markAsRead(): void {
    this.isRead = true;
  }
}