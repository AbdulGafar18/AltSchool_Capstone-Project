import React, { useState } from 'react';
import axios from 'axios';


const UrlShortenerPage:React.FC = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleShortenUrl = async () => {
    try {
      const response = await axios.post('https://rel.ink/api/links/', { url: longUrl });
      setShortUrl(`https://rel.ink/${response.data.hashid}`);
      setError('');
    } catch (error) {
      setError('Failed to shorten URL. Please try again.');
      setShortUrl('');
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <div>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter URL to shorten"
        />
        <button className='shorten' onClick={handleShortenUrl}>Shorten</button>
      </div>
      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
      {error && <p>{error}</p>}
      
    </div>
  );
};

export default UrlShortenerPage;
