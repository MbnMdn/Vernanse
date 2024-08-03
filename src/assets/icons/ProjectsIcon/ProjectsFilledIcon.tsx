export default function ProjectsFilledIcon({
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
        d="M4 9V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V9H4Z"
        fill="#323232"
      />
      <path
        d="M9 13H15"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="21"
        y="4"
        width="5"
        height="18"
        rx="2"
        transform="rotate(90 21 4)"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 9.00006V16C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 20 6.11438 20 8 20H9H15H16C17.8856 20 18.8284 20 19.4142 19.4142C20 18.8284 20 17.8856 20 16V9.00006"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
