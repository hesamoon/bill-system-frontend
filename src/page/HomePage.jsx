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
          {filtredList.length > 0 ? (
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
