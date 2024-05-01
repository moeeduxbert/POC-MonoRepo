import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run mobile2:start',
        production: 'nx run mobile2:preview',
      },
      ciWebServerCommand: 'nx run mobile2:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
