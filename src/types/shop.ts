/**
 * 商铺详情
 */
export interface ShopDetail {
  id: number,
  name: string, //名称
  image: string,  //商铺图片
  rate: number, //评分
  saleNumberInMonth: number,  //月售数量
  sendBaseMoney: number,  //起送金额
  shippingFee: number,  //配送费
}