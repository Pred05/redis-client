import React from 'react';
import * as redis from 'redis';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const redisClient = redis.createClient({ host: 'localhost' });

    redisClient.on('error', (err) => {
      console.log('Error {}', err);
    });

    this.state = { redis: redisClient };
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
          </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    );
  }
}
