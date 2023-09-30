/* 
Generic type helps you create type helpers and type functions so that you can create other types.
*/

// Pass types to other types
type GenericType<TData> = {
  data: TData;
};

type Example1 = GenericType<{
  firstName: string;
}>;

type Example2 = GenericType<string>;
type Example3 = GenericType<number>;