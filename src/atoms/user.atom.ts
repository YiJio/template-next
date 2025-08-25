// packages
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const priceAtom = atom(10);
export const idAtom = atom('1');
export const objectAtom = atom({ id: 1, name: 'john doe' });

const readOnlyAtom = atom((get) => get(priceAtom) * 2)
const writeOnlyAtom = atom(
  null, // pass 'null' for first argument
  (get, set, update) => {
    set(priceAtom, get(priceAtom) - update.discount)
    set(priceAtom, (price) => price - update.discount)
  },
);
const readWriteAtom = atom(
  (get) => get(priceAtom) * 2,
  (get, set, newPrice) => {
    set(priceAtom, newPrice / 2)
    // set as many atoms as you want at the same time
  },
);

export const arrayAtom = atomWithStorage('array', []);
export const nameAtom = atomWithStorage('name', '');

/*

note: might need to look at jotai docs for nextjs
will probably need to use a Provider from jotai

usage:
const [name] = useAtom(nameAtom);

*/