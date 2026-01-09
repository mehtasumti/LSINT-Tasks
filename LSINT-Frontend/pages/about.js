import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About ListAndSell</h1>

        <div className={styles.section}>
          <h2>Overview</h2>
          <p>
            ListAndSell is a full-service digital agency specializing in web design, e-commerce solutions,
            and online marketing. Based in Berlin with nationwide service across Germany, we help businesses
            achieve online success through professional, modern websites and comprehensive digital strategies.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Technology Stack</h2>
          <div className={styles.techGrid}>
            <div className={styles.techItem}>
              <h3>Frontend</h3>
              <ul>
                <li>Next.js 14</li>
                <li>React 18</li>
                <li>Axios for API calls</li>
                <li>CSS Modules</li>
              </ul>
            </div>
            <div className={styles.techItem}>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Mongoose ODM</li>
              </ul>
            </div>
            <div className={styles.techItem}>
              <h3>Security</h3>
              <ul>
                <li>JWT Authentication</li>
                <li>bcryptjs for password hashing</li>
                <li>Protected routes</li>
                <li>CORS configuration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Our Services</h2>
          <ul className={styles.featureList}>
            <li>Professional web design and development</li>
            <li>E-commerce solutions (JTL Shop, WooCommerce, Shopify)</li>
            <li>SEO optimization and Google Ads management</li>
            <li>Content marketing and marketplace optimization</li>
            <li>App development for iOS and Android</li>
            <li>Graphic design and product photography</li>
            <li>Custom programming and API integration</li>
            <li>Consulting and digital strategy</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Our Approach</h2>
          <p>
            We don't just build websites – we make them successful. With fair and transparent pricing,
            quick implementation, and hundreds of completed projects, we provide comprehensive digital
            solutions tailored to your business needs. Our team of experts ensures your online presence
            drives real results.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Locations</h2>
          <p>
            Headquartered in Berlin, we operate multiple locations across Germany including Munich,
            Potsdam, Düsseldorf, Hamburg, and Frankfurt, offering nationwide service to businesses
            of all sizes and industries.
          </p>
        </div>
      </div>
    </div>
  );
}
