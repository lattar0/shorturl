import mongoose from 'mongoose';

interface IUrl {
  originalUrl: string;
  shortUrl: string;
}

const urlSchema = new mongoose.Schema<IUrl>({
  originalUrl: {
    type: String,
    required: true,
    trim: true,
    match: [
      /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
      'Please provide a valid URL.'
    ] 
  },

  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
}, { versionKey: false });

export const url = mongoose.model<IUrl>('urls', urlSchema);
