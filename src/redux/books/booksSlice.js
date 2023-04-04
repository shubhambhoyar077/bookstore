import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const BOOKSTOREID = 'U4HmerEPXvxyMCBtJZNQ';
const TESTID = 'KhuwCnkXChim3ddNyljw';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${TESTID}/books`;

const initialState = {
  books: [],
  isLoading: true,
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== itemId),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const bookList = action.payload;
        const newBookList = [];
        Object.keys(bookList).forEach((book) => newBookList.push({
          item_id: book,
          title: bookList[book][0].title,
          author: bookList[book][0].author,
        }));
        return ({
          ...state,
          books: newBookList,
          isLoading: false,
        });
      })
      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
