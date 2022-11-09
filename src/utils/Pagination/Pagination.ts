import _ from 'lodash';
import { IItemResponse } from '@components/Item/model/index';

export const pagination = (items: IItemResponse, pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
