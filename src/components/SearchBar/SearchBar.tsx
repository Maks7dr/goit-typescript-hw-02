// import { useState } from 'react';
// import css from './SearchBar.module.css';
// import toast from 'react-hot-toast';

// const notify = () => toast('Заповніть поле пошуку!');

// export default function SearchBar({ onSubmit }) {
//   const [submit, setSubmit] = useState('');

//   const handleInput = (event) => {
//     setSubmit(event.currentTarget.value.toLowerCase());
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (submit.trim() === '') {
//       notify();
//       return;
//     }

//     onSubmit(submit);
//     setSubmit('');
//   };

//   return (
//     <header className={css.header}>
//       <form className={css.form} onSubmit={handleSubmit}>
//         <input
//           className={css.input}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={submit}
//           onChange={handleInput}
//         />
//         <button className={css.btn} type="submit">
//           Search
//         </button>
//       </form>
//     </header>
//   );
// }

import { useState, ChangeEvent, FormEvent } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const notify = () => toast("Заповніть поле пошуку!");

interface Props {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: Props) {
  const [submit, setSubmit] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSubmit(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submit.trim() === "") {
      notify();
      return;
    }

    onSubmit(submit);
    setSubmit("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={submit}
          onChange={handleInput}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
