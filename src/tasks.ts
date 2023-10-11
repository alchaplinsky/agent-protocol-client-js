import { type AxiosInstance } from "axios";

interface ListOptions {
  currentPage?: number;
  pageSize?: number;
}

interface TaskCreateOptions {
  input: string;
  additionalInput?: object;
}

class TaskAPI {
  client: AxiosInstance;
  endpoint: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.endpoint = "/agent/tasks";
  }

  list = async (params: ListOptions = {}) => {
    const response = await this.client.get(this.endpoint, { params });
    return response.data;
  };

  get = async (id: string) => {
    const response = await this.client.get(`${this.endpoint}/${id}`);
    return response.data;
  };

  create = async ({ input, additionalInput }: TaskCreateOptions) => {
    const response = await this.client.post(this.endpoint, {
      input,
      additional_input: additionalInput,
    });
    return response.data;
  };
}

export default TaskAPI;
