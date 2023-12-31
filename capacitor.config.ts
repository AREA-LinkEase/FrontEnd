import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.linkease.app',
  appName: 'LinkEase',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
