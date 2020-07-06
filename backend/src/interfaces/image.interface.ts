import { Document } from 'mongoose';
import { ImageDTO } from 'src/dto/image.dto';

export interface Image extends ImageDTO, Document {}
