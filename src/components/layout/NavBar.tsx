'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cx from 'classnames';
import styles from '@/styles/NavBar.module.scss';

const NAV_MENU_LIST = [
  { title: '일정', href: '/intro' },
  { title: '찬조신청', href: '/contact' },
  { title: '연습현황', href: '/photos' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className={styles.navBar}>
      <h1 className="hidden">WHO</h1>
      <header className={styles.header}>
        <Link href={'/'}>
          <h2 className={styles.logoText}>WHO</h2>
        </Link>

        <ul className={cx('flex gap-4 md:gap-8 lg:gap-12')}>
          {NAV_MENU_LIST?.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href}>
                <span
                  className={cx(
                    'hover:opacity-100',
                    pathname == menu.href ? '' : 'opacity-60'
                  )}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
