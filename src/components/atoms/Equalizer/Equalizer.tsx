import styles from "./Equalizer.module.css";

interface IEqualizerProps {
  className?: string;
}

export default function Equalizer({ className }: IEqualizerProps) {
  return (
    <div
      className={`flex justify-center items-end size-6 gap-[10%] *:bg-primary ${className}`}
    >
      <div className={`${styles.eq} ${styles.eq1} w-[12%] h-[30%]`}></div>
      <div className={`${styles.eq} ${styles.eq2} w-[12%] h-[60%]`}></div>
      <div className={`${styles.eq} ${styles.eq3} w-[12%] h-[37%]`}></div>
    </div>
  );
}
