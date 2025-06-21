// import ImageCard from '../ImageCard/ImageCard';
// import css from './ImageGallery.module.css';

// export default function ImageGallery({ items, onImageClick }) {
//   return (
//     <ul className={css.list}>
//       {items.map((item) => (
//         <li key={item.id} className={css.item}>
//           <ImageCard newItem={item} onClick={onImageClick} />
//         </li>
//       ))}
//     </ul>
//   );
// }

import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { UnsplashImage } from "../../types";

interface Props {
  items: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

export default function ImageGallery({ items, onImageClick }: Props) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id} className={css.item}>
          <ImageCard newItem={item} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
