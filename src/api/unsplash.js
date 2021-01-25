import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID WrM8N9hQgo7e3TLJGRjDcaJ-HMm4KylKfzvBXNZsOWE '
  }
})