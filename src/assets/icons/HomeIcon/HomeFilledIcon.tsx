export default function HomeFilledIcon({
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
        d="M17.7218 8.08384L14.7218 5.29813C13.4309 4.09939 12.7854 3.50002 12 3.50002C11.2146 3.50002 10.5691 4.09939 9.2782 5.29813L6.2782 8.08384C5.64836 8.66868 5.33345 8.96111 5.16672 9.34344C5 9.72577 5 10.1555 5 11.015V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H9.75V17C9.75 15.7573 10.7574 14.75 12 14.75C13.2426 14.75 14.25 15.7573 14.25 17V21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17L19 11.015C19 10.1555 19 9.72577 18.8333 9.34344C18.6666 8.96111 18.3516 8.66868 17.7218 8.08384Z"
        fill={isActive ? activeColor : notActiveColor}
      />
      <path
        d="M19 9L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L14 21L10 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 9"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3 11L7.5 7L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L16.5 7L21 11"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
