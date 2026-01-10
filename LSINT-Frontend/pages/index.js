import { useEffect, useState } from 'react';
import { authService } from '../services/authService';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to ListAndSell Agency</h1>
        <p className={styles.subtitle}>
          Professional Web Design & Online Marketing Solutions
        </p>
        {user ? (
          <div className={styles.welcomeBox}>
            <h2>Hello, {user.name}!</h2>
            <p>Welcome to your agency management dashboard.</p>
          </div>
        ) : (
          <div className={styles.ctaBox}>
            <p>Please log in to access the agency dashboard</p>
          </div>
        )}
      </div>

      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Web Design & Development</h3>
          <p>Professional and modern websites with responsive design capabilities</p>
        </div>
        <div className={styles.featureCard}>
          <h3>E-Commerce Solutions</h3>
          <p>Multichannel online shop development and flexible e-commerce platforms</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Online Marketing</h3>
          <p>SEO optimization, Google Ads, content marketing, and marketplace optimization</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Full-Service Agency</h3>
          <p>App development, graphic design, product photography, and consulting services</p>
        </div>
        <div className={styles.featureCard}>
          <h3>GitHub Actions Sumti</h3>
          <p>Testing this for GitHub Actions using for Interview Test</p>
        </div>
      </div>
    </div>
  );
}

