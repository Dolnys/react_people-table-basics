import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

interface PersonLinkProps {
  person: Person;
}

export const PersonLink: React.FC<PersonLinkProps> = ({ person }) => {
  return (
    <Link
      to={`/people/${person.slug}`}
      className={cn({
        'has-text-danger': person.sex === 'f',
      })}
    >
      {person.name}
    </Link>
  );
};
