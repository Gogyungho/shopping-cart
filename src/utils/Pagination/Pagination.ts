import _ from 'lodash';
import { IItemResponse } from '@pages/products/model';

export const pagination = (items: IItemResponse, pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
