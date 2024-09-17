import express from 'express';
import appRoutes from './routes';

const app = express();

appRoutes(app);
app.listen(1245, () => {
  console.log('Server running on PORT 1245');
});

export default app;
module.exports = app;
