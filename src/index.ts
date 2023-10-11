import axios, { type AxiosInstance } from "axios";
import TaskAPI from "./tasks";
import StepsAPI from "./steps";
import ArtifactsAPI from "./artifacts";

interface ClientOptions {
  baseURL: string;
  token: string;
}

class Client {
  client: AxiosInstance;
  tasks: object;
  steps: object;
  artifacts: object;

  constructor({ baseURL, token }: ClientOptions) {
    const scope = "/ap/v1";

    this.client = axios.create({
      baseURL: `${baseURL}${scope}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    this.tasks = new TaskAPI(this.client);
    this.steps = new StepsAPI(this.client);
    this.artifacts = new ArtifactsAPI(this.client);
  }
}

export default Client;
