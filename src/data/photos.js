import uuid from 'uuid';
import pic1 from '../img/pic-1-small.jpg';
import pic2 from '../img/pic-2-small.jpg';
import pic3 from '../img/pic-3-small.jpg';
import pic4 from '../img/pic-4-small.jpg';
import pic5 from '../img/pic-5-small.jpg';
import pic6 from '../img/pic-6-small.jpg';
import pic7 from '../img/pic-7-small.jpg';
import pic8 from '../img/pic-8-small.jpg';
import pic9 from '../img/pic-9-small.jpg';

const photoData = [
  {
    src: pic1,
    alt: 'waves',
    id: uuid.v4(),
    quote: 'Quiet people have the loudest minds.',
    author: 'Stephen King',
    index: 0,
  },
  {
    src: pic2,
    alt: 'desert',
    id: uuid.v4(),
    quote:
      'What I like in a good author is not what he says, but what he whispers',
    author: 'Logan Pearsall Smith',
    index: 1,
  },
  {
    src: pic3,
    alt: 'ocean',
    id: uuid.v4(),
    quote:
      'Opportunity may knock only once but temptation leans on the door bell',
    author: 'Oprah Winfrey',
    index: 2,
  },
  {
    src: pic4,
    alt: 'mountains',
    id: uuid.v4(),
    quote: 'Books are for nothing but to inspire',
    author: 'Ralph Waldo Emerson',
    index: 3,
  },
  {
    src: pic5,
    alt: 'sand',
    id: uuid.v4(),
    quote: 'When I want to read a novel, I write one.',
    author: 'Benjamin Disraeli',
    index: 4,
  },
  {
    src: pic6,
    alt: 'meadow',
    id: uuid.v4(),
    quote: 'I write to believe in goodness.',
    author: ' Red Haircrow',
    index: 5,
  },
  {
    src: pic7,
    alt: 'sky',
    id: uuid.v4(),
    quote: 'The life we’re given is on a thread, so wear it well.',
    author: 'Benny Bellamacina',
    index: 6,
  },
  {
    src: pic8,
    alt: 'fjord',
    id: uuid.v4(),
    quote: 'The standard personality type for a writer is a shy megalomaniac.',
    author: ' John Lanchester',
    index: 7,
  },
  {
    src: pic9,
    alt: 'lighting',
    id: uuid.v4(),
    index: 8,
    quote:
      'Writing romantic fiction is the second chance that loved ones denied us.',
    author: 'Shannon Alder',
  },
];

export default photoData;
