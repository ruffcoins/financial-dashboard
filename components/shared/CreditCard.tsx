import React from "react";

interface CreditCardProps {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  cardNumber,
  cardHolder,
  expirationDate,
  cvv,
}) => {
  return (
    <div className="w-full bg-gradient-to-br from-primary-900 via-primary-600 to-primary-900 p-6 rounded-xl shadow-md text-primary-100">
      <div className="mb-4">
        <div className="text-xl font-bold mb-2">Credit Card</div>
        <div className="text-primary-200">
          **** **** **** {cardNumber.slice(-4)}
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="text-sm text-primary-200">Card Holder</div>
          <div className="font-bold">{cardHolder}</div>
        </div>
        <div>
          <div className="text-sm text-primary-200">Expires</div>
          <div className="font-bold">{expirationDate}</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm text-primary-200">CVV</div>
        <div className="font-bold">{cvv}</div>
      </div>
    </div>
  );
};

export default CreditCard;
