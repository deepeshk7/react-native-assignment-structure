export type Language = 'es' | 'en';

export interface ITranslations {
  [key: string]: {
    [key: string]: string;
  };
}