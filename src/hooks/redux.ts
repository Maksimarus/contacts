import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { contactActions } from "../store/slices/contactsSlice";
import { authActions } from "../store/slices/authSlice";
import { AppDispatch } from "../store";

const allActions = {
  ...contactActions,
  ...authActions,
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
