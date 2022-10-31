import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { huyGhe } from "../../redux/bookingReducer/bookingReducer";

export default function ThongTinDatGhe() {
  const dispatch = useDispatch();
  const danhSachDangDat = useSelector(
    (state) => state.bookingReducer.danhSachDangDat
  );

  return (
    <div>
      <div className="mt-5">
        <button className="gheDuocChon"></button>
        <span className="text-light" style={{ fontSize: "30px" }}>
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon"></button>
        <span className="text-light" style={{ fontSize: "30px" }}>
          Ghế đang đặt
        </span>
        <br />
        <button className="ghe" style={{ marginLeft: 0 }}></button>
        <span
          className="text-light"
          style={{ fontSize: "30px", marginLeft: 0 }}
        >
          Ghế chưa đặt
        </span>
      </div>
      <div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "30px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="text-warning">
              {danhSachDangDat.map((book, index) => {
                return (
                  <tr key={index}>
                    <td>{book.soGhe}</td>
                    <td>{book.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          const action = huyGhe(book.soGhe);
                          dispatch(action);
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td>Tổng cộng</td>
                <td>
                  {danhSachDangDat.reduce((total, book) => {
                    return (total += book.gia);
                  }, 0).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
