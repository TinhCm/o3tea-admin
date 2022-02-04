var API_contact = 'https://o3tea.glitch.me/contact'
var API_list = 'https://o3tea.glitch.me/list'
var API_email = 'https://o3tea.glitch.me/email'
const $ = document.querySelector.bind(document);

function start() {
    xuLi_db_contact();
    xuLi_db_email();
    xuLi_search();
}
start();

//API_contact
function get_db_contact(callback) {
    fetch(API_contact)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function create_db_contact(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_contact, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuLi_db_contact() {

    var contact_content_sent = $('.contact_content_sent');

    contact_content_sent.onclick = function(e) {
        var contact_content_name = $('.contact_content_name').value;
        var contact_content_name_check = $('.contact_content_name_check');
        var contact_content_phone = $('.contact_content_phone').value;
        var contact_content_phone_check = $('.contact_content_phone_check');
        var contact_content_email = $('.contact_content_email').value;
        var contact_content_email_check = $('.contact_content_email_check');
        var contact_content_content = $('.contact_content_content').value;
        var contact_content_content_check = $('.contact_content_content_check');
        var contact_content_sent_check = $('.contact_content_sent_check');
        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
            today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        get_db_contact(check_exist)

        function check_exist(contact) {
            var check_exist = contact.some(function(contacts) {
                return contacts.contact === contact_content_name;
            })

            if (contact_content_name === "") {
                contact_content_name_check.innerHTML = "Vui lòng nhập họ tên!"
            } else if (contact_content_phone === "") {
                contact_content_name_check.innerHTML = "";
                contact_content_phone_check.innerHTML = "Vui lòng nhập số điện thoại!"
            } else if (contact_content_email === "") {
                contact_content_name_check.innerHTML = "";
                contact_content_phone_check.innerHTML = "";
                contact_content_email_check.innerHTML = "Vui lòng nhập email!"
            } else if (contact_content_content === "") {
                contact_content_name_check.innerHTML = "";
                contact_content_phone_check.innerHTML = "";
                contact_content_email_check.innerHTML = "";
                contact_content_content_check.innerHTML = "Vui lòng nhập nội dung!"
            } else {
                formData = {
                    name: contact_content_name,
                    phone: contact_content_phone,
                    email: contact_content_email,
                    content: contact_content_content,
                    date: date,
                }
                create_db_contact(formData, function() {
                    contact_content_sent_check.innerHTML = "Gửi yêu cầu thành công!";
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                })
            }
        }
    }
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

    var contact = $('.contact')
    contact.onclick = function() {
        var result = $('.result');
        result.classList.add('display');
    }
}