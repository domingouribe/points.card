import "./Card.scss";

export const Card = () => {
  return (
    <>
      <article className="Card">
        <header className="Card-header">
          <span className="Card-tag">Your result</span>
          <span className="Card-number">
            76 <span className="Card-info">of 100</span>
          </span>
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
              </span>
              80 / 100
            </li>
            <li className="Data-item">
              <span>
                <i></i>Reaction
              </span>
              80 / 100
            </li>
            <li className="Data-item">
              <span>
                <i></i>Reaction
              </span>
              80 / 100
            </li>
            <li className="Data-item">
              <span>
                <i></i>Reaction
              </span>
              80 / 100
            </li>
          </ul>
          <button className="Button">Continue</button>
        </div>
      </article>
    </>
  );
};
