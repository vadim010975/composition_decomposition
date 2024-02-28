import { FC } from "react";

/**
 * Компонент отрисовывает форму поиска
 */

type SearchFormProps = {
  link: string,
}

const SearchForm: FC<SearchFormProps> = ({ link }) => {
  return (
    <div className="search__form_wrapper">
      <form action={link} className="search__form">
        <img src="" alt="image" className="search__form_img" />
        <input type="text" className="search__form_input" />
        <button className="search__form_button">Найти</button>
      </form>
      <p>
        <span className="search__form_final-text">Найдется всё. Например,</span>
        <span className="search__form_final-text grey">фаза луны сегодня</span>
      </p>
    </div>
  );
}

export default SearchForm;