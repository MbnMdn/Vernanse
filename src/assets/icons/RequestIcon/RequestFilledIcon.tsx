export default function RequestFilledIcon({
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
        d="M6.99645 7.70578L5.46173 15.6192C5.22234 16.8536 6.16781 18 7.42514 18H9H15H16.5749C17.8322 18 18.7777 16.8535 18.5383 15.6192L17.0035 7.70578C17.0012 7.69359 16.999 7.68277 16.9962 7.67066C16.9263 7.36502 15.86 3 12 3C8.14005 3 7.0737 7.36501 7.00376 7.67066C7.00099 7.68277 6.99882 7.69359 6.99645 7.70578Z"
        fill={isActive ? activeColor : notActiveColor}
      />
      <path
        d="M9 18C9 18 9 21 12.0464 21C15.0929 21 15.0929 18 15.0929 18"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6.99645 7.70578L5.46173 15.6192C5.22234 16.8536 6.16781 18 7.42514 18H9H15H16.5749C17.8322 18 18.7777 16.8535 18.5383 15.6192L17.0035 7.70578C17.0012 7.69359 16.999 7.68277 16.9962 7.67066C16.9263 7.36502 15.86 3 12 3C8.14005 3 7.0737 7.36501 7.00376 7.67066C7.00099 7.68277 6.99882 7.69359 6.99645 7.70578Z"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 7C19.5 5 19 4 18 3"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7C4.5 5 5 4 6 3"
        stroke={isActive ? activeColor : notActiveColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
