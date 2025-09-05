// src/services/NotificationService.ts
import { NotificationModel } from '../models/NotificationModel';
import { INotificationServiceResponse } from './types';

export class NotificationService {  // Removed "implements INotificationService"
  private static getDummyNotifications(): NotificationModel[] {
    const dummyData = [
      {
        id: '1',
        title: 'Trump anuncia nuevos aranceles',
        description: 'El expresidente propone imponer aranceles del 10% a todos los productos importados',
        timestamp: '12 nov 2025 | 14:49 CST',
        image: 'trump.jpg',
        hasRedDot: false,
        type: 'news' as const
      },
      {
        id: '2',
        title: 'Nuevo episodio disponible',
        description: 'Ya puedes ver el nuevo capítulo de "Las Noticias con Erik Camacho y Yoselin Sánchez"',
        timestamp: '12 nov 2025 | 14:49 CST',
        image: 'news_show.jpg',
        hasRedDot: true,
        type: 'episode' as const
      },
      {
        id: '3',
        title: '¿Te interesan las noticias internacionales?',
        description: 'Puedes seguir los temas globales más relevantes desde tu perfil. Ajusta tus preferencias y mantente al tanto del mundo.',
        timestamp: '12 nov 2025 | 14:49 CST',
        image: 'international.jpg',
        hasRedDot: true,
        type: 'preference' as const
      },
      {
        id: '4',
        title: 'Trump anuncia nuevos aranceles',
        description: 'El expresidente propone imponer aranceles del 10% a todos los productos importados',
        timestamp: '12 nov 2025 | 14:49 CST',
        image: 'trump.jpg',
        hasRedDot: false,
        type: 'news' as const
      }
    ];

    return dummyData.map(item => new NotificationModel(item));
  }

  public static async getNotifications(): Promise<NotificationModel[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getDummyNotifications());
      }, 500);
    });
  }

  public static async deleteNotification(notificationId: string): Promise<INotificationServiceResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 300);
    });
  }
}