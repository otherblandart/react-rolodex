import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ listSrc }) => (
  <div className="card-list">
    {listSrc.map((itm) => {
      return <Card itm={itm} key={itm.id} />;
    })}
  </div>
);

export default CardList;