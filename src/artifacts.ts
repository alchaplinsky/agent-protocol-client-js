import { type AxiosInstance } from "axios";

interface ListOptions {
  taskId: string;
  currentPage?: number;
  pageSize?: number;
}

interface GetOptions {
  taskId: string;
  artifactId: string;
}

interface CreateOptions {
  taskId: string;
  file: string;
  relativePath: object;
}

class ArtifactsAPI {
  client: AxiosInstance;
  endpoint: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.endpoint = "/agent/tasks";
  }

  list = async ({ taskId, ...params }: ListOptions) => {
    const response = await this.client.get(
      `${this.endpoint}/${taskId}/artifacts`,
      {
        params,
      }
    );
    return response.data;
  };

  get = async ({ artifactId, taskId }: GetOptions) => {
    const response = await this.client.get(
      `${this.endpoint}/${taskId}/artifacts/${artifactId}`
    );
    return response.data;
  };

  create = async ({ taskId, file, relativePath }: CreateOptions) => {
    const response = await this.client.post(
      `${this.endpoint}/${taskId}/artifacts`,
      {
        file,
        relative_path: relativePath,
      }
    );
    return response.data;
  };
}

export default ArtifactsAPI;
