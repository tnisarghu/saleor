/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductFragment
// ====================================================

export interface ProductFragment_thumbnail {
  __typename: "Image";
  url: string;
}

export interface ProductFragment_availability {
  __typename: "ProductAvailability";
  available: boolean | null;
}

export interface ProductFragment_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductFragment_productType {
  __typename: "ProductType";
  id: string;
  name: string;
}

export interface ProductFragment {
  __typename: "Product";
  id: string;
  name: string;
  thumbnail: ProductFragment_thumbnail | null;
  availability: ProductFragment_availability | null;
  price: ProductFragment_price | null;
  productType: ProductFragment_productType;
}
