/* eslint-disable react/prop-types */
function ProductInfoStep({ billInfo, setBillInfo }) {
  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-2 gap-4">
        {/* product type */}
        <div className="space-y-1">
          <h5 className="text-xs text-low_important">نوع کالا</h5>
          <input
            className="outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="text"
            value={billInfo.productInfo.productType}
            onChange={(e) =>
              setBillInfo({
                ...billInfo,
                productInfo: {
                  ...billInfo.productInfo,
                  productType: e.target.value,
                },
              })
            }
            placeholder="نوع کالا ..."
          />
        </div>

        {/* weight */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">وزن</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="number"
            value={billInfo.productInfo.weight}
            onChange={(e) =>
              setBillInfo({
                ...billInfo,
                productInfo: {
                  ...billInfo.productInfo,
                  weight: e.target.value,
                },
              })
            }
            placeholder="0.1"
          />

          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            کیلوگرم
          </h5>
        </div>

        {/* culc weight */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">وزن احتساب شده</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="number"
            value={billInfo.productInfo.culcWeight}
            onChange={(e) =>
              setBillInfo({
                ...billInfo,
                productInfo: {
                  ...billInfo.productInfo,
                  culcWeight: e.target.value,
                },
              })
            }
            placeholder="0.1"
          />

          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            کیلوگرم
          </h5>
        </div>

        {/* count */}
        <div className="space-y-1 relative">
          <h5 className="text-xs text-low_important">تعداد</h5>
          <input
            className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
            type="number"
            value={billInfo.productInfo.count}
            onChange={(e) =>
              setBillInfo({
                ...billInfo,
                productInfo: {
                  ...billInfo.productInfo,
                  count: e.target.value,
                },
              })
            }
            placeholder="1"
          />
          <h5 className="absolute top-6 left-2 text-xs text-low_important">
            عدد
          </h5>
        </div>

        {/* dimensions */}
        <div>
          <h5 className="text-xs text-low_important pb-1">
            ابعاد <span className="text-[10px]">(سانتی متر)</span>
          </h5>
          <div className="flex gap-2 pb-2">
            {/* width */}
            <div className="space-y-1 relative">
              <input
                className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
                type="number"
                value={billInfo.productInfo.dim.w}
                onChange={(e) =>
                  setBillInfo({
                    ...billInfo,
                    productInfo: {
                      ...billInfo.productInfo,
                      dim: {
                        ...billInfo.productInfo.dim,
                        w: e.target.value,
                      },
                    },
                  })
                }
                placeholder="1"
              />

              <h5 className="absolute top-1.5 left-2 text-xs text-low_important">
                عرض
              </h5>
            </div>

            {/* length */}
            <div className="space-y-1 relative">
              <input
                className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
                type="number"
                value={billInfo.productInfo.dim.l}
                onChange={(e) =>
                  setBillInfo({
                    ...billInfo,
                    productInfo: {
                      ...billInfo.productInfo,
                      dim: {
                        ...billInfo.productInfo.dim,
                        l: e.target.value,
                      },
                    },
                  })
                }
                placeholder="1"
              />
              <h5 className="absolute top-1.5 left-2 text-xs text-low_important">
                طول
              </h5>
            </div>
          </div>

          {/* height */}
          <div className="space-y-1 relative">
            <input
              className="ltr text-center outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important"
              type="number"
              value={billInfo.productInfo.dim.h}
              onChange={(e) =>
                setBillInfo({
                  ...billInfo,
                  productInfo: {
                    ...billInfo.productInfo,
                    dim: {
                      ...billInfo.productInfo.dim,
                      h: e.target.value,
                    },
                  },
                })
              }
              placeholder="1"
            />

            <h5 className="absolute top-1.5 left-2 text-xs text-low_important">
              ارتفاع
            </h5>
          </div>
        </div>

        {/* content */}
        <div className="space-y-2">
          <h5 className="text-xs text-low_important">
            محتویات بنا به اظهار فرستنده
          </h5>
          {/* content */}
          <textarea
            className="outline-none border border-outline rounded-lg p-2 text-sm w-full placeholder:text-low_important no-scrollbar"
            type="text"
            value={billInfo.productInfo.content}
            onChange={(e) =>
              setBillInfo({
                ...billInfo,
                productInfo: {
                  ...billInfo.productInfo,
                  content: e.target.value,
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

export default ProductInfoStep;
