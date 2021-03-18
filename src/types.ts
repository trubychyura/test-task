export type IComment = {
  text: string;
  rating: number;
};

export type IProduct = {
  asin: string;
  name: string;
  img: string;
  comments: IComment[];
  [key: string]: any;
};

export type HomeProps = {
  products: IProduct[];
  loadData: () => void;
};

export type RatingProps = {
  name?: string;
  stars?: number;
};

export type StarProps = {
  value: number;
  rating: number;
  hover?: number | null;
};

export type FormProps = {
  id: string;
  handleSubmit: (id: string, data: IComment) => void;
};

export type FormikValues = {
  comment: string;
  rating: number;
};

export type ProductProps = {
  id: string;
  name: string;
  img: string;
};

export type IState = {
  products: IProduct[];
};

export type ModalProps = {
  products: IProduct[];
};

export type ParamTypes = {
  id: string;
};
