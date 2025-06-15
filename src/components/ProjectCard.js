import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // optional CSS module for styling

export default function ProjectCard({ project = {} }) {
  const { imageUrl = '/profile.jpeg', title = 'Untitled Project', description = 'No description available', id = '#' } = project;

  return (
    <div className={styles.card}>
      {/* Use the image from the public folder */}
      <img src={imageUrl} alt={title} className={styles.image} />
     
    </div>
  );
}