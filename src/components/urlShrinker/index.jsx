//
import { useState } from 'react';
//import { api } from '../../services/api';
import axios from 'axios';

export function UrlShrinker() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333', {
        website: originalUrl,
      });
      setShortenedUrl(`http://localhost:3333/${response.data.shortUrl}`);
    } catch (error) {
      console.error('Error generating shortened URL:', error);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter URL to shorten"
        />
        <button type="submit">Shorten</button>
      </form>

      {shortenedUrl && (
        <p>
          Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a>
        </p>
      )}
    </div>
  );
}
