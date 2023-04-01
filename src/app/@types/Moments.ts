export interface IMoment {
  id?: number;
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  coments?: [
    {
      text: string;
      username: string;
    }
  ];
}
