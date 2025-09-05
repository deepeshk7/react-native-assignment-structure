export interface Colors {
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    border: string;
    red: string;
    green: string;
  }
  
  export const colors: Colors = {
    primary: '#007AFF',
    secondary: '#34C759',
    danger: '#FF3B30',
    warning: '#FF9500',
    background: '#F2F2F7',
    surface: '#FFFFFF',
    text: {
      primary: '#000000',
      secondary: '#8E8E93',
      tertiary: '#C7C7CC'
    },
    border: '#C6C6C8',
    red: '#FF3B30',
    green: '#34C759'
  };