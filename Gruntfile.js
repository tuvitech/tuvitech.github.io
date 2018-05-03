module.exports = function(grunt) {
  grunt.initConfig({
    cssmin:{
      minLibCSS: {
        files:{
          'dest/css/lib.min.css': [
            'css/libs/bootstrap.css',
            'css/libs/jquery-ui-slider-pips.css',
            'css/libs/jquery.mCustomScrollbar.css',
            'css/libs/jquery-ui.css',
            'css/libs/jquery-ui.structure.css',
            'css/libs/jquery-ui.theme.css',
            'css/libs/skins/blue.monday/jplayer.blue.monday.css',
            'css/libs/lightbox.css'
          ]
        }
      },
      minCustomCSS: {
        files: {
          'dest/css/custom.min.css': [
            'css/style.css',
            'css/main.css',
            'css/component.css'
          ]
        }
      }
    },
    uglify: {
      minLibJS: {
        files: {
          'dest/js/lib.min.js': [
            'js/libs/modernizr.custom.js',
            'js/libs/jquery.js',
            'js/libs/jquery-ui.js',
            'js/libs/jquery.ui.rlightbox.js',
            'js/libs/bootstrap.js',
            'js/libs/classie.js',
            'js/libs/mlpushmenu.js',
            'js/libs/touch.js',
            'js/libs/xml2json.js',
            'js/libs/jquery.jplayer.js',
            'js/libs/jquery.mCustomScrollbar.js',
            'js/libs/sly.js',
            'js/libs/jquery.flip.js',
            'js/libs/modernizr-latest.js',
            'js/libs/detectizr.js',
            'js/libs/jquery.nicescroll.js',
            'js/libs/jquery-ui-slider-pips.js',
            'js/libs/raphael.js',
            'js/libs/bootstrap-confirm.js',
            'js/libs/spin.js'
          ]
        }
      },
      minCustomJS: {
        files: {
          'dest/js/custom.min.js': [
            'js/api/authentication.js',
            'js/api/common.js',
            'js/api/notes.js',
            'js/api/lesson.js',
            'js/api/lessonStatus.js',
            'js/api/changeManager.js',
            'js/api/bookmark.js',
            'js/api/answer.js',
            'js/introduction.js',
            'js/bottom.js',
            'js/left.js',
            'js/top.js',
            'js/right.js',
            'js/flashcard.js',
            'js/bulletedlist.js',
            'js/mcq.js',
            'js/tabbedtable.js',
            'js/knowledgeCheck.js',
            'js/knowledgeCheckMCQ.js',
            'js/imageLightBox.js',
            'js/hotSpot.js',
            'js/slideshow.js',
            'js/clinicalBranchingCaseStudy.js',
            'js/modalwindow.js',
            'js/conversation.js',
            'js/shell.js',
            'js/main.js',
            'js/mentorIntro.js',
            'js/mentorFeedback.js',
            'js/lessonIntro.js',
            'js/patientIntro.js',
            'js/scenarioInitialQuestion.js',
            'js/scenarioInitialQuestionMCQ.js',
            'js/result.js',
            'js/followup.js',
            'js/true_false.js',
            'js/popup_screen.js',
            'js/category_sorting.js',
            'js/sequencing.js',
            'js/sentence_completion.js',
            'js/matching.js',
            'js/matching_media.js',
            'js/clickToReveal.js',
            'js/slider_screen.js',
            'js/choosePatient.js',
            'js/image_labeling.js',
            'js/finalExam.js',
            'js/finalExam_result.js',
            'js/retake.js',
            'js/api.js',
            'js/video_animation.js',
            'js/patient.js'
          ]
        }
      }
    },
    watch: {
      css: {
        files: ['css/**/*.css'],
        tasks: ['cssmin']
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['cssmin','uglify', 'watch']);

};
