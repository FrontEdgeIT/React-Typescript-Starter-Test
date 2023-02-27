export type CardProps =
  | {
      id: number;
      title: string;
      description: string;
      url: string;
    }[]
  | null;

export type SetAction<T> = React.Dispatch<React.SetStateAction<T>>;
export type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement>;

export type ContextValues<T> = {
  data: T | null;
  setData: SetAction<null | T>;
  loading: boolean;
  setLoading: SetAction<boolean>;
  error: string;
  setError: SetAction<string>;
};

export type GetList = {
  setData: SetAction<null | CardProps>;
  setLoading: SetAction<boolean>;
  setError: SetAction<string>;
  list: string;
};

export type DeleteItem = GetList & { e: ButtonMouseEvent };
