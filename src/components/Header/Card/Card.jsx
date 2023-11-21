import "./Card.scss";

export const Card = () => {
  return (
    <>
      <article className="Card">
        <header>
          <span className="Card-tag">Your result</span>
          <h2 className="Card-number">
            76 <span className="Card-info">of 100</span>
          </h2>
          <span>Great</span>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </header>
        <div className="DataTable">
          <header>Summary</header>
          <ul className="Data">
            <li className="Data-item">
              <span>
                <i></i>Reaction
              </span>{" "}
              80 / 100
            </li>
            <li className="Data-item">
              <span>
                <i></i>Reaction
              </span>{" "}
              80 / 100
            </li>
            <li className="Data-item">
              <span>
                <i></i>Reaction
              </span>{" "}
              80 / 100
            </li>
            <li className="Data-item">
              <span>
                <i></i>Reaction
              </span>{" "}
              80 / 100
            </li>
          </ul>
        </div>

        <footer>
          <button className="Button">Continue</button>
        </footer>
      </article>
    </>
  );
};
