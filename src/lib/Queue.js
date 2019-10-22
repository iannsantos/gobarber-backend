import Bee from 'bee-queue';
import redisConfig from '../config/redis';
import CancellationMail from '../app/jobs/CancellationMail';

const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  // fila, handle (o que será executado)
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    // pra cada job vou receber os atributos dele
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      // e executar o handle (que no caso é o envio de emails)
      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  // o bee.on acima monitora o evento failed
  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();
