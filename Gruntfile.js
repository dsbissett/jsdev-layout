module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            app: {
                src: 'src/ts/app.js',
                dest: 'src/build/js/app.bundle.js',
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        uglify: {
            app: {
                files: {
                    'dist/js/app.bundle.min.js': ['dist/js/app.bundle.js']
                }
                //,
                //options: {
                //    mangle: {
                //        except: ['jQuery']
                //    },
                //    compress: {
                //        drop_console: true
                //    },
                //    preserveComments: false,
                //    screwIE8: true,
                //    quoteStyle: 1
                //}
            }
        },
        watch: {
            app: {
                files: ['src/ts/**/*.js'],
                tasks: ['browserify']
            },
            options: {
                livereload: true
            }
        },
        connect: {
            app: {
                options: {
                    port: 9001,
                    base: './dist',
                    middleware: function(connect, options, middlewares) {
                        middlewares.unshift(require('connect-livereload')());
                        return middlewares;
                    }
                }
            }
        },
        jasmine: {
            app: {
                options: {
                    sepcs: 'spec/**/*.spect.js'
                }
            }
        },
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            src: [
                "src/*.ts",
                "src/**/*.ts",
            ],
            test: [
                "test/**/*.ts",
                "!test/**/*.test.ts",
                "!test/typings/*.ts"
            ]
        },
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-tslint');

    grunt.registerTask('lint', ['tslint']);
    grunt.registerTask('default', ['browserify']);
    grunt.registerTask('uglify', ['uglify']);
    grunt.registerTask('serve', ['browserify:app', 'connect:app', 'watch:app']);
}
