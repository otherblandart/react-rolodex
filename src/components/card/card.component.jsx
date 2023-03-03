import './card.styles.css';

const Card = ({ itm }) => {
  const rhUrl = 'https://robohash.org/$';
  const { name, email, id } = itm;
    
  return (
    <div className="card-container">
      <img src={`${rhUrl + id}?set=set3&size=180x180`} alt={`robot ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;