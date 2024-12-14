import { sp } from "../helpers/helper";

/* eslint-disable react/prop-types */
function InfoRow({ info, showBillHandler }) {
  const { billNumber, senderInfo, receiverInfo, priceInfo } = info;

  return (
    <div className="grid grid-cols-9">
      <h4 className="text-tx_primary text-base p-3 col-span-1 font-semibold">
        {billNumber}
      </h4>
      <h4 className="text-tx_primary text-base p-3 col-span-1">
        {senderInfo.name}
      </h4>
      <h4 className="text-tx_primary text-base p-3 col-span-2">
        {`${senderInfo.address.state?.name}, ${senderInfo.address.city?.name}, ${senderInfo.address.street}, ${senderInfo.address.alley}, ${senderInfo.address.postalCode}`}
      </h4>
      <h4 className="text-tx_primary text-base p-3 col-span-1">
        {receiverInfo.name}
      </h4>
      <h4 className="text-tx_primary text-base p-3 col-span-2">
        {`${receiverInfo.address.state?.name}, ${receiverInfo.address.city?.name}, ${receiverInfo.address.street}, ${receiverInfo.address.alley}, ${receiverInfo.address.postalCode}`}
      </h4>
      <h4 className="text-tx_primary text-base p-3 col-span-1 flex items-center gap-2 justify-between">
        {sp(
          Object.values(priceInfo).reduce(
            (accumulator, currentValue) =>
              accumulator + +currentValue.replaceAll(",", ""),
            0
          )
        )}
      </h4>
      <button
        className="text-tx_primary text-xs font-bold p-3 col-span-1 rounded-full"
        onClick={showBillHandler}
      >
        مشاهده بارنامه
      </button>
    </div>
  );
}

export default InfoRow;
