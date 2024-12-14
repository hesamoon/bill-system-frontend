// components
import SelectOption from "../SelectOption";

/* eslint-disable react/prop-types */
function ClientInfoStep({ type, billInfo, setBillInfo }) {
  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-2 gap-8">
        {/* name */}
        <div className="space-y-1">
          <h5 className="text-xs text-low_important">
            {type === 0 ? "نام فرستنده" : "نام گیرنده"}
          </h5>
          <input
            className="outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text"
            value={
              type === 0 ? billInfo.senderInfo.name : billInfo.receiverInfo.name
            }
            onChange={(e) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      name: e.target.value,
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      name: e.target.value,
                    },
                  })
            }
            placeholder={type === 0 ? "نام فرستنده..." : "نام گیرنده..."}
          />
        </div>

        {/* phone number */}
        <div className="space-y-1">
          <h5 className="text-xs text-low_important">شماره تماس</h5>
          <input
            className="ltr outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="number"
            value={
              type === 0
                ? billInfo.senderInfo.phone
                : billInfo.receiverInfo.phone
            }
            onChange={(e) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      phone: e.target.value,
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      phone: e.target.value,
                    },
                  })
            }
            placeholder="09..."
          />
        </div>
      </div>

      {/* address */}
      <div className="space-y-4">
        <h5 className="text-xs text-low_important">آدرس</h5>

        <div className="grid grid-cols-2 gap-8">
          <SelectOption
            type={0}
            selectedState={
              type === 0
                ? billInfo.senderInfo.address.state
                : billInfo.receiverInfo.address.state
            }
            setSelectedState={(state) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      address: { ...billInfo.senderInfo.address, state },
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      address: { ...billInfo.receiverInfo.address, state },
                    },
                  })
            }
            selectedCity={
              type === 0
                ? billInfo.senderInfo.address.city
                : billInfo.receiverInfo.address.city
            }
            setSelectedCity={(city) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      address: { ...billInfo.senderInfo.address, city },
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      address: { ...billInfo.receiverInfo.address, city },
                    },
                  })
            }
          />
          <SelectOption
            type={1}
            selectedState={
              type === 0
                ? billInfo.senderInfo.address.state
                : billInfo.receiverInfo.address.state
            }
            setSelectedState={(state) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      address: { ...billInfo.senderInfo.address, state },
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      address: { ...billInfo.receiverInfo.address, state },
                    },
                  })
            }
            selectedCity={
              type === 0
                ? billInfo.senderInfo.address.city
                : billInfo.receiverInfo.address.city
            }
            setSelectedCity={(city) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      address: { ...billInfo.senderInfo.address, city },
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      address: { ...billInfo.receiverInfo.address, city },
                    },
                  })
            }
          />

          {/* street */}
          <input
            className="outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text"
            value={
              type === 0
                ? billInfo.senderInfo.address.street
                : billInfo.receiverInfo.address.street
            }
            onChange={(e) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      address: {
                        ...billInfo.senderInfo.address,
                        street: e.target.value,
                      },
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      address: {
                        ...billInfo.receiverInfo.address,
                        street: e.target.value,
                      },
                    },
                  })
            }
            placeholder="نام خیابان را وارد کنید ..."
          />

          {/* alley */}
          <input
            className="outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text"
            value={
              type === 0
                ? billInfo.senderInfo.address.alley
                : billInfo.receiverInfo.address.alley
            }
            onChange={(e) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      address: {
                        ...billInfo.senderInfo.address,
                        alley: e.target.value,
                      },
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      address: {
                        ...billInfo.receiverInfo.address,
                        alley: e.target.value,
                      },
                    },
                  })
            }
            placeholder="نام کوچه را وارد کنید ..."
          />

          {/* postal code */}
          <input
            className={`${
              (
                type === 0
                  ? billInfo.senderInfo.address.postalCode
                  : billInfo.receiverInfo.address.postalCode
              )
                ? "ltr"
                : null
            } outline-none border border-outline rounded-lg p-2 text-sm w-full h-fit placeholder:text-low_important`}
            type="number"
            value={
              type === 0
                ? billInfo.senderInfo.address.postalCode
                : billInfo.receiverInfo.address.postalCode
            }
            onChange={(e) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      address: {
                        ...billInfo.senderInfo.address,
                        postalCode: e.target.value,
                      },
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      address: {
                        ...billInfo.receiverInfo.address,
                        postalCode: e.target.value,
                      },
                    },
                  })
            }
            placeholder="کد پستی را وارد کنید ..."
          />

          {/* extra description */}
          <textarea
            className="outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important no-scrollbar"
            type="text"
            value={
              type === 0 ? billInfo.senderInfo.desc : billInfo.receiverInfo.desc
            }
            onChange={(e) =>
              type === 0
                ? setBillInfo({
                    ...billInfo,
                    senderInfo: {
                      ...billInfo.senderInfo,
                      desc: e.target.value,
                    },
                  })
                : setBillInfo({
                    ...billInfo,
                    receiverInfo: {
                      ...billInfo.receiverInfo,
                      desc: e.target.value,
                    },
                  })
            }
            placeholder="توضیحات"
          />
        </div>
      </div>
    </div>
  );
}

export default ClientInfoStep;
