{
  /**interface with generics */

  interface Developer<T, K = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: K;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Rakib",
    computer: {
      brand: "Asus",
      model: "X-2",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emailab",
      model: "kw66",
      display: "amoled",
    },
  };

  type AppleWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Sakib",
    computer: {
      brand: "hp",
      model: "X-25UR",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "apple",
      model: "something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };
}
