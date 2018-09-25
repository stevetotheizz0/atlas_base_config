(function () {
  return function (opts) {
    return {
      geocoder: {
        url: function (input) {
          var inputEncoded = encodeURIComponent(input);
          return '//api.phila.gov/ais/v1/search/' + inputEncoded;
        },
        params: {
          gatekeeperKey: opts.gatekeeperKey,
          include_units: true,
        },
      },
      map: {
        center: [-75.163471, 39.953338],
        minZoom: 11,
        maxZoom: 22,
        zoom: 12,
        basemaps: {
          pwd: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
            tiledLayers: [
              'cityBasemapLabels'
            ],
            type: 'featuremap',
            attribution: 'Parcels: Philadelphia Water'
          },
          dor: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap/MapServer',
            tiledLayers: [
              'dorBasemapLabels'
            ],
            type: 'featuremap',
            attribution: 'Parcels: Department of Records'
          },
          imagery2017: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2017_3in/MapServer',
            label: '2017',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2017,
            attribution: 'Imagery 2017'
          },
          imagery2016: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2016_3in/MapServer',
            label: '2016',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2016,
            attribution: 'Imagery 2016'
          },
          imagery2015: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2015_3in/MapServer',
            label: '2015',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2015,
            attribution: 'Imagery 2015'
          },
          imagery2012: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2012_3in/MapServer',
            label: '2012',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2012,
            attribution: 'Imagery 2012'
          },
          imagery2010: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2010_3in/MapServer',
            label: '2010',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2010,
            attribution: 'Imagery 2010'
          },
          imagery2008: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2008_3in/MapServer',
            label: '2008',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2008,
            attribution: 'Imagery 2008'
          },
          imagery2004: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2004_6in/MapServer',
            label: '2004',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 2004,
            attribution: 'Imagery 2004'
          },
          imagery1996: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_1996_6in/MapServer',
            label: '1996',
            tiledLayers: [
              'imageryBasemapLabels',
              'parcels'
            ],
            type: 'imagery',
            year: 1996,
            attribution: 'Imagery 1996'
          },
          historic1962: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1962/MapServer',
            label: '1962',
            tiledLayers: [],
            type: 'historic',
            year: 1962,
            attribution: 'Historic Land Use 1962'
          },
          historic1942: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1942/MapServer',
            label: '1942',
            tiledLayers: [],
            type: 'historic',
            year: 1942,
            attribution: 'Historic Land Use 1942'
          },
          historic1910: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1910/MapServer',
            label: '1910',
            tiledLayers: [],
            type: 'historic',
            year: 1910,
            attribution: 'Historic Bromley Atlas 1910'
          },
          historic1895: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricBromleyAtlas_1895/MapServer',
            label: '1895',
            tiledLayers: [],
            type: 'historic',
            year: 1895,
            attribution: 'Historic Bromley Atlas 1895'
          },
          historic1875: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricGMHopkinsAtlas_1875/MapServer',
            label: '1875',
            tiledLayers: [],
            type: 'historic',
            year: 1875,
            attribution: 'Historic G.M. Hopkins Atlas 1875'
          },
          historic1860: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricHexamerLocherAtlas_1860/MapServer',
            label: '1860',
            tiledLayers: [],
            type: 'historic',
            year: 1860,
            attribution: 'Historic Hexamer Locher Atlas 1860'
          },
        },
        imageryTypes: {
          imagery: {
            label: 'Imagery'
          },
          historic: {
            label: 'Historic'
          }
        },
        tiledLayers: {
          cityBasemapLabels: {
            // type: 'labels',
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
            zIndex: '3',
          },
          dorBasemapLabels: {
            // type: 'labels',
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap_Labels/MapServer',
            zIndex: '3',
          },
          imageryBasemapLabels: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer',
            zIndex: '3',
            attribution: 'overwrite',
            // attribution: ' ',
          },
          parcels: {
            url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/PWDParcel_ImageryOverlay/MapServer/',
            zIndex: '2',
          },
        },
        dynamicMapLayers: {
          stormwater: {
            url: '//gis.phila.gov/arcgis/rest/services/Water/pv_data/MapServer',
            opacity: 1.0
          },
          zoning: {
            url: '//gis.phila.gov/arcgis/rest/services/PhilaGov/ZoningMap/MapServer',
            opacity: 1.0
          },
          regmaps: {
            url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/MASTERMAPINDEX/FeatureServer/',
            opacity: 0.5
          },
        },
        featureLayers: {
          dorParcels: {
            url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/DOR_Parcel/FeatureServer/0',
          },
          pwdParcels: {
            url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/PWD_PARCELS/FeatureServer/0',
            // url: '//gis.phila.gov/arcgis/rest/services/Water/pv_data_geodb2/MapServer/0',
          },
          streetTrees: {
            url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/Philadelphia_Street_Trees/FeatureServer/0',
            type: 'http-get-nearby',
            color: 'orange',
            fillColor: 'orange',
            fillOpacity: 0.5,
            weight: 1,
            minZoom: 16

          },
          vacantLand: {
            url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Vacant_Indicators_Land/FeatureServer/0',
            color: 'orange',
            fillColor: 'orange',
            fillOpacity: 0.5,
            weight: 1,
            minZoom: 16
          },
          vacantBuilding: {
            url: '//services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/Vacant_Indicators_Bldg/FeatureServer/0',
            color: 'purple',
            fillColor: 'purple',
            fillOpacity: 0.5,
            weight: 1,
            minZoom: 16
          }
        },
        tools: {
          buffer: {
            url: '//gis.phila.gov/arcgis/rest/services/Geometry/GeometryServer/buffer'
          },
          distance: {
            url: '//gis.phila.gov/arcgis/rest/services/Geometry/GeometryServer/distance'
          }
        }
      },
      carto: {
        baseUrl: '//phl.carto.com/api/v2/sql',
      },
    };
  }
})();
