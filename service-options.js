import React from 'react';

function ServiceOptions() {
  return (
    <section className="serviceOptions">
      <div className="serviceOption">
        <img src="/client/public/images/all.jpeg.jpg" alt="Basic Service" />
        <button>Subscribe</button>
      </div>
      <div className="serviceOption">
        <img src="/client/public/images/all.jpeg.jpg" alt="Standard Service" />
        <button>Subscribe</button>
      </div>
      <div className="serviceOption">
        <img src="/client/public/images/all.jpeg.jpg" alt="Premium Service" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default ServiceOptions;
