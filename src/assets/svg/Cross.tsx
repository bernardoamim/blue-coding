import React from 'react';

const SvgCross: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>,
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.472 13.472"
      {...props}
    >
      <g strokeLinecap="round">
        <path d="M12.415 1.061L1.064 12.411M1.06 1.061l11.351 11.35" />
      </g>
    </svg>
  );
};

export default SvgCross;
