const Section = (props) => {
  return (
    <div className="section-division">
      <h2 className="category-name">{props.category}</h2>
      <div className="movie-list">
        {props.images.map((elem, index) => {
          return (
            <div key={index}>
              <img className="movie" src={elem} alt="movie/show" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Section;
