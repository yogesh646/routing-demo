module.exports = {
    images: {
        domains: [
          'fakestoreapi.com',
            'cdn.dummyjson.com',
            "localhost",
            "2.gravatar.com",
            "0.gravatar.com",
            "secure.gravatar.com",
        ],
      remotePatterns: [
        {
          protocol: 'https',
          
          hostname: 'cdn.dummyjson.com', 
          hostname: 'www.nextsales.eu',
        },
      ],
    },
      
    theme: {
      extend: {
        animation: {
          resize: 'resize 3s infinite',
        },
        keyframes: {
          resize: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' },
          },
        },
      },
    }
  };
  