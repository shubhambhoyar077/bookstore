import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKSTOREID = 'U4HmerEPXvxyMCBtJZNQ';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${BOOKSTOREID}/books`;

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk('books/postBook', async (book) => {
  try {
    const response = await axios.post(url, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    const response = await axios.delete(`${url}/${bookId}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  books: [],
  isLoading: true,
  isBookAdded: true,
  idBookDeleted: true,
};

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
      }))
      .addCase(postBook.pending, (state) => ({
        ...state,
        isBookAdded: false,
      }))
      .addCase(postBook.fulfilled, (state) => ({
        ...state,
        isBookAdded: true,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        idBookDeleted: false,
      }))
      .addCase(deleteBook.fulfilled, (state) => ({
        ...state,
        idBookDeleted: true,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
