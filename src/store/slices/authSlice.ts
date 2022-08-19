import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../../api/UserService";
import { IUser } from "../../models/IUser";

export const login = createAsyncThunk<IUser, IUser>(
  "auth/login",
  async ({ username, password }) => {
    const response = await UserService.getUsers();
    const mockUser = response.data.find(
      (user) => user.username === username && user.password === password
    );
    return mockUser as IUser;
  }
);

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  user: IUser;
  error: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  user: {} as IUser,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = {} as IUser;
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
          state.isAuth = true;
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", action.payload.username);
        } else {
          state.error = "Неверный логин или пароль";
        }
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.error = "Произошла ошибка при авторизации";
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
