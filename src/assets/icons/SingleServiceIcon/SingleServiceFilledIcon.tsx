export default function SingleServiceFilledIcon({
  isActive,
  activeColor,
  notActiveColor,
}: {
  isActive?: boolean;
  ActiveColor?: string;
  notActiveColor?: string;
  activeColor?: string;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" />
      <path
        opacity="0.2"
        d="M21 11.152C20.7154 12.0872 20.2501 12.9557 19.6405 13.7265C17.9516 15.8622 15.1545 17.25 12 17.25C8.84545 17.25 6.04844 15.8622 4.35949 13.7265C3.74993 12.9557 3.28461 12.0872 3 11.152V17C3 18.8856 3 19.8284 3.58579 20.4142C4.17157 21 5.11438 21 7 21H17C18.8856 21 19.8284 21 20.4142 20.4142C21 19.8284 21 18.8856 21 17V11.152Z"
        fill={isActive ? activeColor : notActiveColor}
      />
      <path
        d="M3 10C3 9.06812 3 8.60218 3.15224 8.23463C3.35523 7.74458 3.74458 7.35523 4.23463 7.15224C4.60218 7 5.06812 7 6 7V7H18V7C18.9319 7 19.3978 7 19.7654 7.15224C20.2554 7.35523 20.6448 7.74458 20.8478 8.23463C21 8.60218 21 9.06812 21 10V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H16H8H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V10Z"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3 10C3.18614 11.3166 3.73499 12.5338 4.55558 13.5714C6.19462 15.644 8.91777 17 12 17C15.0822 17 17.8054 15.644 19.4444 13.5714C20.265 12.5338 20.8139 11.3166 21 10"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.5 13H12.5"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
