// imports
import { src, dest, parallel, watch } from 'gulp'
import bs from 'browser-sync'
import 'sucrase/register/ts'
import autoprefix from 'autoprefixer'
import cssNano from 'cssnano'
import terser from 'gulp-terser'
import htmlMin from 'gulp-htmlmin'
import postCss from 'gulp-postcss'
import imgMin from 'gulp-imagemin'

// dont suport for imports
const sucrase = require('@sucrase/gulp-plugin')

// init process
bs.create()

// paths
const tsPath = './src/ts/**/*.ts'

const jsCompiled = './src/js/'
const jsPath = './src/js/*.js'
const cssPath = './src/css/*.css'
const imgPath = './src/assets/img/**/*'
const htmlPath = './src/*.html'

const jsBuildDest = './dist/js/'
const htmlBuildDest = './dist/'
const cssBuildDest = './dist/css/'
const imgBuildDest = './dist/assets/img'

// tasks
const imageTask = async () => {
  src(imgPath)
    .pipe(imgMin())
    .pipe(dest(imgBuildDest))
}

const htmlTask = async () => {
  src(htmlPath)
    .pipe(htmlMin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(htmlBuildDest))
}

const jsTask = async () => {
  src(jsPath)
    .pipe(terser())
    .pipe(dest(jsBuildDest))
}

const cssTask = async () => {
  src(cssPath)
    .pipe(postCss([autoprefix(), cssNano()]))
    .pipe(dest(cssBuildDest))
}

const watchTask = () => {
  bs.init({
    server: {
      baseDir: './src/'
    }
  })

  watch(tsPath).on('change', tsCompile)
  watch([jsPath, cssPath, htmlPath]).on('change', () => {
    bs.reload()
  })
}

const tsCompile = async () => {
  src(tsPath)
  .pipe(sucrase({ transforms: ["typescript"] }))
  .pipe(dest(jsCompiled))
}

// export tasks
exports.default = parallel(tsCompile, htmlTask, cssTask, jsTask, imageTask)
exports.watch = watchTask
exports.ts = tsCompile
exports.css = cssTask
exports.js = jsTask
exports.html = htmlTask