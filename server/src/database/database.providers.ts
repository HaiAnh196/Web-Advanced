import * as fs from 'fs';
import * as path from 'path';
import { STUDENT } from 'src/student/student.entity';
import { DataSource } from 'typeorm';
import { TOPICS } from '../topics/topics.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'mysql-14737a33-nglthu-4e05.k.aivencloud.com',
        port: 17237,
        username: 'avnadmin',
        password: 'AVNS_mftPAP8cG5l0Ih_cfL2',
        database: 'STUDENTSREG',
        entities: [STUDENT, TOPICS],
        synchronize: true,
        ssl: {
          ca: fs
            .readFileSync('/workspaces/nestNode/server/assets/ca.pem')
            .toString(),
        },
      });

      return dataSource.initialize();
    },
  },
];
