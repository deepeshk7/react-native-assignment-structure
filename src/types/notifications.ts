export interface INotification {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  image?: string;
  isRead: boolean;
  isSelected: boolean;
  type: NotificationType;
  hasRedDot: boolean;
}

export type NotificationType = 'news' | 'episode' | 'preference';

export interface INotificationService {
  getNotifications(): Promise<INotification[]>;
  deleteNotification(notificationId: string): Promise<{ success: boolean }>;
}

// src/types/common.ts
export type Language = 'es' | 'en';

export interface ITranslations {
  [key: string]: {
    [key: string]: string;
  };
}