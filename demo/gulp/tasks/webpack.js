import path from 'path';
import gulp from 'gulp';
import webpack from 'webpack';
import gutil from 'gulp-util';
import { DIR, isProduction } from '../conf';

const webpackConfigBase = require('../../webpack.config');
const webpackConfig = Object.create(webpackConfigBase);

if (isProduction) { // build
  webpackConfig.output.path = path.resolve('.', `${DIR.DST}`);
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  );
} else {
  webpackConfig.output.path = path.resolve('.', `${DIR.DST}`);
  webpackConfig.cache = webpackConfig.debug = true;
  // webpackConfig.devtool = '#inline-source-map';
}
const webpackCompiler = webpack(webpackConfig);


gulp.task('webpack', cb => {
  webpackCompiler.run((err, stats) => {
    if (err) { throw new gutil.PluginError('webpack', err); }
    gutil.log('[webpack]', stats.toString({ colors: true }));
    cb();
  });
});
