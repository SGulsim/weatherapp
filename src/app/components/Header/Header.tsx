// eslint-disable-next-line @typescript-eslint/no-unused-expressions
'use client';
import styles from './header.module.css'

interface HeaderProps {
    weathermethod: () => Promise<object>;
}

const Header: React.FC<HeaderProps> = ({ weathermethod }) => {
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const data = await weathermethod();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.icons}>
                <select className={styles.lang}>
                    <option value="Russian" className={styles.langOption} defaultValue={'RU'}>Ru</option>
                    <option value="English" className={styles.langOption}>En</option>
                    <option value="France" className={styles.langOption}>Fr</option>
                </select>
            
            <div className={styles.temp}>
                <button className={styles.tempF}>°F</button>
                <button className={styles.tempC}>°С</button>
            </div>
            
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input className={styles.input} type="text" placeholder="Найти город" />
                </form>
            </div>
        </header>
    );
};

export default Header;