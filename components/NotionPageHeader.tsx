import * as React from 'react'
// import { useRouter } from 'next/router'
import Link from 'next/link'

import * as types from 'notion-types'
// import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
// import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
// import { Header, Search } from 'react-notion-x'
// import { isSearchEnabled, navigationStyle } from '@/lib/config'
import cs from 'classnames'
import { Header } from 'react-notion-x'

import { navigationStyle } from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? (
        <svg className='w-7 h-7' fill='none' viewBox='0 0 24 24'>
          <circle
            cx='12'
            cy='12'
            r='3.25'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
          ></circle>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M12 2.75V4.25'
          ></path>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M17.25 6.75L16.0659 7.93416'
          ></path>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M21.25 12.0001L19.75 12.0001'
          ></path>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M17.25 17.2501L16.0659 16.066'
          ></path>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M12 19.75V21.25'
          ></path>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M7.9341 16.0659L6.74996 17.25'
          ></path>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M4.25 12.0001L2.75 12.0001'
          ></path>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M7.93405 7.93423L6.74991 6.75003'
          ></path>
        </svg>
      ) : (
        <svg className='w-7 h-7' fill='none' viewBox='0 0 24 24'>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z'
          ></path>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z'
          ></path>
        </svg>
      )}
    </div>
  )
}

// function NavItem({ href, text }) {
//   const router = useRouter();
//   const isActive = router.asPath === href;

//   return (
//     <Link href={href} passHref>
//       <span
//         className={`${
//           isActive
//             ? 'font-bold text-teal-500 dark:text-teal-400'
//             : 'font-normal text-gray-500 dark:text-gray-400'
//         } 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all`}
//       >
//         {text}
//       </span>
//     </Link>
//   );
// }

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        {/* <Breadcrumbs block={block} rootOnly={true} /> */}

        <div className='notion-nav-header-rhs breadcrumbs flex'>
          <ul className='justify-center items-center flex'>
            <li className='mx-2'>
              <Link href='https://kmsiugm.com' passHref>
                <span className='hover:text-teal-400 dark:hover:text-teal-500'>
                  Beranda
                </span>
              </Link>
            </li>
            <li className='mx-2'>
              <Link href='/' passHref>
                <span className='hover:text-teal-400 dark:hover:text-teal-500'>
                  Blog
                </span>
              </Link>
            </li>
          </ul>
          <ToggleThemeButton />

          {/* {isSearchEnabled && <Search block={block} title={null} />} */}
        </div>
      </div>
    </header>
  )
}
