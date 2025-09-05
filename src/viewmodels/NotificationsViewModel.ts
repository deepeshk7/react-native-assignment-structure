import { NotificationService } from '../services/NotificationService';
import { NotificationModel } from '../models/NotificationModel';
import { INotificationsViewModel } from './types';

export class NotificationsViewModel implements INotificationsViewModel {
  public notifications: NotificationModel[] = [];
  public selectedNotifications: string[] = [];
  public isLoading: boolean = false;
  public isSelectionMode: boolean = false;
  public bottomSheetVisible: boolean = false;

  public async loadNotifications(): Promise<void> {
    this.isLoading = true;
    try {
      this.notifications = await NotificationService.getNotifications();
    } catch (error) {
      console.error('Error loading notifications:', error);
    } finally {
      this.isLoading = false;
    }
  }

  public toggleNotificationSelection(notificationId: string): void {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.toggleSelection();
      if (notification.isSelected) {
        this.selectedNotifications.push(notificationId);
      } else {
        this.selectedNotifications = this.selectedNotifications.filter(id => id !== notificationId);
      }
    }
  }

  public enableSelectionMode(): void {
    this.isSelectionMode = true;
  }

  public disableSelectionMode(): void {
    this.isSelectionMode = false;
    this.selectedNotifications = [];
    this.notifications.forEach(n => n.isSelected = false);
  }

  public showBottomSheet(): void {
    this.bottomSheetVisible = true;
  }

  public hideBottomSheet(): void {
    this.bottomSheetVisible = false;
  }

  public async deleteSelectedNotifications(): Promise<void> {
    try {
      for (const notificationId of this.selectedNotifications) {
        await NotificationService.deleteNotification(notificationId);
      }
      this.notifications = this.notifications.filter(
        n => !this.selectedNotifications.includes(n.id)
      );
      this.disableSelectionMode();
    } catch (error) {
      console.error('Error deleting notifications:', error);
    }
  }
}
