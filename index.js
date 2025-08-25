const NocoBase = require('@nocobase/server');
const app = new NocoBase();

// Carrega plugin de backup
app.loadPlugin(require('@nocobase/plugin-backup'));

// Inicia o NocoBase
app.start().then(() => {
  console.log('NocoBase está rodando no Coyab!');
});
