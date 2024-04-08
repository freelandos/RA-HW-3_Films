import { Star } from './Star';
import './Stars.css'

type StarsProps = {
    count: number
}

export function Stars(props: StarsProps) {
  const { count } = props;

  if (count > 0 && count <= 5) {
    return (
      <ul className="card-body-stars u-clearfix">
        {
          [...Array(count)].map((index) => {
            return <Star key={index} />;
          })
        }
      </ul>
    )
  }
}

Stars.defaultProps = {
  count: 0
}