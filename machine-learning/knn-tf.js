require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');

/*
 * features,
 * labels,
 * predictionPoint: tensor of a test features, [lat, lon], that we want to make a prediction for
 */
function knn(features, labels, predictionPoint, k) {
  // TODO: comment
  const { mean, variance } = tf.moments(features, 0);
  // TODO: comment
  const scaledPrediction = predictionPoint.sub(mean).div(variance.pow(.5));

  return features
    // standardization: the square-footage feature numerically outweighs the other features, so
    //   it needs to be properly scaled (i.e., normalized) to give it proper weight when compared
    //   with the other two features. A normal distribution (between 0-1) would let outliers
    //   affect the data too much (and in our sample data there's a house with a shitload of
    //   square footage), so it's better to standardize the data, which produces a clustering
    //   around 0, with

    .sub(mean)
    .div(variance.pow(.5))
    // DISTANCE
    // getting distance between prediction point and observations (i.e., the arrays of lat/lon)
    .sub(scaledPrediction) // sub prediction from each observation
    .pow(2) // scale the features by raising to power of 2
    .sum(1) // sum each row; changes shape to be 1d
    .pow(0.5) // square root
    // SORTING: getting closest data points to prediction point
    .expandDims(1) // labels are 2d tensor, features currently 1d; so, expand for concat
    .concat(labels, 1) // our labels/distances are in 2 arrays, need them in 1 before sort
    .unstack() // tf.js has no native sorting; unstacking: tensor -> [subTensor, subTensor ...]
    .sort((a, b) => (a.get(0) > b.get(0) ? 1 : -1)) // can now sort; sorting least distance first
    .slice(0, k) // take first k values
    // AVERAGING: total house prices / k, gives predicted price
    .reduce((acc, pair) => acc + pair.get(1), 0) / k;
}

let { features, labels, testFeatures, testLabels } = loadCSV('kc_house_data.csv', {
  // shuffle: shuffles data
  shuffle: true,
  // splitTest: get a set of test data
  splitTest: 10,
  // dataColumns: columns we want back in our features
  dataColumns: ['lat', 'long', 'sqft_lot', 'sqft_living', 'condition'],
  // labelColumns: columns we want back for our label(s) TODO: more specific, with example
  labelColumns: ['price']
});

features = tf.tensor(features);
labels = tf.tensor(labels);

testFeatures.forEach((testPoint, i) => {
  // result: predicted house price
  const result = knn(features, labels, tf.tensor(testPoint), 6);
  // err: margin of error
  // TODO: comment
  const err = (result - testLabels[i][0]) / testLabels[i][0];
  // better rounding
  console.log(`Error distance as percentage: about ${err.toFixed(4) * 100}%`);
});

