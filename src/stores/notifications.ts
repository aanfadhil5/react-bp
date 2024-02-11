import { create } from 'zustand';

export type Notification = {
  id: string;
  title: string;
  type: 'success' | 'error';
  message?: string;
};

type NotificationsStore = {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationsStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, { ...notification, id: Date.now().toString() }],
    })),
  dismissNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
