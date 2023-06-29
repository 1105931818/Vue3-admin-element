import request from '@/utils/request';
import { TrademarkRes } from '@/utils/type';

enum API {
  TRADEMARK_URL = 'admin/product/baseTrademark/',
}

export const reqTrademark = (page: number, limit: number) =>
  request.get<TrademarkRes>(API.TRADEMARK_URL + `${page}/${limit}`);
