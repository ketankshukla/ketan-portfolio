import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from '@/components/Image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center">
          <div className="mr-3">
            <Image
              src="/static/images/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-semibold sm:text-2xl md:text-3xl">
              <span className="text-[#FFD43B] dark:text-[#FFD43B]">Ketan Shukla</span>{' '}
              <span className="text-[#306998] dark:text-[#306998]">Portfolio</span>
            </div>
            <div className="text-sm font-medium sm:text-lg md:text-xl">
              <span className="text-[#FFD43B] dark:text-[#FFD43B]">Full Stack</span>{' '}
              <span className="text-[#306998] dark:text-[#306998]">Python Developer</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className={`block text-lg font-medium hover:opacity-80 ${
                  index % 2 === 0
                    ? 'text-[#FFD43B] dark:text-[#FFD43B]'
                    : 'text-[#306998] dark:text-[#306998]'
                }`}
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
