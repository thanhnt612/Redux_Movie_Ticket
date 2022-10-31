import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { datGhe } from "../../redux/bookingReducer/bookingReducer";
export default function HangGhe(booking) {
  // console.log(booking);
  const dispatch = useDispatch();
  const danhSachDangDat = useSelector(
    (state) => state.bookingReducer.danhSachDangDat
  );
  // console.log(danhSachDangDat);
  const renderGhe = () => {
    return (
      <div>
        {booking.hangGhe.hang}
        {booking.hangGhe.danhSachGhe.map((ghe, index) => {
          let cssGheDaDat = "";
          let disable = false;
          if (ghe.daDat) {
            cssGheDaDat = "gheDuocChon";
            disable = true;
          }
          //Xet trang thai dat ghe
          let cssGheDangDat = "";
          let indexGheDangDat = danhSachDangDat.findIndex(
            (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
          );
          if (indexGheDangDat !== -1) {
            cssGheDangDat = "gheDangChon";
          }
          return (
            <button
              onClick={() => {
                const action = datGhe(ghe);
                dispatch(action);
              }}
              key={index}
              disabled={disable}
              className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
            >
              {ghe.soGhe}
            </button>
          );
        })}
      </div>
    );
  };


  const renderSoHang = () => {
    return (
      <div>
        {booking.hangGhe.danhSachGhe.map((hang, index) => {
          return <button className="rowNumber">{hang.soGhe}</button>;
        })}
      </div>
    );
  };


  const renderHangGhe = () => {
    if (booking.soHangGhe === 0) {
      return <div className="ms-3">{renderSoHang()}</div>;
    } else {
      return <div>{renderGhe()}</div>;
    }
  };


  return (
    <div
      className="text-light text-start ms-5 mt-3"
      style={{ fontSize: "25px" }}
    >
      {renderHangGhe()}
    </div>
  );
}
