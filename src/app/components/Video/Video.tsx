import styles from './video.module.css'

const Video = () => {
    return (
        <video className={styles.video}
        autoPlay
        loop
        muted
    >
        <source src="/rainvideo.mp4" />
         Ваш браузер не поддерживает видео.
        </video>
    );
}
 
export default Video;