import { Document } from 'mongoose';
import { ImageType } from 'src/dto/image-type.dto';

export interface Image extends ImageType, Document {}
