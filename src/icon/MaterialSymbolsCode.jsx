export function MaterialSymbolsCode({ color = "white", size = 20, ...props }) {
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
        d="M10 22.5L2.5 15L10 7.5L11.7812 9.28125L6.03125 15.0312L11.75 20.75L10 22.5ZM20 22.5L18.2188 20.7188L23.9688 14.9688L18.25 9.25L20 7.5L27.5 15L20 22.5Z"
        fill={color}
      />
    </svg>
  );
}


