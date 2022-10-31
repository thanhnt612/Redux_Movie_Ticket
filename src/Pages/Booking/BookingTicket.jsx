import React from "react";
import { useSelector } from "react-redux";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";

export default function BookingTicket() {
  const data = useSelector((state) => state.bookingReducer.newData);
  const renderHangGhe = () => {
    return data.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  
  return (
    <div
      className="bookingMovie"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "url('./img/bgmovie.jpg')",
        backgroundSize: "100%",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <div className="text-warning display-4">
                ĐẶT VÉ XEM PHIM CYBERLEARN.VN
              </div>
              <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                Màn hình
              </div>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <div className="screen"></div>
              </div>
              {renderHangGhe()}
            </div>
            <div className="col-4">
              <div style={{ fontSize: "35px" }} className="text-light mt-2">
                DANH SÁCH GHẾ BẠN CHỌN
              </div>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
