var API_list = 'https://o3tea.glitch.me/list'
var API_email = 'https://o3tea.glitch.me/email'
const $ = document.querySelector.bind(document);

function start() {
    get_db_ts(post_db_ts);
    xuLi_db_email();
    xuLi_search();
}
start();

//Trà sữa
function get_db_ts(callback) {
    fetch(API_list)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function create_db_ts(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_list, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function post_db_ts(list) {
    var loc_NE = list.filter(function(lists) {
        return lists.maLoai === "TS";
    })

    var htmls = loc_NE.map(function(lists) {
        return "<li class='content_backend width_column_5 width_row '>" + "<img " + "src='" + lists.img + "' class='content2_sanPham' >" +
            "</img>" +
            "<p class='content2_tenSanPham'>" + lists.name + "</p>" +
            "<span>" + lists.gia + "</span>" +
            "</li>"
    })


    $('.traSua_hien').innerHTML = htmls.join('');
}

//API email
function get_db_email(callback) {
    fetch(API_email)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function create_db_email(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_email, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuLi_db_email() {
    var footer1_right_button = $('.footer1_right_button');
    footer1_right_button.onclick = function(e) {
        var footer1_right_email = $('.footer1_right_email').value;
        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
            today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        get_db_email(check_exist)

        function check_exist(email) {
            var check_exist = email.some(function(emails) {
                return emails.email === footer1_right_email;
            })

            var footer1_right2 = $('.footer1_right2');

            if (footer1_right_email === "") {
                footer1_right2.innerHTML = "Vui lòng nhập email!"
            } else if (check_exist == true) {
                footer1_right2.innerHTML = "Email đã tồn tại!"
            } else {
                formData = {
                    email: footer1_right_email,
                    date: date,
                }
                create_db_email(formData, function() {
                    footer1_right2.innerHTML = "Đăng ký thành công!";
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                })
            }
        }
    }
}

//Search

function get_db(callback) {
    fetch(API_list)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function create_db(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_list, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function post_db(list) {
    var header_search_input = $('.header_search_input').value.toLowerCase();

    var loc_NE = list.filter(function(lists) {
        return lists.name.toLowerCase() === header_search_input;
    })

    if (loc_NE.length == 0) {
        $('.result_none').innerHTML = "Kết quả tìm kiếm: 0/99+";
        $('.result_none2').innerHTML = "Không có kết quả nào được tìm thấy";
    } else {
        var htmls = loc_NE.map(function(lists) {
            return "<h4>Kết quả tìm kiếm: 1/99+</h4>" + "<img " + "src='" + lists.img + "' class='content2_sanPham' >" +
                "</img>" +
                "<p class='content2_tenSanPham'>" + lists.name + "</p>" +
                "<span>" + lists.gia + "</span>"
        })

        $('.result').innerHTML = htmls.join('');
    }
}

function xuLi_search() {
    //Nhấp phím tìm
    var header_seach_button = $('.header_seach_button');
    header_seach_button.onclick = function(e) {
        get_db(post_db);
        var result = $('.result');
        result.classList.add('background');
        result.classList.remove('display');
    }

    //Nhấn phím enter
    var header_search_input = $('.header_search_input');

    header_search_input.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            get_db(post_db);
            var result = $('.result');
            result.classList.add('background');
            result.classList.remove('display');
        }
    }

    var traSua_content = $('.traSua_content')
    traSua_content.onclick = function() {
        var result = $('.result');
        result.classList.add('display');
    }
}