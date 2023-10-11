import { type AxiosInstance } from "axios";

interface ListOptions {
  taskId: string;
  currentPage?: number;
  pageSize?: number;
}

interface GetOptions {
  taskId: string;
  stepId: string;
}

interface CreateOptions {
  taskId: string;
  input: string;
  additionalInput?: object;
}

class StepsAPI {
  client: AxiosInstance;
  endpoint: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.endpoint = "/agent/tasks";
  }

  list = async ({ taskId, ...params }: ListOptions) => {
    const response = await this.client.get(`${this.endpoint}/${taskId}/steps`, {
      params,
    });
    return response.data;
  };

  get = async ({ taskId, stepId }: GetOptions) => {
    const response = await this.client.get(
      `${this.endpoint}/${taskId}/steps/${stepId}`
    );
    return response.data;
  };

  create = async ({ taskId, input, additionalInput }: CreateOptions) => {
    const response = await this.client.post(
      `${this.endpoint}/${taskId}/steps`,
      {
        input,
        additional_input: additionalInput,
      }
    );
    return response.data;
  };
}

export default StepsAPI;
