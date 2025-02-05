export default function PayOutFilledIcon({ color }: { color: string }) {
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
        d="M13 3H7.76556C6.75692 3 5.90612 3.75107 5.78101 4.75193L4.12403 18.0077C4.05817 18.5346 4.46901 19 5 19H6.30575C7.28342 19 8.1178 18.2932 8.27853 17.3288L8.8356 13.9864C8.93047 13.4172 9.42294 13 10 13H13C19 13 19 3 13 3Z"
        fill={color}
      />
      <path
        d="M13 3H7.76556C6.75692 3 5.90612 3.75107 5.78101 4.75193L4.12403 18.0077C4.05817 18.5346 4.46901 19 5 19H6.30575C7.28342 19 8.1178 18.2932 8.27853 17.3288L8.8356 13.9864C8.93047 13.4172 9.42294 13 10 13H13C19 13 19 3 13 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.32317 18.7378L7.14142 20.0101C7.06678 20.5326 7.47221 21 8 21V21H9.43845C10.3562 21 11.1561 20.3754 11.3787 19.4851L11.7575 17.9702C11.9 17.4 12.4123 17 13 17V17H16C21.393 17 21.9386 8.921 17.6368 7.28635"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
