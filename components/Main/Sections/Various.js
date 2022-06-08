import { Fragment } from "react";
import sections from "../../../resources/info.json";
const Various = () => {
  return (
    <Fragment>
      <div className="content-cards">
        <h1 className="title-section" id="various">
          Various
        </h1>
        <div className="cards">
          {sections[0].various.map(
            ({ name, desc, img, width, height, id, url }) => (
              <a className="item-link" href={url} target="blank_" key={id}>
                <div className="item">
                  <picture>
                    {
                      img &&  <img src={img} alt={name} width={width} height={height} />
                    }
                  </picture>
                  <div className="item-desc">
                    <h3>{name}</h3>
                    <p className="item-text">{desc}</p>
                  </div>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Various;
