module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        qunit: {
            all: ['test/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    moz: true
                }
            }

        },
        jsbeautifier: {
            files: ['Gruntfile.js', 'src/**/*.js']
        },
    env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: './firefox_profile/extensions/lemutar@gmail.com/'
      }
    },
    instrument: {
      files: 'firefox_profile/extensions/lemutar@gmail.com/modules/*.js',
      options: {
        lazy: true,
        basePath: './'
      }
    },
    shell: {                                // Task
        runtest: {                      // Target
            command: [
                        'ruby fire-test-runner --profile="firefox_profile" --quit --close-main-windows ./test/ '
                        ].join('&&')
            




        }
    },
    storeCoverage: {
      options: {
        dir: 'test/coverage/reports'
      }
    },
    makeReport: {
      src: 'test/coverage/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'test/coverage/reports',
        print: 'detail'
      }
    }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-istanbul');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('coverage', ['env:coverage', 'instrument', 'shell:runtest',
    'storeCoverage', 'makeReport']);

    grunt.registerTask('default', ['jsbeautifier', 'jshint','qunit']);

};







