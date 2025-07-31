export function IconParkOutlineLightning({ color = "white", size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.875 2.5H23.125L16.25 11.25H25.625L10.625 27.5L13.75 15.625H5L11.875 2.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
