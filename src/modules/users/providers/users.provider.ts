import { Mongoose } from 'mongoose';
import { UsersSchema } from '../schemas/user.schema';

export const UsersProvider = [
    {
      provide: 'USERS_MODEL',
      useFactory: (mongoose: Mongoose) =>
        mongoose.model('users', UsersSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];