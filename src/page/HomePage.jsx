import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

// components
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
import InfoRow from "../components/InfoRow";
import NewBillModal from "../components/modal/NewBillModal";
import PrintedBillModal from "../components/modal/PrintedBillModal";

// services
import { getBills } from "../services/user.js";

function HomePage() {
  const { data: billsData, isLoading: billsLoading } = useQuery({
    queryKey: ["bills"],
    queryFn: getBills,
  });

  console.log(billsData?.data);

  const [searchVal, setSearchVal] = useState("");
  const [filterType, setFilterType] = useState(0);
  const [filtredList, setFiltredList] = useState([]);
  const [billData, setBillData] = useState(null);
  const [openAddBillModal, setOpenAddBillModal] = useState(false);
  const [openPrintBillModal, setOpenPrintBillModal] = useState(false);

  useEffect(() => {
    if (searchVal) {
      const newArr = billsData?.data?.filter((bill) =>
        `${bill.billNumber}`.includes(searchVal)
      );
      setFiltredList([...newArr]);
    } else {
      if (billsData?.data) {
        setFiltredList([...billsData.data]);
      } else {
        setFiltredList([]);
      }
    }
  }, [searchVal]);

  useEffect(() => {
    if (billData) {
      setOpenAddBillModal(false);
      setOpenPrintBillModal(true);
    }
  }, [billData]);

  useEffect(() => {
    if (billsData?.data) {
      setFiltredList([...billsData.data]);
    }
  }, [billsData]);

  return (
    <>
      <div className="py-8 px-16">
        {/* search bar - add bill */}
        <div className="flex items-center gap-6">
          <SearchBox
            value={searchVal}
            onChange={setSearchVal}
            baseOn={filterType}
          />

          <Button
            value="بارنامه جدید"
            onClick={() => setOpenAddBillModal(true)}
          />
        </div>

        {/* bills list */}
        <div className="mt-5 rounded-xl shadow-[0px_2px_10px_0px_rgba(0,0,0,0.3)] divide-y divide-[#EEEEEE]">
          <div className="grid grid-cols-9">
            <h4 className="text-low_important text-sm p-3 col-span-1">
              شماره بارنامه
            </h4>
            <h4 className="text-low_important text-sm p-3 col-span-1">
              فرستنده
            </h4>
            <h4 className="text-low_important text-sm p-3 col-span-2">مبدا</h4>
            <h4 className="text-low_important text-sm p-3 col-span-1">
              گیرنده
            </h4>
            <h4 className="text-low_important text-sm p-3 col-span-2">مقصد</h4>
            <h4 className="text-low_important text-sm p-3 col-span-1">
              مبلغ کل<span className="text-[10px]">(ریال)</span>
            </h4>
            <h4 className="text-low_important text-sm p-3 col-span-1 text-center">
              جزئیات
            </h4>
          </div>
          {billsLoading ? (
            <div className="flex items-center justify-center p-2">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2 animate-spin"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
              </svg>
            </div>
          ) : filtredList.length > 0 ? (
            filtredList.map((bill) => (
              <InfoRow
                key={bill.billNumber}
                info={bill}
                showBillHandler={() => setBillData({ ...bill })}
              />
            ))
          ) : (
            <p className="text-center text-low_important p-4">
              {searchVal ? "بارنامه یافت نشد" : "بارنامه ای وجود ندارد"}
            </p>
          )}
        </div>
      </div>

      {openAddBillModal && (
        <NewBillModal
          data={billData}
          setData={setBillData}
          onClose={() => setOpenAddBillModal(false)}
        />
      )}

      {openPrintBillModal && (
        <PrintedBillModal
          data={billData}
          onClose={() => setOpenPrintBillModal(false)}
        />
      )}
    </>
  );
}

export default HomePage;
