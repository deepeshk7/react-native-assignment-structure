export interface INotificationModel {
    id: string;
    title: string;
    description: string;
    timestamp: string;
    image?: string;
    isRead: boolean;
    isSelected: boolean;
    type: NotificationType;
    hasRedDot: boolean;
    toggleSelection(): void;
    markAsRead(): void;
  }