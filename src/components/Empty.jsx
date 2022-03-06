import styles from './Empty.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Empty() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <div className={styles.empty}>No results</div>;
}
