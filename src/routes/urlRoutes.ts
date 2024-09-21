import { UrlController } from '../controllers/urlController'
import express from 'express';

export const urlRoutes = express.Router();

urlRoutes.get('/:shortUrl', UrlController.getShortUrlById)
urlRoutes.post('/create', UrlController.createShortUrl)
