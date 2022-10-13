import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { appConfig } from "../utils/helpers";

let timeoutId = null;
let prevSelectedElement = null;
const disabledItemsCount = 45;
const dateWidth = 34;
const dateHalfWidth = dateWidth / 2;
let alreadySelected = false;
const disabledItemsWidth = disabledItemsCount * dateWidth;
let endDateIndex = null;

const Calendar = ({ startDate: initialStartDate, endDate: initialEndDate, selectedDate = new Date(), onChange }) => {
  selectedDate.setHours(0, 0, 0, 0);
  initialStartDate.setHours(0, 0, 0, 0);
  initialEndDate.setHours(0, 0, 0, 0);
  const [containerLeft, setContainerLeft] = useState(null);
  const [selected, setSelected] = useState(selectedDate);
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);
  const scrollContainerRef = useRef(null);
  const {
    globalSettings: {
      language: { IsRTL },
    },
  } = appConfig;

  const onWheel = (event) => {
    event.preventDefault();
    let {
      current: { scrollWidth, scrollLeft, clientWidth },
    } = scrollContainerRef;
    let isToLeft = event.wheelDelta > 0;
    const deltaX = isToLeft ? dateWidth : -dateWidth;
    const containerHalf = clientWidth / 2;
    scrollLeft = Math.abs(scrollLeft);
    const scrollToLeft = (isToLeft && !IsRTL) || (!isToLeft && IsRTL);
    const scrollToRight = (!isToLeft && !IsRTL) || (isToLeft && IsRTL);
    const isInLastItem = scrollLeft + disabledItemsWidth + containerLeft + containerHalf >= scrollWidth;
    const isInFirstItem = containerHalf + scrollLeft - containerLeft - dateHalfWidth <= disabledItemsWidth;
    if ((scrollToRight && isInLastItem) || (scrollToLeft && isInFirstItem)) {
      return;
    }

    scrollContainerRef.current.scrollLeft -= deltaX;
  };
  const startDate = new Date(initialStartDate);
  const endDate = new Date(initialEndDate);
  const dif =
    endDate.setDate(endDate.getDate() + disabledItemsCount) -
    startDate.setDate(startDate.getDate() - disabledItemsCount);

  const dayMS = 86400000;
  const count = Math.ceil(dif / dayMS);

  const getContainerLeft = () => {
    const { current } = scrollContainerRef;
    if (!current) {
      return;
    }
    const containerHalfWidth = current.clientWidth / 2;
    const spaceFromCenter = containerHalfWidth % dateWidth;
    const itemHalfWidth = dateHalfWidth;
    const fromLeftPosition =
      spaceFromCenter > itemHalfWidth ? spaceFromCenter - itemHalfWidth : spaceFromCenter + itemHalfWidth;
    setContainerLeft(fromLeftPosition);
  };
  useEffect(() => {
    getContainerLeft();
  }, []);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    for (let i = 0; i < count - disabledItemsCount * 2 + 1; i++) {
      const startDate = new Date(initialStartDate);
      startDate.setHours(0, 0, 0, 0);
      startDate.setDate(startDate.getDate() + i);
      if (startDate.valueOf() == selectedDate.valueOf() && containerLeft !== null) {
        const initialStartDateIndex = i + disabledItemsCount + 1;
        setSelectedElementIndex(initialStartDateIndex);
        const newScrollLeft =
          initialStartDateIndex * dateWidth +
          containerLeft -
          scrollContainerRef.current.clientWidth / 2 -
          dateHalfWidth;
        scrollContainerRef.current.scrollLeft = IsRTL ? -newScrollLeft : newScrollLeft;
      }
      if (initialEndDate.valueOf() == startDate.valueOf() && containerLeft !== null) {
        endDateIndex = i + disabledItemsCount;
      }
    }
    scrollContainer.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, [containerLeft]);
  const onItemClick = (event, index, disabled) => {
    if (index - selectedElementIndex === 0) {
      return;
    }
    const { current } = scrollContainerRef;
    if (selectedElementIndex !== null && !disabled) {
      const currentItemIndex = index - selectedElementIndex;
      const newScrollLeft = currentItemIndex * dateWidth;
      current.scrollLeft = current.scrollLeft - (IsRTL ? newScrollLeft : -newScrollLeft);
      prevSelectedElement = current.children[selectedElementIndex];
      setSelectedElementIndex(index);
      const selectedDate = new Date(event.currentTarget?.dataset.date);
      setSelected(selectedDate);
      onChange(selectedDate);
      alreadySelected = true;
    }
  };
  const onScroll = (event) => {
    const { currentTarget: current } = event;
    const { scrollLeft, clientWidth, scrollWidth } = current;
    if (containerLeft !== null) {
      if (Math.abs(scrollLeft) < disabledItemsWidth - clientWidth / 2 + containerLeft + dateHalfWidth) {
        const newScrollLeft = disabledItemsWidth - clientWidth / 2 + containerLeft + dateHalfWidth;
        current.scrollLeft = IsRTL ? -newScrollLeft : newScrollLeft;
      } else if (
        scrollWidth - (Math.abs(scrollLeft) + clientWidth / 2 + 17) <
        disabledItemsWidth + containerLeft - dateWidth
      ) {
        const newScrollLeft = endDateIndex * dateWidth + containerLeft - clientWidth / 2 + 17;
        current.scrollLeft = IsRTL ? -newScrollLeft : newScrollLeft;
      }
    }

    clearTimeout(timeoutId);
    if (scrollLeft) {
      timeoutId = setTimeout(() => {
        const diff = scrollLeft % dateWidth;
        let isScrollInRight = scrollLeft + clientWidth === scrollWidth;
        let newScrollLeft =
          diff <= dateWidth / 2 || isScrollInRight ? scrollLeft - diff : scrollLeft + (dateWidth - diff);
        current.scrollLeft = newScrollLeft;
        if (containerLeft !== null) {
          let selectedElement =
            Math.floor((Math.abs(newScrollLeft) + clientWidth / 2) / dateWidth) -
            (containerLeft < dateHalfWidth ? 0 : 1);

          prevSelectedElement = current.children[selectedElement];
          setSelectedElementIndex(selectedElement);
          const selectedDate = new Date(current.children[selectedElement]?.dataset.date);
          if (!alreadySelected) {
            setSelected(selectedDate);
            if (!current.children[selectedElement]?.classList.contains("tr-calendar-item-disabled")) {
              onChange(selectedDate);
            }
          } else {
            alreadySelected = false;
          }
        }
      }, 400);
    }
  };
  const onResize = () => {
    getContainerLeft();
  };
  useEffect(() => {
    const { current } = scrollContainerRef;
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(current);
    current.addEventListener("scroll", onScroll);
    return () => {
      current.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
    };
  }, [containerLeft]);
  const containerStyles = {
    paddingRight: containerLeft,
    paddingLeft: containerLeft,
  };

  return (
    <div className="tr-calendar my-16">
      <div className="tr-calendar-active-item-wrapper" />
      <div className="tr-calendar-items-wrapper" style={containerStyles} ref={scrollContainerRef}>
        {Array.from({ length: count }).map((_, i) => {
          const date = new Date(startDate);
          date.setHours(0, 0, 0, 0);
          date.setDate(date.getDate() + i);
          const disabled = date < initialStartDate || date > initialEndDate;
          const active = selected.valueOf() == date.valueOf();
          const calendarItemCn = cn({
            "tr-calendar-item": true,
            "tr-calendar-item-disabled": disabled,
            "tr-calendar-item-active": active,
          });
          const month = date.getMonth() + 1;
          return (
            <span
              onClick={(event) => onItemClick(event, i, disabled)}
              data-date={date}
              key={i}
              className={calendarItemCn}
            >
              {date.getDate()}
              <span className="tr-calendar-month">
                {month >= 10 ? month : `0${month}`}.{date.getFullYear()}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Calendar;

// import React, { useEffect, useRef, useState } from "react";
// import cn from "classnames";
// import {appConfig} from "../utils/helpers";
//
// let timeoutId = null;
// let prevSelectedElement = null;
// const disabledItemsCount = 45;
// const dateWidth = 34;
// const dateHalfWidth = dateWidth / 2;
// let alreadySelected = false;
// const disabledItemsWidth = disabledItemsCount * dateWidth;
// let endDateIndex = null;
//
// const Calendar = ({ startDate: initialStartDate, endDate: initialEndDate, onChange, selectedDate = new Date() }) => {
//   selectedDate.setHours(0, 0, 0, 0);
//   initialStartDate.setHours(0, 0, 0, 0);
//   initialEndDate.setHours(0, 0, 0, 0);
//   const [containerLeft, setContainerLeft] = useState(null);
//   const [selected, setSelected] = useState(selectedDate);
//   const [selectedElementIndex, setSelectedElementIndex] = useState(null);
//   const scrollContainerRef = useRef(null);
//   const {
//     globalSettings: {
//       language: { IsRTL },
//     },
//   } = appConfig;
//
//   const onWheel = (event) => {
//     event.preventDefault();
//     let {
//       current: { scrollWidth, scrollLeft, clientWidth },
//     } = scrollContainerRef;
//     let isToLeft = event.wheelDelta > 0;
//     const deltaX = isToLeft ? dateWidth : -dateWidth;
//     const containerHalf = clientWidth / 2;
//     scrollLeft = Math.abs(scrollLeft);
//     const scrollToLeft = (isToLeft && !IsRTL) || (!isToLeft && IsRTL);
//     const scrollToRight = (!isToLeft && !IsRTL) || (isToLeft && IsRTL);
//     const isInLastItem = scrollLeft + disabledItemsWidth + containerLeft + containerHalf >= scrollWidth;
//     const isInFirstItem = containerHalf + scrollLeft - containerLeft - dateHalfWidth <= disabledItemsWidth;
//     if ((scrollToRight && isInLastItem) || (scrollToLeft && isInFirstItem)) {
//       return;
//     }
//
//     scrollContainerRef.current.scrollLeft -= deltaX;
//   };
//   const startDate = new Date(initialStartDate);
//   const endDate = new Date(initialEndDate);
//
//   const dif =
//     endDate.setDate(endDate.getDate() + disabledItemsCount) -
//     startDate.setDate(startDate.getDate() - disabledItemsCount);
//
//   const dayMS = 86400000;
//   const count = Math.ceil(dif / dayMS);
//
//   const getContainerLeft = () => {
//     const { current } = scrollContainerRef;
//     if (!current) {
//       return;
//     }
//     const containerHalfWidth = current.clientWidth / 2;
//     const spaceFromCenter = containerHalfWidth % dateWidth;
//     const itemHalfWidth = dateHalfWidth;
//     const fromLeftPosition =
//       spaceFromCenter > itemHalfWidth ? spaceFromCenter - itemHalfWidth : spaceFromCenter + itemHalfWidth;
//     console.log({itemHalfWidth , spaceFromCenter})
//     setContainerLeft(fromLeftPosition);
//
//   };
//   useEffect(() => {
//     getContainerLeft();
//   }, []);
//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     for (let i = 0; i < count - disabledItemsCount * 2 + 1; i++) {
//       const startDate = new Date(initialStartDate);
//       startDate.setHours(0, 0, 0, 0);
//       startDate.setDate(startDate.getDate() + i);
//       if (startDate.valueOf() == selectedDate.valueOf() && containerLeft !== null) {
//         const initialStartDateIndex = i + disabledItemsCount + 1;
//         setSelectedElementIndex(initialStartDateIndex);
//         const newScrollLeft =
//           initialStartDateIndex * dateWidth +
//           containerLeft -
//           scrollContainerRef.current.clientWidth / 2 -
//           dateHalfWidth;
//         scrollContainerRef.current.scrollLeft = IsRTL ? -newScrollLeft : newScrollLeft;
//       }
//       if (initialEndDate.valueOf() == startDate.valueOf() && containerLeft !== null) {
//         endDateIndex = i + disabledItemsCount;
//       }
//     }
//     scrollContainer.addEventListener("wheel", onWheel, { passive: false });
//     return () => {
//       scrollContainer.removeEventListener("wheel", onWheel);
//     };
//   }, [containerLeft]);
//   const onItemClick = (event, index, disabled) => {
//     if (index - selectedElementIndex === 0) {
//       return;
//     }
//     const { current } = scrollContainerRef;
//     if (selectedElementIndex !== null && !disabled) {
//       const currentItemIndex = index - selectedElementIndex;
//       const newScrollLeft = currentItemIndex * dateWidth;
//       current.scrollLeft = current.scrollLeft - (IsRTL ? newScrollLeft : -newScrollLeft);
//       prevSelectedElement = current.children[selectedElementIndex];
//       setSelectedElementIndex(index);
//       const selectedDate = new Date(event.currentTarget?.dataset.date);
//       setSelected(selectedDate);
//       onChange(selectedDate);
//       alreadySelected = true;
//     }
//   };
//   const onScroll = (event) => {
//     const { currentTarget: current } = event;
//     const { scrollLeft, clientWidth, scrollWidth } = current;
//     if (containerLeft !== null) {
//       if (Math.abs(scrollLeft) < disabledItemsWidth - clientWidth / 2 + containerLeft + dateHalfWidth) {
//         const newScrollLeft = disabledItemsWidth - clientWidth / 2 + containerLeft + dateHalfWidth;
//         current.scrollLeft = IsRTL ? -newScrollLeft : newScrollLeft;
//       } else if (
//         scrollWidth - (Math.abs(scrollLeft) + clientWidth / 2 + 17) <
//         disabledItemsWidth + containerLeft - dateWidth
//       ) {
//         const newScrollLeft = endDateIndex * dateWidth + containerLeft - clientWidth / 2 + 17;
//         current.scrollLeft = IsRTL ? -newScrollLeft : newScrollLeft;
//       }
//     }
//
//     clearTimeout(timeoutId);
//     if (scrollLeft) {
//       timeoutId = setTimeout(() => {
//         const diff = scrollLeft % dateWidth;
//         let isScrollInRight = scrollLeft + clientWidth === scrollWidth;
//         let newScrollLeft =
//           diff <= dateWidth / 2 || isScrollInRight ? scrollLeft - diff : scrollLeft + (dateWidth - diff);
//         current.scrollLeft = newScrollLeft;
//         if (containerLeft !== null) {
//           let selectedElement =
//             Math.floor((Math.abs(newScrollLeft) + clientWidth / 2) / dateWidth) -
//             (containerLeft < dateHalfWidth ? 0 : 1);
//
//           prevSelectedElement = current.children[selectedElement];
//           setSelectedElementIndex(selectedElement);
//           const selectedDate = new Date(current.children[selectedElement]?.dataset.date);
//           if (!alreadySelected) {
//             setSelected(selectedDate);
//             if (!current.children[selectedElement]?.classList.contains("tr-calendar-item-disabled")) {
//               onChange(selectedDate);
//             }
//           } else {
//             alreadySelected = false;
//           }
//         }
//       }, 400);
//     }
//   };
//   const onResize = () => {
//     getContainerLeft();
//   };
//   useEffect(() => {
//     const { current } = scrollContainerRef;
//     const resizeObserver = new ResizeObserver(onResize);
//     resizeObserver.observe(current);
//     current.addEventListener("scroll", onScroll);
//     return () => {
//       current.removeEventListener("scroll", onScroll);
//       resizeObserver.disconnect();
//     };
//   }, [containerLeft]);
//   const containerStyles = {
//     paddingRight: containerLeft,
//     paddingLeft: containerLeft,
//   };
//
//   return (
//     <div className="dg_br_calendar">
//       <div className="tr-calendar">
//         <div className="tr-calendar-active-item-wrapper" />
//         <div className="tr-calendar-items-wrapper" style={containerStyles} ref={scrollContainerRef}>
//           {Array.from({ length: count }).map((_, i) => {
//             const date = new Date(startDate);
//             date.setHours(0, 0, 0, 0);
//             date.setDate(date.getDate() + i);
//             const disabled = date < initialStartDate || date > initialEndDate;
//             const active = selected.valueOf() == date.valueOf();
//             const calendarItemCn = cn({
//               "tr-calendar-item": true,
//               "tr-calendar-item-disabled": disabled,
//               "tr-calendar-item-active": active,
//             });
//             const month = date.getMonth() + 1;
//             return (
//               <span
//                 onClick={(event) => onItemClick(event, i, disabled)}
//                 data-date={date}
//                 key={i}
//                 className={calendarItemCn}
//               >
//                 {date.getDate()}
//                 <span className="tr-calendar-month">
//                   {month >= 10 ? month : `0${month}`}.{date.getFullYear()}
//                 </span>
//               </span>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Calendar;
