const index = ({ backgroundColor, key, title, heure, children }) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      key={key}
      className="divtodo"
    >
      <li>{title}</li>

      <div>
        <h6>{heure}</h6>
        {children}
      </div>
    </div>
  );
};

export default index;
