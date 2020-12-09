import { Schema, model, Document, SchemaTypes } from 'mongoose'

export interface User {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  userDNI: number;
  email: string;
  isActive: boolean;
}

export interface UserDocument extends Document, User { }

const UserSchema = new Schema({
  userName: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
    maxlength: 100,
    lowercase: true,
    trim: true,
  },
  password: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
    maxlength: 100,
    lowercase: true,
    trim: true,
  },
  firstName: {
    type: SchemaTypes.String,
    required: true,
    unique: false,
    maxlength: 100,
    lowercase: false,
    trim: false,
  },
  lastName: {
    type: SchemaTypes.String,
    required: true,
    unique: false,
    maxlength: 100,
    lowercase: false,
    trim: false,
  },
  userDNI: {
    type: SchemaTypes.Number,
    required: true,
    unique: true,
  },
  email: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
    maxlength: 100,
    lowercase: true,
    trim: true,
  },
  isActive: {
    type: SchemaTypes.Boolean,
    required: true,
    default: true,
  },
}).index({ useDNI: 1, userName: 1, email: 1 })

export const UserModel = model<UserDocument>(
  'User',
  UserSchema,
)
