var dest_root = 'www';
var src_root = 'src';
var ts_options = {
    module: 'amd',
    target: 'es5',
    removeComments: true,
    references: [
        src_root + "/js/typings/*.d.ts"
    ]
};
module.exports = function(grunt) {
    grunt.initConfig({
        typescript: {
            app: {
                src: [src_root + '/**/*.ts'],
                dest: dest_root,
                options: ts_options
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: src_root, src: ['**/*.html'], dest: dest_root },
                    //{ expand: true, cwd: src_root, src: ['**/*.js'], dest: dest_root },
                    { expand: true, cwd: src_root, src: ['js/**/*.js'], dest: dest_root },
                ]
            }
        },
        less: {
            app: {
                files: [{
                    expand: true,
                    cwd: src_root + '/css/app',
                    src: ['**/*.less'],
                    dest: dest_root + '/css/app',
                    ext: '.css'
                }]
            },
            bootstrap: {
                files: [{
                    src: [src_root + '/css/bootstrap-3.3.5/bootstrap.less'],
                    dest: dest_root + '/css/bootstrap.css'
                }]
            },
            chitu: {
                files: [{
                    src: [src_root + '/css/chitu.less'],
                    dest: dest_root + '/css/chitu.css'
                }]
            }
        },
        clean: {
            css: [src_root + '/css/**/*.css'] // 清除编辑器自动生成的 CSS 文件
        }
    });
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['typescript', 'copy', 'less', 'clean']);
}