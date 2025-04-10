import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb://localhost:27017`, {
        dbName: process.env.MONGO_DB_NAME,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
      }),
  },
];