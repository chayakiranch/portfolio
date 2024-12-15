<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'; 
>>>>>>> origin/Homepage
import './HomePage.css'; // CSS for styling

const posts = [
  {
    title: '8 Reasons Why WhatsApp Was Able to Support 50 Billion Messages a Day With Only 32 Engineers',
    date: 'AUG 27, 2023',
    author: 'NEO KIM',
    duration: '6 minutes',
<<<<<<< HEAD
    image: '/path-to-your-image/whatsapp.png',
=======
    image: '/images/posts/whatsapp.png',
>>>>>>> origin/Homepage
  },
  {
    title: 'How PayPal Was Able to Support a Billion...',
    date: 'DEC 26, 2023',
    author: 'NEO KIM',
<<<<<<< HEAD
    image: '/path-to-your-image/paypal.png',
=======
    image: '/images/posts/whatsapp.png',
>>>>>>> origin/Homepage
  },
  {
    title: 'How YouTube Was Able to Support 2.49 Billion Users...',
    date: 'MAY 31',
    author: 'NEO KIM',
<<<<<<< HEAD
    image: '/path-to-your-image/youtube.png',
=======
    image: '/images/posts/whatsapp.png',
>>>>>>> origin/Homepage
  },
  {
    title: 'How Uber Computes ETA at Half a Million Requests p...',
    date: 'DEC 3, 2023',
    author: 'NEO KIM',
<<<<<<< HEAD
    image: '/path-to-your-image/uber.png',
=======
    image: '/images/posts/whatsapp.png',
>>>>>>> origin/Homepage
  },
  {
    title: 'How Stripe Prevents Double Payment Using...',
    date: 'MAY 9',
    author: 'NEO KIM',
<<<<<<< HEAD
    image: '/path-to-your-image/stripe.png',
=======
    image: '/images/posts/whatsapp.png',
>>>>>>> origin/Homepage
  },
];

const HomePage = () => {
  return (
    <div className="home-container">
<<<<<<< HEAD
      <h1 className="home-title">System Design Newsletter</h1>
=======
>>>>>>> origin/Homepage
      <div className="main-post">
        <img src={posts[0].image} alt="Main Post" className="main-post-image" />
        <div className="main-post-details">
          <h2 className="main-post-title">{posts[0].title}</h2>
          <p>
            #{1} Learn More - Awesome WhatsApp Engineering ({posts[0].duration})
          </p>
          <span>
            {posts[0].date} - {posts[0].author}
          </span>
        </div>
      </div>

      <section className="most-popular">
        <h3>Most Popular</h3>
        <div className="popular-posts">
          {posts.slice(1).map((post, index) => (
            <div key={index} className="popular-post">
              <img src={post.image} alt={post.title} className="popular-post-image" />
              <h4 className="popular-post-title">{post.title}</h4>
              <p className="popular-post-meta">
                {post.date} - {post.author}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
