export interface IMoment {
  id?: number;
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  comments?: [
    {
      text: string;
      username: string;
    }
  ];
}
