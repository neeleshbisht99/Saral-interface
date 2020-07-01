export const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step',
      ['get', 'point_count'],
      '#51bbd6',
      10,
      '#f1f075',
      50,
      '#f28cb1',
    ],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
  },
};

export const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12,
  },
};

export const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'earthquakes',
  filter: ['!', ['has', 'point_count']],
  // layout: {
  //   'icon-image': 'marker-1', // the name of image file we used above
  //   'icon-allow-overlap': false,
  //   'icon-size': 1, //this is a multiplier applied to the standard size. So if you want it half the size put ".5"
  // },
  paint: {
    'circle-color': '#e5f5f9',
    'circle-radius': 10,
    'circle-stroke-width': 5,
    'circle-stroke-color': '#8dd3c7',
  },
};
