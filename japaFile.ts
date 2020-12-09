import 'reflect-metadata';
import { configure } from 'japa';
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install({ handleUncaughtExceptions: false });

configure({
  files: ['build/test/**/*.spec.js'],
  before: [async () => {
    const { Ignitor } = await import('@adonisjs/core/build/src/Ignitor');
    await new Ignitor(__dirname).httpServer().start();
  }],
  after: [async () => {
  }],
  bail: false,
});
