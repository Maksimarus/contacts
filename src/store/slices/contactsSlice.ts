import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import ContactsService from "../../api/ContactsService";
import { IContact } from "../../models/IContact";

export const getContacts = createAsyncThunk<IContact[]>(
  "contacts/getContacts",
  async function () {
    const response = await ContactsService.getContacts();
    return response.data;
  }
);

interface ContactsState {
  contacts: IContact[];
  contactsContainer: IContact[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  contacts: [],
  contactsContainer: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact: (state, action: PayloadAction<string | number>) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },
    addContact: (
      state,
      action: PayloadAction<{ name: string; phone: string }>
    ) => {
      state.contacts.unshift({
        id: new Date().toISOString(),
        name: action.payload.name,
        phone: action.payload.phone,
      });
    },
    filteredContacts: (state, action: PayloadAction<string>) => {
      state.contacts = state.contactsContainer.filter(
        (contact) =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          contact.phone.includes(action.payload)
      );
    },
    setPhone: (
      state,
      action: PayloadAction<{ id: string | number; phone: string }>
    ) => {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact.phone = action.payload.phone;
        }
        return contact;
      });
      state.contactsContainer = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact.phone = action.payload.phone;
        }
        return contact;
      });
    },
    setName: (
      state,
      action: PayloadAction<{ id: string | number; name: string }>
    ) => {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact.name = action.payload.name;
        }
        return contact;
      });
      state.contactsContainer = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact.name = action.payload.name;
        }
        return contact;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getContacts.fulfilled,
        (state, action: PayloadAction<IContact[]>) => {
          state.isLoading = false;
          state.contacts = action.payload;
          state.contactsContainer = action.payload;
        }
      )
      .addCase(getContacts.rejected, (state) => {
        state.isLoading = false;
        state.error = "Произошла ошибка";
      });
  },
});

export const contactActions = contactsSlice.actions;
export default contactsSlice.reducer;
