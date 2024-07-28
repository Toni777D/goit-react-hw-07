import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66a4c7895dc27a3c1909ca79.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", 
    async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContacts, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", newContacts);
        return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
            // return {id: contactId};
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)