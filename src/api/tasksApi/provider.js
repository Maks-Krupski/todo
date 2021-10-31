import { converter } from './converter';

class TaskApi {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  async getTask() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((responseData) => converter(responseData))
      .catch(console.log);
  }
}

export default new TaskApi({ url: 'https://jsonplaceholder.typicode.com/todos?userId=1' });
