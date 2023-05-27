$('.delete-confirm').on('click', function(event) {
    event.preventDefault();
    var url = $(this).attr('href');
    swal.fire({
        title: "Delete?",
        text: "Please ensure and then confirm!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: !0
    }).then(function(e) {
        if (e.value === true) {
            var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
            var id = url.substring(url.lastIndexOf('/') + 1);

            $.ajax({
                type: 'DELETE',
                url: url,
                data: { _token: CSRF_TOKEN },
                dataType: 'JSON',
                success: function(response) {

                    if (response.success === true) {
                        swal.fire("Done!", response.message, "success");
                        $('#table-row-' + id).remove();
                    } else {
                        swal.fire("Error!", response.message, "error");
                    }
                }
            });

        } else {
            e.dismiss;
        }
    }, function(dismiss) {
        return false;
    });
});

$('.restore-confirm').on('click', function(event) {
    event.preventDefault();
    var url = $(this).attr('href');
    swal.fire({
        title: "Restore?",
        text: "Please ensure and then confirm!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonText: "Yes, restore it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: !0
    }).then(function(e) {
        if (e.value === true) {
            var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
            var segments = url.split('/');
            var id = segments[5];

            $.ajax({
                type: 'PATCH',
                url: url,
                data: { _token: CSRF_TOKEN },
                dataType: 'JSON',
                success: function(response) {

                    if (response.success === true) {
                        swal.fire("Done!", response.message, "success");
                        $('#table-row-' + id).remove();
                    } else {
                        swal.fire("Error!", response.message, "error");
                    }
                }
            });

        } else {
            e.dismiss;
        }
    }, function(dismiss) {
        return false;
    });
});

$('.permanent-delete-confirm').on('click', function(event) {
    event.preventDefault();
    var url = $(this).attr('href');
    swal.fire({
        title: "Delete?",
        text: "Please ensure and then confirm!",
        type: "warning",
        showCancelButton: !0,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: !0
    }).then(function(e) {
        if (e.value === true) {
            var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
            var segments = url.split('/');
            var id = segments[5];

            $.ajax({
                type: 'DELETE',
                url: url,
                data: { _token: CSRF_TOKEN },
                dataType: 'JSON',
                success: function(response) {

                    if (response.success === true) {
                        swal.fire("Done!", response.message, "success");
                        $('#table-row-' + id).remove();
                    } else {
                        swal.fire("Error!", response.message, "error");
                    }
                }
            });

        } else {
            e.dismiss;
        }
    }, function(dismiss) {
        return false;
    });
});

function convertToSlug(Text) {

    return Text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

$("input[name='title'],input[name='name']").keyup(function() {
    var slug = convertToSlug($(this).val());
    $("input[name='slug']").val(slug);
});

$("select[name='program_id']").on('change', function(event,
    selectedFaculty,
    selectedGrade,
    selectedSubject,
    selectedUnit,
    selectedLesson,
    selectedNote
) {
    $("select[name='faculty_id']").find('option').not(':first').remove();
    $("select[name='grade_id']").find('option').not(':first').remove();
    $("select[name='subject_id']").find('option').not(':first').remove();
    $("select[name='unit_id']").find('option').not(':first').remove();
    $("select[name='lesson_id']").find('option').not(':first').remove();
    $("select[name='note_id']").find('option').not(':first').remove();
    getFacultiesByProgram(
        $(this).val(),
        selectedFaculty,
        selectedGrade,
        selectedSubject,
        selectedUnit,
        selectedLesson,
        selectedNote
    );
});

function getFacultiesByProgram(
    programId,
    selectedFaculty,
    selectedGrade,
    selectedSubject,
    selectedUnit,
    selectedLesson,
    selectedNote
) {
    if (programId == "")
        return;

    $.ajax({
        type: "GET",
        url: "/admin/program/" + programId + "/faculties",
        success: function(data) {

            $.each(data.faculties, function(index, value) {
                selectedHtml = ''
                if (value.id == selectedFaculty) {
                    selectedHtml = 'selected'
                }
                $("select[name='faculty_id']").append('<option value="' + value.id + '" ' + selectedHtml + ' >' + value.name + '</option>');
            });

            $("select[name='faculty_id']").trigger('change', [selectedGrade, selectedSubject, selectedUnit, selectedLesson, selectedNote])
        }
    });

}

$("select[name='faculty_id']").on('change', function(event,
    selectedGrade,
    selectedSubject,
    selectedUnit,
    selectedLesson,
    selectedNote
) {
    $("select[name='grade_id']").find('option').not(':first').remove();
    $("select[name='subject_id']").find('option').not(':first').remove();
    $("select[name='unit_id']").find('option').not(':first').remove();
    $("select[name='lesson_id']").find('option').not(':first').remove();
    $("select[name='note_id']").find('option').not(':first').remove();
    getGradesByFaculty(
        $(this).val(),
        selectedGrade,
        selectedSubject,
        selectedUnit,
        selectedLesson,
        selectedNote
    );
});

function getGradesByFaculty(
    facultyId,
    selectedGrade,
    selectedSubject,
    selectedUnit,
    selectedLesson,
    selectedNote
) {
    if (facultyId == "")
        return;

    $.ajax({
        type: "GET",
        url: "/admin/faculty/" + facultyId + "/grades",
        success: function(data) {
            $.each(data.grades, function(index, value) {
                selectedHtml = ''
                if (value.id == selectedGrade) {
                    selectedHtml = 'selected'
                }
                $("select[name='grade_id']").append('<option value="' + value.id + '" ' + selectedHtml + ' >' + value.name + '</option>');
            });

            $("select[name='grade_id']").trigger('change', [selectedSubject, selectedUnit, selectedLesson, selectedNote])
        }
    });
}


$("select[name='grade_id']").on('change', function(event,
    selectedSubject,
    selectedUnit,
    selectedLesson,
    selectedNote
) {
    $("select[name='subject_id']").find('option').not(':first').remove();
    $("select[name='unit_id']").find('option').not(':first').remove();
    $("select[name='lesson_id']").find('option').not(':first').remove();
    $("select[name='note_id']").find('option').not(':first').remove();
    getSubjectsByGrade(
        $(this).val(),
        selectedSubject,
        selectedUnit,
        selectedLesson,
        selectedNote
    );
});

function getSubjectsByGrade(
    gradeId,
    selectedSubject,
    selectedUnit,
    selectedLesson,
    selectedNote
) {

    if (gradeId == "")
        return;

    $.ajax({
        type: "GET",
        url: "/admin/grade/" + gradeId + "/subjects",
        success: function(data) {
            $.each(data.subjects, function(index, value) {
                selectedHtml = ''
                if (value.id == selectedSubject) {
                    selectedHtml = 'selected'
                }
                $("select[name='subject_id']").append('<option value="' + value.id + '" ' + selectedHtml + ' >' + value.name + '</option>');
            });

            $("select[name='subject_id']").trigger('change', [selectedUnit, selectedLesson, selectedNote])
        }
    });
}

$("select[name='subject_id']").on('change', function(event, selectedUnit, selectedLesson, selectedNote) {
    $("select[name='unit_id']").find('option').not(':first').remove();
    $("select[name='lesson_id']").find('option').not(':first').remove();
    $("select[name='note_id']").find('option').not(':first').remove();
    getUnitsBySubject($(this).val(), selectedUnit, selectedLesson, selectedNote);
});

function getUnitsBySubject(subjectId, selectedUnit, selectedLesson, selectedNote) {

    if (subjectId == "")
        return;

    $.ajax({
        type: "GET",
        url: "/admin/subject/" + subjectId + "/units",
        success: function(data) {
            if (data.units.length == 0) {
                getLessonsBySubject(subjectId, selectedLesson, selectedNote);
                return;
            }
            $.each(data.units, function(index, value) {
                selectedHtml = ''
                if (value.id == selectedUnit) {
                    selectedHtml = 'selected'
                }
                $("select[name='unit_id']").append('<option value="' + value.id + '" ' + selectedHtml + ' >' + value.name + '</option>');
            });

            $("select[name='unit_id']").trigger('change', [selectedLesson, selectedNote])
        }
    });
}


function getLessonsBySubject(subjectId, selectedLesson, selectedNote) {

    if (subjectId == "")
        return;

    $.ajax({
        type: "GET",
        url: "/admin/subject/" + subjectId + "/lessons",
        success: function(data) {
            $.each(data.lessons, function(index, value) {
                selectedHtml = ''
                if (value.id == selectedLesson) {
                    selectedHtml = 'selected'
                }
                $("select[name='lesson_id']").append('<option value="' + value.id + '" ' + selectedHtml + ' >' + value.name + '</option>');
            });

            $("select[name='lesson_id']").trigger('change', [selectedNote])
        }
    });
}

$("select[name='unit_id']").on('change', function(event, selectedLesson, selectedNote) {
    $("select[name='lesson_id']").find('option').not(':first').remove();
    $("select[name='note_id']").find('option').not(':first').remove();
    getLessonsByUnit($(this).val(), selectedLesson, selectedNote);
});

function getLessonsByUnit(unitId, selectedLesson, selectedNote) {

    if (unitId == "")
        return;

    $.ajax({
        type: "GET",
        url: "/admin/unit/" + unitId + "/lessons",
        success: function(data) {
            $.each(data.lessons, function(index, value) {
                selectedHtml = ''
                if (value.id == selectedLesson) {
                    selectedHtml = 'selected'
                }
                $("select[name='lesson_id']").append('<option value="' + value.id + '" ' + selectedHtml + ' >' + value.name + '</option>');
            });

            $("select[name='lesson_id']").trigger('change', [selectedNote])
        }
    });
}

$("select[name='lesson_id']").on('change', function(event, selectedNote) {
    $("select[name='note_id']").find('option').not(':first').remove();
    getNotesByLesson($(this).val(), selectedNote);
});

function getNotesByLesson(lessonId, selectedNote) {

    if (lessonId == "")
        return;

    $.ajax({
        type: "GET",
        url: "/admin/lesson/" + lessonId + "/notes",
        success: function(data) {
            $.each(data.notes, function(index, value) {
                selectedHtml = ''
                if (value.id == selectedNote) {
                    selectedHtml = 'selected'
                }
                $("select[name='note_id']").append('<option value="' + value.id + '" ' + selectedHtml + ' >' + value.title + '</option>');
            });
        }
    });
}


$("select[name='study_period_parent_id']").on('change', function (event, selectedChild) {
    $("select[name='study_period_child_id']").find('option').not(':first').remove();
    getStudyPeriodChildrenByParent($(this).val(), selectedChild);
});

function getStudyPeriodChildrenByParent(parentId, selectedChild) {

    if (parentId == "")
        return;

    $.ajax({
        type: "GET",
        url: "/admin/study-period/" + parentId + "/children",
        success: function (data) {
            $.each(data.children, function (index, value) {
                selectedHtml = ''
                if (value.id == selectedChild) {
                    selectedHtml = 'selected'
                }
                $("select[name='study_period_child_id']").append('<option value="' + value.id + '" ' + selectedHtml + ' >' + value.name + '</option>');
            });
        }
    });
}

$(function() {
    var pbar = $('#progressBar'),
        currentProgress = 0;

    function trackUploadProgress(e) {
        if (e.lengthComputable) {
            currentProgress = (e.loaded / e.total) * 100; // Amount uploaded in percent
            $(pbar).width(currentProgress + '%');

            if (currentProgress == 100) {
                console.log('Progress : 100%');


            }
        }
    }

    function uploadFile() {
        var formData = new FormData($('#form')[0]);
        var url = window.location.href;
        var segments = url.split('/');
        formData.append('module', segments[4]);

        $.ajax({
            url: base_url+"/admin/upload",
            type: 'POST',
            data: formData,
            xhr: function() {
                // Custom XMLHttpRequest
                var appXhr = $.ajaxSettings.xhr();

                // Check if upload property exists, if "yes" then upload progress can be tracked otherwise "not"
                if (appXhr.upload) {
                    // Attach a function to handle the progress of the upload
                    appXhr.upload.addEventListener('progress', trackUploadProgress, false);
                }
                return appXhr;
            },
            success: function(data) {
                console.log('File uploaded !');
                $('img#image').attr("src", data.file_path)
                $("input[name='image']").val(data.file_name)
                $('.uploadpreview.01').css('background-image', 'url(' + data.file_path + ')');
            },
            error: function() { console.log('Error !'); },

            // Tell jQuery "Hey! don't worry about content-type and don't process the data"
            // These two settings are essential for the application
            contentType: false,
            processData: false
        })
    }

    $('#form input[type=file]').change(function(e) {
        e.preventDefault();
        $(pbar).width(0).addClass('active');
        uploadFile();
    });

})

function getYouTubeId(url) {
    var videoId = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
        videoId = url[2].split(/[^0-9a-z_\-]/i);
        videoId = videoId[0];
    }
    return videoId;
}


function getTitleFromYouTubeApi(videoId) {
    $.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + youtubeApiKey, function(data) {
        return $("input[name='title']").val(data.items[0].snippet.title);
    });
}

function getDescriptionFromYoutubeApi(videoId){
    var desc=null;
    $.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + youtubeApiKey, function(data) {
        var desc = JSON.stringify(data.items[0].snippet.description);
        console.log(desc);
        CKEDITOR.instances.description.setData(desc);

    });
    return desc;
}


$("input[name='url']").keyup(function() {
    var videoId = getYouTubeId($(this).val());
    if (videoId != '') {
        $("input[name='key']").val(videoId);
        $("input[name='title']").val(getTitleFromYouTubeApi(videoId));
        CKEDITOR.instances['description'].setData(getDescriptionFromYoutubeApi(videoId));
    }
});



$('.live-preview .icheck-primary input').on('change', function() {

    var n = $("input:checked").length;
    if (n > 0) {
        $('.live-content-wr').show()
    } else {
        $('.live-content-wr').hide()
    }

})


$('.live-content-wr .close-wrapp').on('click', function() {

    $('.live-content-wr').hide();
    $('.live-preview .icheck-primary input').prop("checked", false);
})