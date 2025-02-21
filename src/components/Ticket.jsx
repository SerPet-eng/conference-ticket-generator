import { usePageContext } from '../context/PageContext';
import MarkIcon from '../assets/images/logo-mark.svg';
import GithubIcon from '../assets/images/icon-github.svg';

export default function TicketSVG() {
  const { file, values, randNumber } = usePageContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="280"
      fill="none"
      viewBox="0 0 600 280"
    >
      <g filter="url(#a)">
        <mask id="d" fill="#fff">
          <path
            fillRule="evenodd"
            d="M0 12C0 5.373 5.373 0 12 0h438.958c5.37 0 9.876 3.759 12.94 8.169C468.863 15.319 477.135 20 486.5 20s17.637-4.681 22.602-11.831c3.064-4.41 7.57-8.169 12.94-8.169H588c6.627 0 12 5.373 12 12v256c0 6.627-5.373 12-12 12h-65.958c-5.37 0-9.876-3.759-12.94-8.169C504.137 264.681 495.865 260 486.5 260s-17.637 4.681-22.602 11.831c-3.064 4.41-7.57 8.169-12.94 8.169H12c-6.627 0-12-5.373-12-12V12Z"
            clipRule="evenodd"
          />
        </mask>
        <path
          fill="url(#b)"
          fillRule="evenodd"
          d="M0 12C0 5.373 5.373 0 12 0h438.958c5.37 0 9.876 3.759 12.94 8.169C468.863 15.319 477.135 20 486.5 20s17.637-4.681 22.602-11.831c3.064-4.41 7.57-8.169 12.94-8.169H588c6.627 0 12 5.373 12 12v256c0 6.627-5.373 12-12 12h-65.958c-5.37 0-9.876-3.759-12.94-8.169C504.137 264.681 495.865 260 486.5 260s-17.637 4.681-22.602 11.831c-3.064 4.41-7.57 8.169-12.94 8.169H12c-6.627 0-12-5.373-12-12V12Z"
          clipRule="evenodd"
        />
        <path
          fill="url(#c)"
          d="m463.898 271.831 1.232.856-1.232-.856Zm45.204 0 1.232-.856-1.232.856Zm0-263.662 1.232.856-1.232-.856Zm-45.204 0-1.232.856 1.232-.856ZM450.958-1.5H12v3h438.958v-3Zm35.542 20c-8.853 0-16.673-4.423-21.37-11.187l-2.464 1.712C467.9 16.56 476.623 21.5 486.5 21.5v-3Zm21.37-11.187C503.173 14.077 495.353 18.5 486.5 18.5v3c9.877 0 18.6-4.94 23.834-12.475l-2.464-1.712ZM588-1.5h-65.958v3H588v-3ZM601.5 268V12h-3v256h3Zm-79.458 13.5H588v-3h-65.958v3Zm-35.542-20c8.853 0 16.673 4.423 21.37 11.187l2.464-1.712C505.1  263.439 496.377 258.5 486.5 258.5v3Zm-21.37 11.187c4.697-6.764 12.517-11.187 21.37-11.187v-3c-9.877 0-18.6 4.939-23.834 12.475l2.464 1.712ZM12 281.5h438.958v-3H12v3ZM-1.5 12v256h3V12h-3ZM12 278.5c-5.799 0-10.5-4.701-10.5-10.5h-3c0 7.456 6.044 13.5 13.5 13.5v-3Zm450.666-7.525c-2.952 4.25-7.065 7.525-11.708 7.525v3c6.097 0 10.997-4.242 14.172-8.813l-2.464-1.712Zm59.376 7.525c-4.643 0-8.756-3.275-11.708-7.525l-2.464 1.712c3.175 4.571 8.075 8.813 14.172 8.813v-3ZM588 1.5c5.799 0 10.5 4.701 10.5 10.5h3c0-7.456-6.044-13.5-13.5-13.5v3Zm-77.666 7.525c2.952-4.25 7.065-7.525 11.708-7.525v-3c-6.097 0-10.997 4.242-14.172 8.813l2.464 1.712ZM12-1.5C4.544-1.5-1.5 4.544-1.5 12h3C1.5 6.201 6.201 1.5 12 1.5v-3ZM598.5 268c0 5.799-4.701 10.5-10.5 10.5v3c7.456 0 13.5-6.044 13.5-13.5h-3ZM450.958 1.5c4.643 0 8.756 3.275 11.708 7.525l2.464-1.712c-3.175-4.571-8.075-8.813-14.172-8.813v3Z"
          mask="url(#d)"
        />
      </g>
      <foreignObject x="0" y="0" width="600" height="280">
        <div className="ticket-content" xmlns="http://www.w3.org/1999/xhtml">
          <div className="ticket-header">
            <div className="ticket-logo">
              <img className="ticket-mark" src={MarkIcon} alt="Mark Icon" />
              <p className="ticket-logo-text">Coding Conf</p>
            </div>
            <p className="ticket-date">Jan 31, 2025 / Austin, TX</p>
          </div>

          <div className="ticket-code">
            <p className="ticket-code-text">#{randNumber}</p>
          </div>

          <div className="ticket-info">
            <img
              className="ticket-image"
              src={file}
              alt={`Image of ${values.full_name}`}
            />
            <div className="ticket-text">
              <p className="ticket-name">{values.full_name}</p>

              <div className="ticket-email">
                <img
                  className="ticket-github-icon"
                  src={GithubIcon}
                  alt="Github Icon"
                />
                <p className="ticket-github">{values.github_name}</p>
              </div>
            </div>
          </div>
        </div>
      </foreignObject>
      <defs>
        <linearGradient
          id="b"
          x1="610"
          x2="69.328"
          y1="26.462"
          y2="306.194"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity=".3" />
          <stop offset="1" stopColor="#fff" stopOpacity=".1" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="0"
          x2="599.999"
          y1="140"
          y2="139.351"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#F37362" />
        </linearGradient>
        <filter
          id="a"
          width="680"
          height="360"
          x="-40"
          y="-40"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_107_802"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_107_802"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
