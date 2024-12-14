const monthName = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const weekDays = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];

const numText = ["اول", "دوم", "سوم", "چهارم", "پنجم", "ششم", "هفتم", "هشتم"];

const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const convertMonthNum2MonthName = (num) => monthName[num];

const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const sp = (number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

const priceFormatter = (price) => {
  if (price / 1000000 >= 1) {
    return `${e2p(price / 1000000)} میلیون تومان`;
  } else {
    return `${e2p(price / 1000)} هزار تومان`;
  }
};

const priceFormatterOnly = (price) => {
  if (price / 1000000 >= 1) {
    return `${sp(price)} میلیون تومان`;
  } else {
    return `${sp(price)} هزار تومان`;
  }
};

const convertMonthName2MonthNum = (name) =>
  monthName.findIndex((monthName) => monthName === name);

const getCurrentDate = () => {
  const now = new Date();

  const time = `${now.getHours() > 9 ? now.getHours() : "0" + now.getHours()}:${
    now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes()
  }`;

  const date = p2e(now.toLocaleDateString("fa"));

  return { date, time };
};

const exactTime = (stdDate) => {
  const now = getCurrentDate();

  const time = { hour: stdDate.getHours(), min: stdDate.getMinutes() };
  const date = {
    year: p2e(stdDate.toLocaleDateString("fa-IR").split("/")[0]),
    month: convertMonthNum2MonthName(
      p2e(stdDate.toLocaleDateString("fa-IR").split("/")[1]) - 1
    ),
    day: p2e(stdDate.toLocaleDateString("fa-IR").split("/")[2]),
  };

  const currDate = now.date;
  const currTime = now.time;

  const currYear = currDate.split("/")[0];
  const currMonth = currDate.split("/")[1];
  const currDay = currDate.split("/")[2];

  const currMin = +currTime.split(":")[0] * 60 + +currTime.split(":")[1];
  const notifTimeMin = time.hour * 60 + time.min;

  if (
    +currYear === +date.year &&
    +currMonth === convertMonthName2MonthNum(date.month) + 1 &&
    +currDay === +date.day &&
    currMin === notifTimeMin
  ) {
    return "همین الان";
  } else if (
    +currYear === +date.year &&
    +currMonth === convertMonthName2MonthNum(date.month) + 1 &&
    +currDay === +date.day &&
    currMin > notifTimeMin
  ) {
    if ((currMin - notifTimeMin) / 60 >= 1) {
      return `${Math.floor((currMin - notifTimeMin) / 60)} ساعت پیش`;
    } else {
      return `${currMin - notifTimeMin} دقیقه پیش`;
    }
  } else if (
    +currYear === +date.year &&
    +currMonth === convertMonthName2MonthNum(date.month) + 1 &&
    +currDay > +date.day
  ) {
    if (+currDay - +date.day > 1) {
      if (Math.floor((+currDay - +date.day) / 7) >= 1) {
        return `${Math.floor((+currDay - +date.day) / 7)} هفته پیش`;
      } else {
        return `${+currDay - +date.day} روز پیش`;
      }
    } else {
      return `دیروز در ساعت ${time.hour > 9 ? time.hour : `0${time.hour}`}:${
        time.min > 9 ? time.min : `0${time.min}`
      }`;
    }
  } else if (
    +currYear === +date.year &&
    +currMonth > convertMonthName2MonthNum(date.month) + 1
  ) {
    return `${date.day} ${date.month}`;
  } else if (+currYear > +date.year) {
    return `${date.day} ${date.month} ${date.year}`;
  }
};

const dateFormatter = (date, type) => {
  if (date !== undefined && date !== null) {
    if (type === "dm") {
      const pDate = date.toLocaleDateString("fa-IR");
      const eDate = p2e(pDate);
      const customFormat = `${pDate.split("/")[2]} ${convertMonthNum2MonthName(
        +eDate.split("/")[1] - 1
      )}`;

      return customFormat;
    } else if (type === "dn") {
      return weekDays[date.getDay()];
    } else if (type === "relative") {
      return exactTime(date);
    } else {
      return date.toLocaleDateString("fa-IR");
    }
  } else return "";
};

const setStatusStyle = (orderStatus) => {
  switch (orderStatus) {
    case 0:
      return (
        <h3 className="rounded-full py-2 px-3 text-neutral-900 bg-neutral-100 text-xs whitespace-nowrap font-semibold">
          پیش‌نویس
        </h3>
      );
    case 1:
      return (
        <h3 className="rounded-full py-2 px-3 text-link_900 bg-link_100 text-xs whitespace-nowrap font-semibold">
          ثبت سفارش
        </h3>
      );
    case 2:
      return (
        <h3 className="rounded-full py-2 px-3 text-link_900 bg-link_100 text-xs whitespace-nowrap font-semibold">
          در دست طراحی
        </h3>
      );
    case 3:
      return (
        <h3 className="rounded-full py-2 px-3 text-link_900 bg-link_100 text-xs whitespace-nowrap font-semibold">
          تایید طراحی
        </h3>
      );
    case 4:
      return (
        <h3 className="rounded-full py-2 px-3 text-success_800 bg-success_100 text-xs whitespace-nowrap font-semibold">
          ساخت و ارسال
        </h3>
      );
    case 5:
      return (
        <h3 className="rounded-full py-2 px-3 text-error_900 bg-error_100 text-xs whitespace-nowrap font-semibold">
          تکمیل شده
        </h3>
      );

    default:
      return (
        <h3 className="rounded-full py-2 px-3 text-link_900 bg-link_100 text-xs whitespace-nowrap font-semibold">
          در حال تکمیل
        </h3>
      );
  }
};

const setStatusStyleNew = (orderStatus) => {
  switch (orderStatus) {
    case 0:
      return (
        <h3 className="w-full text-center rounded-full py-2 px-3 text-neutral-900 bg-neutral-100 text-xs whitespace-nowrap font-semibold">
          پیش‌نویس
        </h3>
      );
    case 1:
      return (
        <h3 className="w-full text-center rounded-full py-2 px-3 text-link_900 bg-link_100 text-xs whitespace-nowrap font-semibold">
          ثبت سفارش
        </h3>
      );
    case 2:
      return (
        <h3 className="w-full text-center rounded-full py-2 px-3 text-link_900 bg-link_100 text-xs whitespace-nowrap font-semibold">
          در دست طراحی
        </h3>
      );
    case 3:
      return (
        <h3 className="w-full text-center rounded-full py-2 px-3 text-link_900 bg-link_100 text-xs whitespace-nowrap font-semibold">
          تایید طراحی
        </h3>
      );
    case 4:
      return (
        <h3 className="w-full text-center rounded-full py-2 px-3 text-success_800 bg-success_100 text-xs whitespace-nowrap font-semibold">
          ساخت و ارسال
        </h3>
      );
    case 5:
      return (
        <h3 className="w-full text-center rounded-full py-2 px-3 text-error_900 bg-error_100 text-xs whitespace-nowrap font-semibold">
          تکمیل شده
        </h3>
      );

    default:
      return (
        <h3 className="w-full text-center rounded-full py-2 px-3 text-link_900 bg-link_100 text-xs whitespace-nowrap font-semibold">
          در حال تکمیل
        </h3>
      );
  }
};

const converNum2Text = (num) => numText[num];

const sortListPersianAlpha = (list) =>
  list.sort((a, b) => a.name.localeCompare(b.name));

const timeFormatter = (date) =>
  `${e2p(date.getHours())}:${
    date.getMinutes() >= 10
      ? e2p(date.getMinutes())
      : e2p(0) + e2p(date.getMinutes())
  }`;

function check(s) {
  var PersianOrASCII = /[آ-ی]/;
  if (s.match(PersianOrASCII) !== null) {
    return "fa";
  } else {
    return "en";
  }
}

const findNumOf2Date = (date1, date2) => {
  // Calculating the time difference
  // of two dates
  let Difference_In_Time = date2.getTime() - date1.getTime();

  // Calculating the no. of days between
  // two dates
  let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

  return Difference_In_Days;
};

export {
  sp,
  e2p,
  p2e,
  check,
  exactTime,
  dateFormatter,
  timeFormatter,
  findNumOf2Date,
  setStatusStyle,
  priceFormatter,
  converNum2Text,
  setStatusStyleNew,
  priceFormatterOnly,
  sortListPersianAlpha,
};
