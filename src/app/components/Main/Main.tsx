import styles from './main.module.css'

const Main = () => {
    return ( 
        <main className={styles.main}>
            <section className={styles.infoLocateDate}>
                <span>Город, Страна</span>
                <p>Ср, 09 Окт &nbsp;&nbsp;&nbsp; 21.02</p>
            </section>
            <section className={styles.weatherInfo}>
                <span>10°</span>
                <p>
                    overcast <br/>
                    Feels like: 7°<br/>
                    Wind: 2 m/s <br/>
                    Humidity: 83%
                </p>
            </section>
            <section className={styles.weatherInfoNextWeek}>
                <article className={styles.article}>
                    <span>Monday</span>
                    <p>Информация о погоде</p>
                </article>
                <article className={styles.article}>
                    <span>Tuesday</span>
                    <p>Информация о погоде</p>
                </article>
                <article className={styles.article}>
                    <span>Wednesday</span> 
                    <p>Информация о погоде</p>
                </article>
            </section>
        </main>
    );
}
 
export default Main;