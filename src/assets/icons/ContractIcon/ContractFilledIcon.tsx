export default function ContractFilledIcon({
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
        d="M8.75 3.00005C7.02987 3.0012 6.14509 3.02648 5.58579 3.58579C5 4.17157 5 5.11438 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17L19 7C19 5.11438 19 4.17157 18.4142 3.58579C17.8549 3.02648 16.9701 3.0012 15.25 3.00005V6C15.25 7.24264 14.2426 8.25 13 8.25H11C9.75736 8.25 8.75 7.24264 8.75 6V3.00005Z"
        fill={isActive ? activeColor : notActiveColor}
      />
      <path
        d="M15 3C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7L19 17C19 18.8856 19 19.8284 18.4142 20.4142C18.4142 20.4142 18.4142 20.4142 18.4142 20.4142C17.8284 21 16.8856 21 15 21V21L9 21V21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C5.58579 3.58579 5.58579 3.58579 5.58579 3.58579C6.17157 3 7.11438 3 9 3V3L15 3V3Z"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 3V6C9 7.10457 9.89543 8 11 8H13C14.1046 8 15 7.10457 15 6V3"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
