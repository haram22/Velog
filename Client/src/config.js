const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const URL = `${PROXY}/v1/search/book.json`;

export const API_BASE_URL = `http://13.209.65.32:8080/${PROXY}/api/articles`;

// import { API_BASE_URL } from '../config';