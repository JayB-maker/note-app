import { useState } from "react";
import { Input } from "../..";
import Heading from "../../heading";
import "./BankDetailsModal.scss";

interface BankDetailsModal {
  setPopup?: any;
  title?: any;
  subTitile?: string;
  accountNameLabel?: string;
  bankNameLabel?: string;
  accountNumberLabel?: string;
  accountNumber?: string;
  bankName?: string;
  accountName?: string;
}

const BankDetailsModal = (props: BankDetailsModal) => {
  const {
    setPopup,
    title,
    subTitile,
    accountNameLabel,
    bankNameLabel,
    accountNumberLabel,
    accountNumber,
    accountName,
    bankName,
  } = props;

  return (
    <div className="popup">
      <div className="popup-container">
        <img
          src="https://res.cloudinary.com/dm19qay3n/image/upload/v1666364437/enterprise-dashboard/close_raaiew.png"
          alt="close"
          className="close"
          onClick={() => setPopup(false)}
        />
        <Heading className="popup-header" title={title} subTitle={subTitile} />
        <form className="add-form">
          <Input
            placeholder=" "
            label={accountNumberLabel}
            value={accountNumber}
            copy
            disabled
          />
          <Input placeholder=" " label={bankNameLabel} value={bankName} disabled />
          <Input placeholder=" " label={accountNameLabel} value={accountName} disabled />
        </form>
      </div>
    </div>
  );
};

export default BankDetailsModal;
