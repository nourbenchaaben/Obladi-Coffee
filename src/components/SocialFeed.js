import React from 'react';
import '../styles/SocialFeed.css';

const SocialFeed = () => {
  return (
    <section className="social-feed">
      <div className="container">
        <h2 className="section-title">Follow Our Story</h2>
        <p className="section-subtitle">See what's happening at Obladi Coffee daily</p>

        <div className="social-grid">
          {/* Facebook Post 1 */}
          <div className="social-card facebook-card">
            <div className="facebook-embed">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FObladiCoffee%2Fposts%2Fpfbid02nAg7yEmWrj64na1KRgoipDVeqPHytJ7FZrP6iGRS3jfduWUivwARbg74hgsS2kCul&show_text=true&width=500"
                width="100%"
                height="686"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Post 1"
              ></iframe>
            </div>
          </div>

          {/* Facebook Post 2 */}
          <div className="social-card facebook-card">
            <div className="facebook-embed">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FObladiCoffee%2Fposts%2Fpfbid02RS44XTdKewpdN91xsMUnoPnUDHfF3i3zwtcqaoXxonTkq78HcEVxGQVYHMykNLt2l&show_text=true&width=500"
                width="100%"
                height="609"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Post 2"
              ></iframe>
            </div>
          </div>

          {/* Facebook Post 3 (replacing Instagram Post 1) */}
          <div className="social-card facebook-card">
            <div className="facebook-embed">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FObladiCoffee%2Fposts%2Fpfbid02rtTuE6FQSa3foCVahiPkVYyuybgHg8p2XkXKUW8ppimR6BkVNkWvqmiZiscWff58l&show_text=true&width=500"
                width="100%"
                height="666"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Post 3"
              ></iframe>
            </div>
          </div>

          {/* Instagram Post 2 */}
          <div className="social-card instagram-card">
            <iframe
              src="https://www.instagram.com/p/CUzPftCIxTk/embed"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              title="Instagram Post 2"
            ></iframe>
          </div>

          {/* Instagram Post 3 */}
          <div className="social-card instagram-card">
            <iframe
              src="https://www.instagram.com/p/CSyvt2eIhc6/embed"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              title="Instagram Post 3"
            ></iframe>
          </div>

          {/* Instagram Post 4 */}
          <div className="social-card instagram-card">
            <iframe
              src="https://www.instagram.com/p/CMB8lxoH1vO/embed"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              title="Instagram Post 4"
            ></iframe>
          </div>
        </div>

        <div className="social-cta">
          <p>Want to see more? Follow us on social media for daily updates!</p>
          <div className="cta-buttons">
            <a
              href="https://www.instagram.com/obladicoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button instagram-btn"
            >
              <span>📸</span> Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/ObladiCoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button facebook-btn"
            >
              <span>f</span> Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
