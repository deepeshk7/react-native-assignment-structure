export interface INotificationsViewModel {
    notifications: NotificationModel[];
    selectedNotifications: string[];
    isLoading: boolean;
    isSelectionMode: boolean;
    bottomSheetVisible: boolean;
    loadNotifications(): Promise<void>;
    toggleNotificationSelection(notificationId: string): void;
    enableSelectionMode(): void;
    disableSelectionMode(): void;
    showBottomSheet(): void;
    hideBottomSheet(): void;
    deleteSelectedNotifications(): Promise<void>;
  }