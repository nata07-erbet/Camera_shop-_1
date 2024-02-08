import { RatingRewiew } from '../../components/rating/rating-rewiew';

type PopupAddRewiew ={
  onButtonClickPostRewiew: () => void;
  onKeyDownToClose: () => void;
  onButtonClickCloseModal: () => void;
  onButtonClickOverlay: () => void;
}

function PopupAddRewiew ({onButtonClickPostRewiew, onKeyDownToClose, onButtonClickCloseModal, onButtonClickOverlay}: PopupAddRewiew) {

  const handleFormSubmit = () => {
    onButtonClickPostRewiew();
  };

  const handleKeyDown = () => {
    onKeyDownToClose();
  };

  const handleClickClose = () => {
    onButtonClickCloseModal();
  };

  const handleClickOverlay = () => {
    onButtonClickOverlay();
  }

  return(
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={handleClickOverlay}
        >
        </div>
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">

            <form
              method="post"
              onSubmit={handleFormSubmit}
              onKeyDown={handleKeyDown}
            >
              <div className="form-review__rate">
                <RatingRewiew />
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">
                      Ваше имя
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Введите ваше имя"
                      minLength={2}
                      maxLength={15}
                      required
                      autoFocus
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">
                      Достоинства
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="user-plus"
                      placeholder="Основные преимущества товара"
                      minLength={10}
                      maxLength={160}
                      required
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">
                      Недостатки
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="user-minus"
                      placeholder="Главные недостатки товара"
                      minLength={10}
                      maxLength={160}
                      required
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div className="custom-textarea form-review__item">
                  <label>
                    <span className="custom-textarea__label">
                      Комментарий
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <textarea
                      name="user-comment"
                      minLength={10}
                      maxLength={160}
                      placeholder="Поделитесь своим опытом покупки"
                      defaultValue={''}
                    />
                  </label>
                  <div className="custom-textarea__error">
                  Нужно добавить комментарий
                  </div>
                </div>
              </div>
              <button
                className="btn btn--purple form-review__btn"
                type="submit"
              >
                Отправить отзыв
              </button>
            </form>

          </div>
          <button className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={handleClickClose}
          >
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  );
}

export { PopupAddRewiew };
