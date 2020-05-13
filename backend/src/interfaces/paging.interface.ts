import { Document } from 'mongoose';
import { PagingType } from 'src/dto/paging-type.dto';

export interface Paging extends PagingType, Document {}
