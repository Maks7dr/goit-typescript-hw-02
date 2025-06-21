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
