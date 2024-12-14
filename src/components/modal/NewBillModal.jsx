/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// icons
import closeIcon from "../../assets/close.svg";

// components
import Button from "../Button";
// components - steps
import PriceInfoStep from "../steps/PriceInfoStep";
import ClientInfoStep from "../steps/ClientInfoStep";
import ProductInfoStep from "../steps/ProductInfoStep";

// constants
import { steps } from "../../constants/data";

// services
import { createBill } from "../../services/user";
import toast from "react-hot-toast";

function NewBillModal({ data, setData, onClose }) {
  const queryClient = useQueryClient();

  // POST
  const { mutate: createBillMutate, isPending: createBillPending } =
    useMutation({
      mutationFn: createBill,
      onSuccess: (data) => {
        queryClient.invalidateQueries(["bills"]);
        toast.success(`بارنامه به شماره ${data.data.billNumber} ایجاد گردید`);
        setData({ ...data.data });
      },
      onError: (error) => {
        console.log(error);
      },
    });

  const [currStep, setCurrStep] = useState(steps[0]);
  const [billInfoData, setBillInfoData] = useState({
    payMethod: "",
    exporterName: "",
    senderInfo: {
      name: "",
      phone: "",
      address: {
        state: null,
        city: null,
        street: "",
        alley: "",
        postalCode: "",
      },
      desc: "",
    },
    receiverInfo: {
      name: "",
      phone: "",
      address: {
        state: null,
        city: null,
        street: "",
        alley: "",
        postalCode: "",
      },
      desc: "",
    },
    productInfo: {
      productType: "",
      weight: "",
      culcWeight: "",
      count: "",
      dim: { w: "", h: "", l: "" },
      content: "",
    },
    priceInfo: {
      perKilo: "",
      shipping: "",
      service: "",
      collect: "",
      packaging: "",
      stamp: "",
      xry: "",
      representative: "",
      dispensation: "",
      tax: "",
    },
  });

  const handleClose = (event) => {
    if (event.target.id === "wrapper") {
      onClose();
      return;
    }
  };

  const clickHandler = (op) => {
    if (op === "+") {
      if (currStep.id === 3) {
        // Print Bill
        createBillMutate(billInfoData);
      } else {
        setCurrStep(steps[currStep.id + 1]);
      }
    } else {
      setCurrStep(steps[currStep.id - 1]);
    }
  };

  //   type = 0 -> sender
  //   type = 1 -> receiver
  const setupCurrStep = () => {
    switch (currStep.id) {
      case 0:
        return (
          <ClientInfoStep
            type={0}
            billInfo={billInfoData}
            setBillInfo={setBillInfoData}
          />
        );
      case 1:
        return (
          <ClientInfoStep
            type={1}
            billInfo={billInfoData}
            setBillInfo={setBillInfoData}
          />
        );
      case 2:
        return (
          <ProductInfoStep
            billInfo={billInfoData}
            setBillInfo={setBillInfoData}
          />
        );
      case 3:
        return (
          <PriceInfoStep
            billInfo={billInfoData}
            setBillInfo={setBillInfoData}
          />
        );

      default:
        return (
          <ClientInfoStep
            type={0}
            billInfo={billInfoData}
            setBillInfo={setBillInfoData}
          />
        );
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start overflow-auto no-scrollbar scroll-smooth z-[999] py-10"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col bg-white rounded-lg divide-y-2">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 py-4 px-6">
          {/* title / close button */}
          <div className="flex items-center gap-2">
            <img
              className="cursor-pointer"
              id="close-btn"
              onClick={onClose}
              src={closeIcon}
              alt="close button"
            />
            <h3 className="text-bsae text-black">بارنامه جدید</h3>
          </div>

          {/* pagiantion */}
          <div className="flex items-center gap-2">
            {steps.map((s) => (
              <div
                key={s.id}
                onClick={() => setCurrStep(s)}
                className={`cursor-pointer w-3 h-3 rounded-full custom-transition ${
                  currStep.id === s.id
                    ? "w-4 h-4 bg-primary"
                    : currStep.id > s.id
                    ? "bg-primary"
                    : "bg-unselected"
                }`}
              />
            ))}
          </div>

          {/* bill number
          <div className="flex items-center gap-2">
            <span className="text-sm text-low_important">شماره بارنامه:</span>
            <h4 className="text-base font-medium text-black">
              {currBillNum + 1}
            </h4>
          </div> */}
        </div>

        {/* body */}
        <div className="flex flex-col justify-between p-6 md:w-[600px] md:h-full mobile:h-screen">
          <h3 className="text-base font-semibold text-black">
            {currStep.value}
          </h3>

          {setupCurrStep()}
        </div>

        {/* footer */}
        <div className="flex items-center justify-end gap-4 p-4">
          {currStep.id > 0 && (
            <Button
              value="مرحله قبل"
              onlyBorder
              onClick={() => clickHandler("-")}
            />
          )}
          <Button
            value={currStep.id === 3 ? "آماده سازی جهت چاپ" : "مرحله بعد"}
            onClick={() => clickHandler("+")}
          />
        </div>
      </div>
    </div>
  );
}

export default NewBillModal;
