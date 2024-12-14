/* eslint-disable react/prop-types */
function PriceInfoStep({ billInfo, setBillInfo }) {
  const handleChange = (e, keyVal) => {
    let inputValue = e.target.value;

    // Remove all non-numeric characters except dots
    inputValue = inputValue.replace(/[^0-9]/g, "");

    // Format the number with commas
    const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Update the state with the formatted value
    setBillInfo({
      ...billInfo,
      priceInfo: {
        ...billInfo.priceInfo,
        [keyVal]: formattedValue,
      },
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-2 gap-4">
        {/* per kilo */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">نرخ به کیلو</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.perKilo}
            onChange={(e) => handleChange(e, "perKilo")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* shipping */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">حمل بار</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.shipping}
            onChange={(e) => handleChange(e, "shipping")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* services */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">خدمات</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.service}
            onChange={(e) => handleChange(e, "service")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* collect */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">جمع آوری</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.collect}
            onChange={(e) => handleChange(e, "collect")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* packaging */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important"> بسته بندی</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.packaging}
            onChange={(e) => handleChange(e, "packaging")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* stamp */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">تمبر و بارنامه</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.stamp}
            onChange={(e) => handleChange(e, "stamp")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* representative */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">حق نمایندگی</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.representative}
            onChange={(e) => handleChange(e, "representative")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* dispensation */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">توزیع</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.dispensation}
            onChange={(e) => handleChange(e, "dispensation")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* xry */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">ایکس ری</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.xry}
            onChange={(e) => handleChange(e, "xry")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* tax */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">مالیات بر ارزش افزوده</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text" // Use text to allow comma formatting
            inputMode="numeric" // Mobile keyboard shows numbers
            value={billInfo.priceInfo.tax}
            onChange={(e) => handleChange(e, "tax")}
            placeholder="10.000"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            ریال
          </h5>
        </div>

        {/* payment method */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">نوع پرداخت</h5>
          <input
            className="outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text"
            value={billInfo.payMethod}
            onChange={(e) =>
              setBillInfo({
                ...billInfo,
                payMethod: e.target.value,
              })
            }
            placeholder="نقدی یا ..."
          />
        </div>

        {/* exporter name */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">نام صادر کننده</h5>
          <input
            className="outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text"
            value={billInfo.exporterName}
            onChange={(e) =>
              setBillInfo({
                ...billInfo,
                exporterName: e.target.value,
              })
            }
            placeholder="نام و نام خانوادگی..."
          />
        </div>
      </div>
    </div>
  );
}

export default PriceInfoStep;
