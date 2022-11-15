import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://localhost:27018')
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(router);

    const port = 3000;
    app.listen(port,() => {
      console.log('🚀 Server is running on http://localhost:3000');
    });

  })
  .catch(() => console.log('Erro ao conectar no mongo'));

