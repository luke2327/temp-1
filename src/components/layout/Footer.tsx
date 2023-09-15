import cx from 'classnames';
import styles from '@/styles/layout.module.scss';
import { INFO_ADDRESS, INFO_INSTA, INFO_PHONE } from '@/config';

export default function Footer() {
  return (
    <footer
      className={cx(
        styles.footer,
        'flex justify-center w-full px-8 py-6 md:py-12 bg-gray-200'
      )}
    >
      <div className="max-w-[78rem] w-full flex flex-col justify-start items-start row-gap-4">
        <p className={styles.footerHeader}>WHO</p>
        <p className={cx(styles.footerBody, 'flex flex-col')}>
          <span>
            인스타 : {INFO_INSTA} | 연락처 : {INFO_PHONE}
          </span>
          <span>주소 : {INFO_ADDRESS}</span>
        </p>
        <p className={styles.footerFooter}>
          Copyright ⓒ Penguin Coding, mute_s.x. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
