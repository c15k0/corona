module.exports = {
  name: 'corona',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/corona',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
