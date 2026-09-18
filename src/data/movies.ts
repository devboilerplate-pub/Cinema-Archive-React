export type Movie = {
  id: number;
  title: string;
  originalTitle: string;
  year: number;
  director: string;
  genre: string[];
  runtime: number;
  rating: number;
  poster: string;
  backdrop: string;
  synopsis: string;
  featured?: boolean;
};

const image = (id: string, width = 900) =>
  width === 1800 ? `/images/backdrops/${id}.jpg` : `/images/posters/${id}.jpg`;

export const movies: Movie[] = [
  {
    id: 1,
    title: 'The Last Frame',
    originalTitle: 'The Last Frame',
    year: 2024,
    director: 'Mara Voss',
    genre: ['Drama', 'Mystery'],
    runtime: 118,
    rating: 8.7,
    poster: image('photo-1489599849927-2ee91cede3ba'),
    backdrop: image('photo-1489599849927-2ee91cede3ba', 1800),
    synopsis: 'A reclusive projectionist discovers one final reel that seems to contain a memory no one else remembers living.',
    featured: true,
  },
  {
    id: 2,
    title: 'Soft Static',
    originalTitle: 'Soft Static',
    year: 2023,
    director: 'Eli Ren',
    genre: ['Sci-Fi', 'Drama'],
    runtime: 106,
    rating: 8.1,
    poster: image('photo-1517604931442-7e0c8ed2963c'),
    backdrop: image('photo-1517604931442-7e0c8ed2963c', 1800),
    synopsis: 'In a city tuned to perfect silence, a radio archivist begins receiving broadcasts from the future.',
  },
  {
    id: 3,
    title: 'Nocturne for a City',
    originalTitle: 'Nocturne for a City',
    year: 2022,
    director: 'A. I. Cole',
    genre: ['Noir', 'Thriller'],
    runtime: 127,
    rating: 8.5,
    poster: image('photo-1492684223066-81342ee5ff30'),
    backdrop: image('photo-1492684223066-81342ee5ff30', 1800),
    synopsis: 'Three strangers cross paths over one sleepless night, each carrying a secret that belongs to the same dead man.',
  },
  {
    id: 4,
    title: 'After the Rain',
    originalTitle: 'Après la pluie',
    year: 2021,
    director: 'Solène Marchand',
    genre: ['Romance', 'Drama'],
    runtime: 101,
    rating: 7.9,
    poster: image('photo-1500530855697-b586d89ba3ee'),
    backdrop: image('photo-1500530855697-b586d89ba3ee', 1800),
    synopsis: 'On the last day before she leaves Paris, a cartographer follows a stranger through the city she thought she knew.',
  },
  {
    id: 5,
    title: 'The Quiet Room',
    originalTitle: 'The Quiet Room',
    year: 2020,
    director: 'Jun Hyeon',
    genre: ['Drama'],
    runtime: 94,
    rating: 8.3,
    poster: image('photo-1524985069026-dd778a71c7b4'),
    backdrop: image('photo-1524985069026-dd778a71c7b4', 1800),
    synopsis: 'A sound designer loses her hearing and begins to understand the unfinished story inside her family home.',
  },
  {
    id: 6,
    title: 'Velvet Underground',
    originalTitle: 'Velvet Underground',
    year: 2019,
    director: 'Owen Bell',
    genre: ['Music', 'Documentary'],
    runtime: 113,
    rating: 7.8,
    poster: image('photo-1470229722913-7c0e2dbbafd3'),
    backdrop: image('photo-1470229722913-7c0e2dbbafd3', 1800),
    synopsis: 'A nocturnal portrait of the musicians and misfits keeping a forgotten club alive beneath the city.',
  },
  {
    id: 7,
    title: 'Paper Moons',
    originalTitle: 'Paper Moons',
    year: 2018,
    director: 'Nadia Patel',
    genre: ['Fantasy', 'Drama'],
    runtime: 109,
    rating: 8.0,
    poster: image('photo-1516280440614-37939bbacd81'),
    backdrop: image('photo-1516280440614-37939bbacd81', 1800),
    synopsis: 'Two siblings build a paper city in the attic, only to find that its streets lead somewhere real.',
  },
  {
    id: 8,
    title: 'A Small Country',
    originalTitle: 'A Small Country',
    year: 2017,
    director: 'Luca Ferri',
    genre: ['Drama', 'History'],
    runtime: 121,
    rating: 8.6,
    poster: image('photo-1500534314209-a25ddb2bd429'),
    backdrop: image('photo-1500534314209-a25ddb2bd429', 1800),
    synopsis: 'A young archivist returns to a border town to catalogue a vanished nation and finds her own family in the margins.',
  },
  {
    id: 9,
    title: 'Signal Fire',
    originalTitle: 'Signal Fire',
    year: 2016,
    director: 'Tomas Reed',
    genre: ['Adventure', 'Thriller'],
    runtime: 116,
    rating: 7.7,
    poster: image('photo-1518709268805-4e9042af9f23'),
    backdrop: image('photo-1518709268805-4e9042af9f23', 1800),
    synopsis: 'A lighthouse keeper sees a light on the horizon that was never meant to be seen again.',
  },
  {
    id: 10,
    title: 'Blue Hour',
    originalTitle: "L'heure bleue",
    year: 2015,
    director: 'Camille Durand',
    genre: ['Romance', 'Mystery'],
    runtime: 98,
    rating: 7.6,
    poster: image('photo-1493246507139-91e8fad9978e'),
    backdrop: image('photo-1493246507139-91e8fad9978e', 1800),
    synopsis: 'Every morning at 5:42, a woman receives a photograph of a place she has never visited.',
  },
  {
    id: 11,
    title: 'The Orchard',
    originalTitle: 'The Orchard',
    year: 2014,
    director: 'Mina Park',
    genre: ['Drama', 'Family'],
    runtime: 103,
    rating: 8.2,
    poster: image('photo-1470770841072-f978cf4d019e'),
    backdrop: image('photo-1470770841072-f978cf4d019e', 1800),
    synopsis: 'A daughter returns to her childhood orchard and finds the trees marked with dates from the future.',
  },
  {
    id: 12,
    title: 'Monument Valley',
    originalTitle: 'Monument Valley',
    year: 2012,
    director: 'Iris Okafor',
    genre: ['Western', 'Drama'],
    runtime: 132,
    rating: 8.4,
    poster: image('photo-1500534623283-312aade485b7'),
    backdrop: image('photo-1500534623283-312aade485b7', 1800),
    synopsis: 'A surveyor and a drifter map a landscape that changes each time they look away.',
  },
  {
    id: 13,
    title: 'The Long Goodbye',
    originalTitle: 'The Long Goodbye',
    year: 2010,
    director: 'Peter Vale',
    genre: ['Noir', 'Crime'],
    runtime: 110,
    rating: 8.8,
    poster: image('photo-1483794344563-d27a8d18014e'),
    backdrop: image('photo-1483794344563-d27a8d18014e', 1800),
    synopsis: 'A private detective takes one last case in a city that has already forgotten his name.',
  },
  {
    id: 14,
    title: 'Winter Light',
    originalTitle: 'Winter Light',
    year: 2008,
    director: 'Greta Nilsson',
    genre: ['Drama', 'Art House'],
    runtime: 88,
    rating: 8.9,
    poster: image('photo-1519681393784-d120267933ba'),
    backdrop: image('photo-1519681393784-d120267933ba', 1800),
    synopsis: 'In a snowbound village, a painter records the last light of winter and the people who are leaving.',
  },
  {
    id: 15,
    title: 'Archive of Dust',
    originalTitle: 'Archive of Dust',
    year: 2006,
    director: 'Rafiq Moss',
    genre: ['Documentary', 'History'],
    runtime: 100,
    rating: 8.1,
    poster: image('photo-1460661419201-fd4cecdf8a8b'),
    backdrop: image('photo-1460661419201-fd4cecdf8a8b', 1800),
    synopsis: 'A museum conservator traces the invisible hands behind the objects that survived a century of upheaval.',
  },
];

export const genres = ['All films', 'Drama', 'Mystery', 'Noir', 'Sci-Fi', 'Romance', 'Documentary', 'History'];
export const years = ['All years', '2020s', '2010s', '2000s'];

export const getYearRange = (value: string) => {
  if (value === '2020s') return [2020, 2029];
  if (value === '2010s') return [2010, 2019];
  if (value === '2000s') return [2000, 2009];
  return [0, 9999];
};

export const featuredMovie = movies.find((movie) => movie.featured) ?? movies[0];
export const classics = movies.filter((movie) => movie.year < 2015).slice(0, 6);
export const newReleases = movies.filter((movie) => movie.year >= 2019).slice(0, 5);
