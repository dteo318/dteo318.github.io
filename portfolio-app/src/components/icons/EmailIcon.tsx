const EmailIconDark = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z"></path>
      </g>
    </svg>
  );
};

const EmailIconLight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="#ededed"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ededed"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z"></path>
      </g>
    </svg>
  );
};

export default function EmailIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <>
      <EmailIconDark className={`hidden dark:inline ${className}`} {...props} />
      <EmailIconLight className={`dark:hidden ${className}`} {...props} />
    </>
  );
}
