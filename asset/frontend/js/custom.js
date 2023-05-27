! function ($) {
    "use strict";



    // Menu
    $('.navbar-toggle').on('click', function (event) {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);
    });

    $('.navigation-menu>li').slice(-1).addClass('last-elements');

    $('.menu-arrow,.submenu-arrow').on('click', function (e) {
        if ($(window).width() < 992) {
            e.preventDefault();
            $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
    });

    $(".navigation-menu a").each(function () {
        if (this.href == window.location.href) {
            $(this).parent().addClass("active");
            $(this).parent().parent().parent().addClass("active");
            $(this).parent().parent().parent().parent().parent().addClass("active");
        }
    });

    // Clickable Menu
    $(".has-submenu a").click(function () {
        if (window.innerWidth < 992) {
            if ($(this).parent().hasClass('open')) {
                $(this).siblings('.submenu').removeClass('open');
                $(this).parent().removeClass('open');
            } else {
                $(this).siblings('.submenu').addClass('open');
                $(this).parent().addClass('open');
            }
        }
    });

    //Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    //Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    //Popover
    $(function () {
        $('[data-toggle="popover"]').popover()
    });
    //Feather icon
    //feather.replace()

}(jQuery)

$(".element").each(function () {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 150, // typing speed
        backDelay: 500 // pause before backspacing
    });
});
$(document).ready(function () {
    $('#testimonial-slick').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: $('.prevBtn'),
        nextArrow: $('.nextBtn'),
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        // touchThreshold: 100,
        speed: 900,
        autoplay: true
    });

    $('#partners-slick').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: $('.prevBtnPartner'),
        nextArrow: $('.nextBtnPartner'),
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        speed: 900,
        autoplay: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2
            }
        }
        ]
    });

    // $('#awards-slick').slick({
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 2,
    //     prevArrow: $('.prevBtnPartner'),
    //     nextArrow: $('.nextBtnPartner'),
    //     cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    //     speed: 900,
    //     autoplay: true,
    //     responsive: [{
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         }, {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 575,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         }
    //     ]
    // })

    // var card = document.querySelector('.btn-flip');

    // card.addEventListener('click', function() {
    //     card.classList.toggle('is-flipped');
    // });

    $(document).on('click', '.btn-flip', function () {
        $('.login-wrapper .inner-wrapper').toggleClass('is-flipped');
    })

    $(document).on('click', '.forgot-password', function () {
        $('.login-wrapper .inner-wrapper').addClass('show-forgot');
    })

    $(document).on('click', '.showRegisterPop', function (e) {
        e.preventDefault();
        $("#login-popup").modal('hide');
        $("#forgotPopup").modal('hide');
        setTimeout(function () {
            $("#staticBackdrop").modal('show');
        }, 1000);
    })




    $(document).on('click', '.showLoginPop', function (e) {
        e.preventDefault();

        $("#forgotPopup").modal('hide');
        $("#staticBackdrop").modal('hide');
        $("#login-popup").modal('show');
    })
    $('.close-login-modal').click(function () {
        $("#login-popup").modal('hide');
    })
    $('.close-register-modal').click(function () {
        $("#staticBackdrop").modal('hide');
    })
    $('.close-forgot-modal').click(function () {
        $("#login-popup").modal('hide');
    })


    $(document).on('click', '.showForgotPop', function (e) {
        e.preventDefault();
        $("#login-popup").modal('hide');
        $("#staticBackdrop").modal('hide');
        $("#forgotPopup").modal('show');
    })

    $(document).on('click', '.btn-flip-back', function () {
        $('.login-wrapper .inner-wrapper').removeClass('show-forgot');
    })

    $(document).on('click', '.btn-close', function () {
        $('.login-wrapper .inner-wrapper').removeClass('show-forgot');
        $('.login-wrapper .inner-wrapper').removeClass('is-flipped');
    })

    $('.btn-register').on('click', function () {
        $('.login-wrapper .inner-wrapper').toggleClass('is-flipped');
    })

    $('.award-title h4').matchHeight();
    $('.note-desc h4').matchHeight();
    $('.note-desc p').matchHeight();
    $('.main-note-single-wrapper ul li').matchHeight();
    $('.news-block .inner-box .lower-content h6').matchHeight();

    $('.venobox').venobox();

    $('.lesson-title').on('click', function () {
        $(this).parent().parent().toggleClass('opened');
    })

    $('.select2').select2();

    // $('.navigation-menu .has-submenu').on('hover', function() {
    //     $(body).addClass('mega_menu-hovered');
    // })

    $(".navigation-menu .has-submenu").hover(
        function () {
            $('body').addClass('mega_menu-hovered');
        },
        function () {
            $('body').removeClass('mega_menu-hovered');
        }
    );

    $("input[name='profession']#occupation_student").click(function () {
        $(this).prop("checked", true);
        $(".occup-wrapper").hide();
        $(".occup-wrapper.occup_grade-wrapper").show();
    });

    $("input[name='profession']#occupation_teacher").click(function () {
        $(this).prop("checked", true);
        $(".occup-wrapper.occup_subject-wrapper").show();
        $(".occup-wrapper.occup_grade-wrapper").hide();
    });

})

$(document).ready(function () {
    $('#summernote').summernote({
        tabsize: 2,
        height: 120,
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview', 'help']]
        ]
    });

    $('.collapse-inner').on('click', function () {
        $(this).parent().toggleClass('opened-lesson');
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    // $("#imageUpload").change(function() {
    //     readURL(this);
    // });
});

$(function () {
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
        formData.append('module', 'user');

        $.ajax({
            url: "/profile/upload",
            type: 'POST',
            data: formData,
            xhr: function () {
                // Custom XMLHttpRequest
                var appXhr = $.ajaxSettings.xhr();

                // Check if upload property exists, if "yes" then upload progress can be tracked otherwise "not"
                if (appXhr.upload) {
                    // Attach a function to handle the progress of the upload
                    appXhr.upload.addEventListener('progress', trackUploadProgress, false);
                }
                return appXhr;
            },
            success: function (data) {

                $("input[name='image']").val(data.file_name)
                $('#imagePreview').css('background-image', 'url(' + data.file_path + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            },
            error: function () { },

            // Tell jQuery "Hey! don't worry about content-type and don't process the data"
            // These two settings are essential for the application
            contentType: false,
            processData: false
        })
    }

    $('#form input[type=file]').change(function (e) {
        e.preventDefault();
        $(pbar).width(0).addClass('active');
        uploadFile();
    });

})

$(function () {
    $('.video-caption h5').matchHeight(false);
});

// Scroll To Up

$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('#scrollUp').addClass('active');
    } else {
        $('#scrollUp').removeClass('active');
    }
});

$('#scrollUp').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});


feather.replace()

// NEWJS
function showSearch() {
    console.log("x")
    var x = document.getElementById("global-search-show");
    if (x.style.transform === "translateY(0px)") {
        x.style.transform = "translateY(-200px)";
    } else {
        x.style.transform = "translateY(0px)";
    }
}

function changeTypeRegister() {
    var passwordInput = document.getElementById("myInput");
    var eyed = document.getElementById("eyed");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyed.className = "fa fa-eye-slash";
    }
    else {
        passwordInput.type = "password";
        eyed.className = "fa fa-eye";
    }
}

function changeTypeRegisterConform() {
    var passwordInputConform = document.getElementById("myInputConform");
    var eyes = document.getElementById("eyes");
    if (passwordInputConform.type === "password") {
        passwordInputConform.type = "text";
        eyes.className = "fa fa-eye-slash";
    }
    else {
        passwordInputConform.type = "password";
        eyes.className = "fa fa-eye";
    }
}
function changeTypeLogin() {
    var passwordInput = document.getElementById("password-field");
    var eye = document.getElementById("eye");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eye.className = "fa fa-eye-slash";
    }
    else {
        passwordInput.type = "password";
        eye.className = "fa fa-eye";
    }
}

$('.partners-wrapper-home').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// COUNTER-FUNCTION
$('#Courses').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$('#Enrolled').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$('#Experts').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// COUNTER-FUNCTION

//quiz
const queryString = window.location.search;
if (queryString) {
    document.getElementById('v-pills-home').classList.remove("show", "active");
    document.getElementById('v-pills-home-tab').classList.remove('active')
    document.getElementById('v-pills-quiz-tab').classList.add('active')
    document.getElementById('v-pills-quiz').classList.add("show", "active");
    document.getElementById('v-pills-tabContent').scrollIntoView({
        behavior: 'smooth'
    });
}
var allQuestions = [
    {
        question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer: 0
    }
    ,
    {
        question: "Who is Genry?",
        choices: ["PTERODACTEL", "Gipsy", "Viktor Prit", "Everything."],
        correctAnswer: 3
    },
    {
        question: "Who is Viktor Prit?",
        choices: ["Genry", "Man of Action", "Gay Lord", "Buryak"],
        correctAnswer: 1
    },
    {
        question: "Where is the Pterodactel?",
        choices: ["In da Kirillovka", "At Genry's place", "In Michael Circle's coffin"],
        correctAnswer: 1
    }];

function Quiz(options) {
    var elem = options.elem;
    var allQuestions = options.questions;
    var q_number = allQuestions.length;

    var answers = [];
    var questions = [];

    var correct_answers = 0;
    var current_number;

    generateQuestions(allQuestions);

    initQuiz();

    function generateQuestions(q) {
        for (var i = 0; i < q_number; i++) {
            var question = document.createElement('div');
            question.classList.add('question');
            question.id = 'question';

            var title = document.createElement('h1');
            title.textContent = q[i].question;

            question.appendChild(title);

            var list = document.createElement('ul');

            for (var j = 0, len = q[i].choices.length; j < len; j++) {
                var choice = document.createElement('li');

                var check = document.createElement('input');
                check.setAttribute('type', 'radio');
                check.setAttribute('name', 'question');

                var choice_text = document.createElement('label');
                choice_text.setAttribute('for', check.name);
                choice_text.textContent = q[i].choices[j];

                choice.appendChild(check);
                choice.appendChild(choice_text);

                list.appendChild(choice);
            }

            var prev_button = document.createElement('button');
            prev_button.textContent = 'Prev';
            prev_button.addEventListener('click', prevQuestion);

            var next_button = document.createElement('button');

            if (i === q_number - 1) {
                next_button.textContent = 'Finish the Quiz';
                next_button.addEventListener('click', finishQuiz);
            }
            else {
                next_button.textContent = 'Next';
                next_button.addEventListener('click', nextQuestion);
            }
            console.log(list);


            question.appendChild(list);

            if (i > 0) question.appendChild(prev_button);
            question.appendChild(next_button);

            questions.push(question);
        }
    }

    function render_question(number) {
        var warning = elem.getElementsByClassName('warning')[0];
        if (warning) {
            elem.removeChild(warning);
        }
        console.log(questions[number])
        elem.appendChild(questions[number]);
        $('#question').hide().fadeIn(500);
    }

    function initQuiz() {
        current_number = 0;
        render_question(current_number);
    }
    function reStart() {
        window.location.search = "restart=true"
    }

    function checkAnswers() {
        for (var i = 0; i < q_number; i++) {
            if (answers[i] === allQuestions[i].correctAnswer) {
                correct_answers++;
            }
        }
    }
    function validateAnswer() {
        var list_items = elem.getElementsByTagName('input');
        var answered = false;
        for (var i = 0, len = list_items.length; i < len; i++) {
            if (list_items[i].checked) {
                answers.push(i);
                answered = true;
                break;
            }
        }
        if (!answered && !elem.getElementsByClassName('warning')[0]) {
            var warning = document.createElement('span');
            warning.textContent = "*Answer the question before you proceed, please.";
            warning.classList.add('warning');

            elem.appendChild(warning);
        }
        return answered;
    }
    function nextQuestion() {
        if (validateAnswer()) {
            elem.removeChild(questions[current_number]);
            current_number++;
            render_question(current_number);
        }
    }
    function prevQuestion() {
        elem.removeChild(questions[current_number]);
        answers.pop();
        current_number--;
        render_question(current_number);
    }
    function finishQuiz() {
        if (validateAnswer()) {
            checkAnswers();
            elem.removeChild(questions[current_number]);
            var result = document.createElement('p');
            var restart = document.createElement('button');
            if (correct_answers === 0) {
                result.textContent = "Thank you for taking this quiz! Sorry, but none of your answers were right :( Try again if you want to improve your score.";
            } else {
                result.textContent = "Thank you for taking this quiz! Your final score is: " + correct_answers + " correct answers!";
            }
            restart.textContent = "Restart"

            elem.appendChild(result);
            var restart_button = document.createElement('button');
            restart_button.textContent = 'Restart';
            restart_button.id = 'restart';
            elem.appendChild(restart_button);
            restart_button.addEventListener('click', reStart);

        }
    }

}

if (document.getElementById('quiz')) {
    var quiz = new Quiz({
        questions: allQuestions
    });
}