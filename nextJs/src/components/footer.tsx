import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
    return  <div className={styles.footer}>
                <img style={{marginLeft:'auto',marginRight:'auto'}} src={'next.svg'} alt="Sample App" width={150}/>
            </div>;
}

export default Footer;