// Type definitions
export interface PlanetData {
  name: string;
  orbitSpeed: number;
  radius: number;
  size: number;
  rotationSpeed: number;
  textureFile: string;
  hasMoon?: boolean;
  hasRing?: boolean;
  description: string;
  facts: {
    diameter: string;
    dayLength: string;
    yearLength: string;
    moons: number;
  };
}

// Orbital distance multiplier for visual clarity
export const ORBIT_SCALE = 4;

// Rotation speed multiplier
export const ROTATION_SPEED = 0.2;

export const PLANETS: PlanetData[] = [
  {
    name: "mercury",
    orbitSpeed: 0.0478,
    radius: 9.5,
    size: 2.53,
    rotationSpeed: 0.003,
    textureFile: "2k_mercury.jpg",
    description: "The smallest planet and closest to the Sun, Mercury is a rocky world with extreme temperature variations.",
    facts: {
      diameter: "4,879 km",
      dayLength: "59 Earth days",
      yearLength: "88 Earth days",
      moons: 0,
    },
  },
  {
    name: "venus",
    orbitSpeed: 0.038,
    radius: 17.5,
    size: 4,
    rotationSpeed: -0.002, // Negative = retrograde rotation
    textureFile: "2k_venus_surface.jpg",
    description: "Venus is Earth's twin in size but has a thick, toxic atmosphere and is the hottest planet.",
    facts: {
      diameter: "12,104 km",
      dayLength: "243 Earth days",
      yearLength: "225 Earth days",
      moons: 0,
    },
  },
  {
    name: "earth",
    orbitSpeed: 0.033,
    radius: 28.5,
    size: 5.3,
    rotationSpeed: 0.2,
    textureFile: "2k_earth_daymap.jpg",
    hasMoon: true,
    description: "Our home planet, the only known world with life, featuring liquid water and a protective atmosphere.",
    facts: {
      diameter: "12,756 km",
      dayLength: "24 hours",
      yearLength: "365.25 days",
      moons: 1,
    },
  },
  {
    name: "mars",
    orbitSpeed: 0.031,
    radius: 40.5,
    size: 4.4,
    rotationSpeed: 0.19,
    textureFile: "2k_mars.jpg",
    description: "The Red Planet, named for its rusty appearance. Mars has the largest volcano and canyon in the solar system.",
    facts: {
      diameter: "6,792 km",
      dayLength: "24.6 hours",
      yearLength: "687 Earth days",
      moons: 2,
    },
  },
  {
    name: "jupiter",
    orbitSpeed: 0.0087,
    radius: 57.5,
    size: 14,
    rotationSpeed: 0.4,
    textureFile: "2k_jupiter.jpg",
    description: "The largest planet, a gas giant with a Great Red Spot storm that has raged for centuries.",
    facts: {
      diameter: "142,984 km",
      dayLength: "10 hours",
      yearLength: "12 Earth years",
      moons: 95,
    },
  },
  {
    name: "saturn",
    orbitSpeed: 0.0095,
    radius: 68.5,
    size: 13.5,
    rotationSpeed: 0.38,
    textureFile: "2k_saturn.jpg",
    hasRing: true,
    description: "Famous for its stunning ring system, Saturn is a gas giant that could float on water if there were an ocean big enough.",
    facts: {
      diameter: "120,536 km",
      dayLength: "10.7 hours",
      yearLength: "29 Earth years",
      moons: 146,
    },
  },
  {
    name: "uranus",
    orbitSpeed: 0.0084,
    radius: 79.5,
    size: 7.4,
    rotationSpeed: -0.3, // Negative = retrograde rotation
    textureFile: "2k_uranus.jpg",
    description: "An ice giant that rotates on its side, likely due to a massive ancient collision.",
    facts: {
      diameter: "51,118 km",
      dayLength: "17 hours",
      yearLength: "84 Earth years",
      moons: 28,
    },
  },
  {
    name: "neptune",
    orbitSpeed: 0.0078,
    radius: 90.5,
    size: 8.1,
    rotationSpeed: 0.32,
    textureFile: "2k_neptune.jpg",
    description: "The windiest planet with supersonic storms, Neptune is a deep blue ice giant at the edge of our solar system.",
    facts: {
      diameter: "49,528 km",
      dayLength: "16 hours",
      yearLength: "165 Earth years",
      moons: 16,
    },
  },
];

// Generate consistent initial angles for planets (seeded, not random)
export const INITIAL_ANGLES: Record<string, number> = {
  mercury: 0.2,
  venus: 0.7,
  earth: 0.0,
  mars: 0.4,
  jupiter: 0.9,
  saturn: 0.3,
  uranus: 0.6,
  neptune: 0.1,
};
