module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['scripts/*.js'],
                tasks: ['browserify','eslint','uglify'],
                options: {
                    spawn: false,
                },
            }
        },
        browserify: {
            dist: {
                files: {
                    'build/bundle.js': ['scripts/main.js'],
                },
            },
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'scripts',
                    src: '*.js',
                    dest: 'build',
                    ext: '.min.js'
                }]
            }
        },
        eslint: {
            extends: 'eslint:recommended',
            src: ['scripts/*.js']
        }
    })
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('gruntify-eslint')
        
    
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'watch', 'eslint'])
    
}