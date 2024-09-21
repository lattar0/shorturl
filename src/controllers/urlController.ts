import { Request, Response } from 'express';
import { url } from '../models/UrlModel';
import { nanoid } from 'nanoid';

export class UrlController {
  static async createShortUrl(req: Request, res: Response) {
    try {
      const newShortUrl = await url.create({
        originalUrl: req.body.originalUrl,
        shortUrl: nanoid(8)
      });
      res.status(200).json({ message: 'short url created', newShortUrl });
    } catch (err) {
      res.status(500).json({ message: err.message})
    }
  }

  static async getShortUrlById(req: Request, res: Response) {
    try {
      const shortUrl = req.params.shortUrl;
      const shortUrlFound = await url.findOne({ shortUrl });

      if (!shortUrlFound) return res.send(404); 

      res.status(200).redirect(shortUrlFound.originalUrl)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }
}
