import { useState, useEffect } from 'react';
import { NotificationsViewModel } from '../viewmodels/NotificationsViewModel';
import { NotificationModel } from '../models/NotificationModel';

interface UseNotificationsReturn {
  notifications: NotificationModel[];
  isLoading: boolean;
  isSelectionMode: boolean;
  selectedCount: number;
  bottomSheetVisible: boolean;
  toggleSelection: (notificationId: string) => void;
  enableSelectionMode: () => void;
  disableSelectionMode: () => void;
  showBottomSheet: () => void;
  hideBottomSheet: () => void;
  deleteSelected: () => Promise<void>;
  loadNotifications: () => Promise<void>;
}

export const useNotifications = (): UseNotificationsReturn => {
  const [viewModel] = useState(() => new NotificationsViewModel());
  const [notifications, setNotifications] = useState<NotificationModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSelectionMode, setIsSelectionMode] = useState<boolean>(false);
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async (): Promise<void> => {
    setIsLoading(true);
    await viewModel.loadNotifications();
    setNotifications([...viewModel.notifications]);
    setIsLoading(false);
  };

  const toggleSelection = (notificationId: string): void => {
    viewModel.toggleNotificationSelection(notificationId);
    setNotifications([...viewModel.notifications]);
    setSelectedCount(viewModel.selectedNotifications.length);
  };

  const enableSelectionMode = (): void => {
    viewModel.enableSelectionMode();
    setIsSelectionMode(true);
  };

  const disableSelectionMode = (): void => {
    viewModel.disableSelectionMode();
    setIsSelectionMode(false);
    setSelectedCount(0);
    setNotifications([...viewModel.notifications]);
  };

  const showBottomSheet = (): void => {
    viewModel.showBottomSheet();
    setBottomSheetVisible(true);
  };

  const hideBottomSheet = (): void => {
    viewModel.hideBottomSheet();
    setBottomSheetVisible(false);
  };

  const deleteSelected = async (): Promise<void> => {
    await viewModel.deleteSelectedNotifications();
    setNotifications([...viewModel.notifications]);
    setIsSelectionMode(false);
    setSelectedCount(0);
  };

  return {
    notifications,
    isLoading,
    isSelectionMode,
    selectedCount,
    bottomSheetVisible,
    toggleSelection,
    enableSelectionMode,
    disableSelectionMode,
    showBottomSheet,
    hideBottomSheet,
    deleteSelected,
    loadNotifications
  };
};