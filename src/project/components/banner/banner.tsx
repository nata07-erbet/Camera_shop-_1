import { TBanner } from '../../types/index';

type BannerProps = {
  banners: TBanner[];
}
// отбражается только 1 картинка?
function Banner ({banners}: BannerProps) {
  const isRetina = true;

  return (
    <div className="banner">
      {banners.map((banner) => (
        <>
          <picture>
            <source
              type="image/webp"
              srcSet={isRetina ? banner.previewImgWebp2x : banner.previewImgWebp}
            />
            <img
              src={banner.previewImg}
              srcSet={banner.previewImg2x}
              width={1280}
              height={280}
              alt={banner.name}
            />
          </picture>
          <p className="banner__info">
            <span className="banner__message">Новинка!</span>
            <span className="title title--h1">
              {banner.name}
            </span>
            <span className="banner__text">
              Профессиональная камера от&nbsp;известного производителя
            </span>
            <a className="btn" href="#">
             Подробнее
            </a>
          </p>
        </>
      ))}
    </div>
  );
}

export { Banner };
