interface CheckCircleIconProps {
  size: number;
  color: string;
  fill: string;
}

const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({
  size,
  color,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19 18"
      fill={fill}
    >
      <path
        d="M9.48007 16.4262C13.5726 16.4262 16.8903 13.1085 16.8903 9.01596C16.8903 4.92339 13.5726 1.60571 9.48007 1.60571C5.3875 1.60571 2.06982 4.92339 2.06982 9.01596C2.06982 13.1085 5.3875 16.4262 9.48007 16.4262Z"
        fill={fill}
      />
      <path
        d="M9.46428 1.85955C10.8765 1.85955 12.2571 2.27834 13.4313 3.06294C14.6056 3.84755 15.5208 4.96275 16.0612 6.2675C16.6017 7.57225 16.7431 9.00797 16.4676 10.3931C16.1921 11.7782 15.512 13.0505 14.5134 14.0491C13.5148 15.0478 12.2424 15.7278 10.8573 16.0033C9.4722 16.2789 8.03648 16.1375 6.73173 15.597C5.42697 15.0566 4.31178 14.1413 3.52717 12.9671C2.74257 11.7928 2.32378 10.4123 2.32378 9.00005C2.3311 7.10852 3.08574 5.29656 4.42326 3.95904C5.76079 2.62152 7.57275 1.86687 9.46428 1.85955ZM9.46428 0.272778C7.73972 0.279833 6.05592 0.797669 4.62543 1.76091C3.19494 2.72416 2.08191 4.08962 1.42683 5.68493C0.771755 7.28024 0.604012 9.03387 0.944777 10.7244C1.28554 12.415 2.11954 13.9667 3.34148 15.1837C4.56342 16.4006 6.11852 17.2283 7.81046 17.5621C9.50241 17.896 11.2553 17.7211 12.848 17.0595C14.4406 16.3979 15.8015 15.2793 16.7589 13.8449C17.7163 12.4105 18.2272 10.7246 18.2273 9.00005C18.2273 7.85096 18.0003 6.71318 17.5595 5.652C17.1187 4.59083 16.4727 3.62715 15.6585 2.81628C14.8443 2.00541 13.878 1.36331 12.815 0.926827C11.7521 0.490346 10.6134 0.268077 9.46428 0.272778Z"
        fill={fill}
      />
      <path
        d="M12.9306 6.34209L8.59865 10.674L6.11618 8.19156L5.28027 9.02747L8.59865 12.3458L13.7665 7.178L12.9306 6.34209Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckCircleIcon;
