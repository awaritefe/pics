import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID UO2LJLc37A4ELNZbJkDlbYBjsUNIhzHJ1ifRDde8YnI'
  }
});