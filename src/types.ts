export type IComment = {
  text: string;
  rating: number;
};

export interface IProduct {
  asin: string;
  name: string;
  img: string;
  comments: IComment[];
  [key: string]: any;
}
