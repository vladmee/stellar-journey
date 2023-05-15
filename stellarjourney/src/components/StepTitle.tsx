import styles from './step-title.module.scss';

function StepTitle({
  stepNo,
  stepTitle,
}: {
  stepNo: string;
  stepTitle: string;
}) {
  return (
    <div className={styles['step-title']}>
      <span>{stepNo}</span> {stepTitle}
    </div>
  );
}

export default StepTitle;
