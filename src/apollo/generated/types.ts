/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bill = {
  __typename?: 'Bill';
  billProducts?: Maybe<Array<BillProduct>>;
  cost: Scalars['Int'];
  order: Order;
  state: BillStates;
};

export type BillProduct = {
  __typename?: 'BillProduct';
  bill: Bill;
  product: Product;
};

export enum BillStates {
  Finished = 'Finished',
  Paid = 'Paid',
  Pending = 'Pending',
  WaitingPayment = 'WaitingPayment',
}

export type CreateBillInput = {
  orderId: Scalars['ID'];
};

export type CreateBillProductInput = {
  billId: Scalars['ID'];
  productId: Scalars['ID'];
};

export type CreateOrderInput = {
  restaurantId: Scalars['ID'];
};

export type CreateOrderProductInput = {
  orderId: Scalars['ID'];
  productId: Scalars['ID'];
};

export type CreateProductInput = {
  cost: Scalars['Int'];
  restaurantId: Scalars['ID'];
  type: ProductType;
};

export type GetOrderInput = {
  id: Scalars['ID'];
};

export type GetRestaurantInput = {
  id: Scalars['ID'];
};

export type ListOrderInput = {
  restaurantId: Scalars['ID'];
};

export type ListProductInput = {
  restaurantId: Scalars['ID'];
};

export type ListRestaurantTablesInput = {
  restaurantId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBill?: Maybe<Bill>;
  createBillProduct?: Maybe<BillProduct>;
  createOrder?: Maybe<Order>;
  createOrderProduct?: Maybe<OrderProduct>;
  createProduct: Product;
};

export type MutationCreateBillArgs = {
  input: CreateBillInput;
};

export type MutationCreateBillProductArgs = {
  input: CreateBillProductInput;
};

export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};

export type MutationCreateOrderProductArgs = {
  input: CreateOrderProductInput;
};

export type MutationCreateProductArgs = {
  input: CreateProductInput;
};

export type Order = {
  __typename?: 'Order';
  bills?: Maybe<Array<Bill>>;
  orderProducts?: Maybe<Array<OrderProduct>>;
  restaurant: Restaurant;
  state: OrderStates;
  totalCost: Scalars['Int'];
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  order: Order;
  product: Product;
};

export enum OrderStates {
  Finished = 'Finished',
  PendingProductEnrollments = 'PendingProductEnrollments',
  PendingProductRegistration = 'PendingProductRegistration',
  WaitingPayment = 'WaitingPayment',
}

export type Product = {
  __typename?: 'Product';
  billProducts?: Maybe<Array<BillProduct>>;
  cost: Scalars['Int'];
  orderProducts?: Maybe<Array<OrderProduct>>;
  restaurant: Restaurant;
  type: ProductType;
};

export enum ProductType {
  Coctel = 'Coctel',
  Dessert = 'Dessert',
  Drink = 'Drink',
  Entry = 'Entry',
  MainDish = 'MainDish',
  Salad = 'Salad',
}

export type Query = {
  __typename?: 'Query';
  getOrder?: Maybe<Order>;
  getRestaurant?: Maybe<Restaurant>;
  listOrder?: Maybe<Array<Order>>;
  listProduct?: Maybe<Array<Product>>;
  listRestaurantTables?: Maybe<Array<RestaurantTable>>;
};

export type QueryGetOrderArgs = {
  input: GetOrderInput;
};

export type QueryGetRestaurantArgs = {
  input: GetRestaurantInput;
};

export type QueryListOrderArgs = {
  input: ListOrderInput;
};

export type QueryListProductArgs = {
  input: ListProductInput;
};

export type QueryListRestaurantTablesArgs = {
  input: ListRestaurantTablesInput;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Order>>;
  products?: Maybe<Array<Product>>;
  tables?: Maybe<Array<RestaurantTable>>;
};

export type RestaurantTable = {
  __typename?: 'RestaurantTable';
  restaurant: Restaurant;
  state: RestaurantTableState;
};

export enum RestaurantTableState {
  Free = 'Free',
  Used = 'Used',
}
