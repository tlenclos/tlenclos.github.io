var fs = require('fs');
var through = require("through");
var cvDirectory = 'cv/';
var cvHtmlFile = cvDirectory+'cv.html';
fs.unlinkSync(cvHtmlFile);

function md_title1(value) {
    return '# '+value+' #\n';
}

function md_title2(value) {
    return '## '+value+' ##\n';
}

function md_list_object(data, formatInline) {
    var listStr = '';
    var linkChar = '.';

    for (key in data) {
        if (!formatInline) {
            listStr += '**'+key+'**:';
            linkChar = ',';
        }

        if (Array.isArray(data[key])) {
            listStr += '\n'+data[key].join(linkChar+' ')+'.\n\n';
        } else {
            listStr += ' '+data[key]+'.\n\n';
        }
    }

    return listStr;
}

function jsonToMarkdown(json) {
    var markdown = '';
    for (key in json) {
        if (key[0] == '_')
            break;

        markdown += md_title1(key);
        var item = json[key];

        if (typeof item === 'object') {
            // Lvl 2 titles
            for (key in item) {
                if (key[0] == '_')
                    break;

                markdown += md_title2(key);

                var subItem = item[key];
                if (Array.isArray(subItem)) {
                    markdown += md_list_object(subItem, true);
                } else if (typeof subItem === 'object') {
                    markdown += md_list_object(subItem);
                }
            }
        }
    }

    return markdown;
}


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/*.js',
        dest: 'build/script.min.js'
      }
    },
    recess: {
        dist: {
            options: {
                compile: true,
                compress: true
            },
            files: {
                'build/styles.css': [
                    'css/icons.css',
                    'css/pure-min.css',
                    'css/style.css'
                ]
            }
        }
    },
    convert: {
      options: {
          explicitArray: false
      },
      json2xml: {
          options: {
              xml: {
                  pretty: true,
                  header: true
              }
          },
          src: [cvDirectory+'cv.json'],
          dest: cvDirectory+'cv.xml'
      }
    },
    markdownpdf: {
      options: {
          preProcessHtml: function () {
            return through(function (data) {
                fs.appendFile(cvHtmlFile, data);
                this.queue(data);
            })
          }
      },
      files: {
        src: cvDirectory+"cv.md",
        dest: cvDirectory
      }
    }
  });

  // Build CV from JSON to Markdow
  var cvJsonString = grunt.file.readJSON(cvDirectory+'cv.json');
  var cvMarkdownString = jsonToMarkdown(cvJsonString);
  grunt.file.write(cvDirectory+'cv.md', cvMarkdownString);

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-convert');
  grunt.loadNpmTasks('grunt-markdown-pdf');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'recess', 'convert', 'markdownpdf']);

};
