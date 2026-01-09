import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { authService } from '../services/authService';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, [router.pathname]);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    router.push('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">ListAndSell Agency</Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>
              About Us
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/users" className={router.pathname === '/users' ? styles.active : ''}>
                  Team
                </Link>
              </li>
              <li className={styles.userInfo}>
                <span>{user.name}</span>
              </li>
              <li>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">
                <button className={styles.loginBtn}>Login</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
