import { FC } from "react";

/**
 * Компонент отрисовывает биржевой элемент
 */

type ExchangeRateProps = {
  subjectBidding: string,
  price: number,
  changePerDay: string,
}

const ExchangeRate: FC<ExchangeRateProps> = ({ subjectBidding, price, changePerDay }) => {
  return (
    <div className="exchange-rate">
      <span className="exchange-rate__subjectBidding">{subjectBidding}</span>
      <span className="exchange-rate__price">{price}</span>
      <span className="exchange-rate__changePerDay">{changePerDay}</span>
    </div>
  );
}

export default ExchangeRate;