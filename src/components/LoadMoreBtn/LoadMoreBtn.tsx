// import css from './LoadMoreBtn.module.css';

// export default function LoadMoreBtn({ onClick }) {
//   return (
//     <button className={css.btn} type="button" onClick={onClick}>
//       More
//     </button>
//   );
// }

import css from "./LoadMoreBtn.module.css";

interface Props {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      More
    </button>
  );
}
