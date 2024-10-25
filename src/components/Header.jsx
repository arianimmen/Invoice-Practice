function Header() {
  return (
    <div className="flex justify-between w-full items-center mb-8 md:mb-9 px-2 md:px-7 relative mt-4 md:mt-0">
      {/* Header-left Section */}
      <div className="flex flex-col gap-y-1 text-slate-800">
        <h1 className="font-bold text-2xl md:text-3xl">BRIX Agency</h1>
        <p className="text-xs ">12345 6789 Us00001</p>
      </div>
      {/* Header-right Section */}
      <div>
        {/* icon */}
        <svg
          width="63 "
          height="64"
          viewBox="0 0 63 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M54.2433 17.9072C59.0797 17.9072 63.0004 13.9886 63.0004 9.15478C63.0004 4.32095 59.0797 0.402344 54.2433 0.402344C49.407 0.402344 45.4863 4.32095 45.4863 9.15478C45.4863 13.9886 49.407 17.9072 54.2433 17.9072Z"
            fill="#FF2D33"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M54.2433 40.8721C59.0797 40.8721 63.0004 36.9535 63.0004 32.1197C63.0004 27.2857 59.0797 23.3672 54.2433 23.3672C49.407 23.3672 45.4863 27.2857 45.4863 32.1197C45.4863 36.9535 49.407 40.8721 54.2433 40.8721Z"
            fill="#D53D5C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M54.2433 63.8369C59.0797 63.8369 63.0004 59.9184 63.0004 55.0846C63.0004 50.2506 59.0797 46.332 54.2433 46.332C49.407 46.332 45.4863 50.2506 45.4863 55.0846C45.4863 59.9184 49.407 63.8369 54.2433 63.8369Z"
            fill="#815EAD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.9425 40.8721C36.779 40.8721 40.6996 36.9535 40.6996 32.1197C40.6996 27.2857 36.779 23.3672 31.9425 23.3672C27.1062 23.3672 23.1855 27.2857 23.1855 32.1197C23.1855 36.9535 27.1062 40.8721 31.9425 40.8721Z"
            fill="#AB4D85"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.9425 63.8369C36.779 63.8369 40.6996 59.9184 40.6996 55.0845C40.6996 50.2507 36.779 46.332 31.9425 46.332C27.1062 46.332 23.1855 50.2507 23.1855 55.0845C23.1855 59.9184 27.1062 63.8369 31.9425 63.8369Z"
            fill="#576ED6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.64376 63.8369C14.4801 63.8369 18.4008 59.9184 18.4008 55.0846C18.4008 50.2506 14.4801 46.332 9.64376 46.332C4.80739 46.332 0.886719 50.2506 0.886719 55.0846C0.886719 59.9184 4.80739 63.8369 9.64376 63.8369Z"
            fill="#2D7EFF"
          />
        </svg>
      </div>
      <img
        src="/element.png"
        alt=""
        className="absolute -top-12 right-0"
      />
    </div>
  );
}

export default Header;
