
import { Document } from 'mongoose';

export interface Track extends Document {
    readonly name: string;
}