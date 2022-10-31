import { createSlice } from "@reduxjs/toolkit";
import data from "../../Data/danhSachGhe.json";

const initialState = {
  newData: data,
  danhSachDangDat: [],
};

const bookingReducer = createSlice({
  name: "bookingReducer",
  initialState,
  reducers: {
    datGhe: (state, action) => {
      let danhSachDangDatUpdate = [...state.danhSachDangDat];
      let index = danhSachDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        danhSachDangDatUpdate.splice(index, 1);
      } else {
        danhSachDangDatUpdate.push(action.payload);
      }
      state.danhSachDangDat = danhSachDangDatUpdate;
    },

    huyGhe:(state, action) => {
      let danhSachDangDatUpdate = [...state.danhSachDangDat];
      let index = danhSachDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload
      );
      if (index !== -1) {
        danhSachDangDatUpdate.splice(index, 1);
      }
      state.danhSachDangDat = danhSachDangDatUpdate;
    }
  },
});

export const { datGhe,huyGhe } = bookingReducer.actions;
export default bookingReducer.reducer;
