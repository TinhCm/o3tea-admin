var API_list = 'https://o3tea.glitch.me/list'
var API_email = 'https://o3tea.glitch.me/email'
var API_contact = 'https://o3tea.glitch.me/contact'
const $ = document.querySelector.bind(document);

function start() {
    xuLi_db_add();
    xuLi_db_email();
    xuLi_search();
    get_db_email(post_db_email);
    get_db_contact(post_db_contact);
}
start();

//Thêm sản phẩm
function get_db_ne(callback) {
    fetch(API_list)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function create_db_ne(data, callback) {
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

function xuLi_db_add() {

    var add_sanPham_list_buttom = $('.add_sanPham_list_buttom');

    add_sanPham_list_buttom.onclick = function(e) {
        var maLoai;
        var add_sanPham_tenLoai = $('.add_sanPham_tenLoai').value;
        var add_sanPham_tenLoai_h4 = $('.add_sanPham_tenLoai_h4');
        var add_sanPham_tenSP = $('.add_sanPham_tenSP').value;
        var add_sanPham_tenSP_h4 = $('.add_sanPham_tenSP_h4');
        var add_sanPham_lienKet = $('.add_sanPham_lienKet').value;
        var add_sanPham_lienKet_h4 = $('.add_sanPham_lienKet_h4');
        var add_sanPham_gia = $('.add_sanPham_gia').value;
        var add_sanPham_gia_h4 = $('.add_sanPham_gia_h4');
        var add_sanPham_banChay = $('.add_sanPham_banChay').value;
        var add_sanPham_banChay_h4 = $('.add_sanPham_banChay_h4');
        var add_sanPham_moTa = $('.add_sanPham_moTa').value;
        var add_sanPham_moTa_h4 = $('.add_sanPham_moTa_h4');

        var add_sanPham_list_buttom_h4 = $('.add_sanPham_list_buttom_h4');

        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '-' +
            today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        get_db_ne(check_exist2)

        function check_exist2(list) {
            var check_exist = list.some(function(lists) {
                return lists.name.toLowerCase() === add_sanPham_tenSP.toLowerCase();
            })

            if (check_exist2 == true) {
                add_sanPham_list_buttom_h4.innerHTML = "Sản phẩm đã tồn tại!";
            } else {

                if (add_sanPham_tenLoai === "") {
                    add_sanPham_tenLoai_h4.innerHTML = "Vui lòng nhập tên loại!"
                } else if (add_sanPham_tenSP === "") {
                    add_sanPham_tenLoai_h4.innerHTML = "";
                    add_sanPham_tenSP_h4.innerHTML = "Vui lòng nhập tên sản phẩm!"
                } else if (add_sanPham_lienKet === "") {
                    add_sanPham_tenLoai_h4.innerHTML = "";
                    add_sanPham_tenSP_h4.innerHTML = "";
                    add_sanPham_lienKet_h4.innerHTML = "Vui lòng nhập liên kết hình ảnh!"
                } else if (add_sanPham_gia === "") {
                    add_sanPham_tenLoai_h4.innerHTML = "";
                    add_sanPham_tenSP_h4.innerHTML = "";
                    add_sanPham_lienKet_h4.innerHTML = "";
                    add_sanPham_gia_h4.innerHTML = "Vui lòng nhập giá bán!"
                } else if (add_sanPham_banChay === "") {
                    add_sanPham_tenLoai_h4.innerHTML = "";
                    add_sanPham_tenSP_h4.innerHTML = "";
                    add_sanPham_lienKet_h4.innerHTML = "";
                    add_sanPham_gia_h4.innerHTML = "";
                    add_sanPham_banChay_h4.innerHTML = "Vui lòng nhập trạng thái!"
                } else {
                    if (add_sanPham_tenLoai.toLowerCase() === "nước ép") {
                        maLoai = "NE"
                    } else if (add_sanPham_tenLoai.toLowerCase() === "sinh tố") {
                        maLoai = "ST"
                    } else if (add_sanPham_tenLoai.toLowerCase() === "trà sữa") {
                        maLoai = "TS"
                    } else if (add_sanPham_tenLoai.toLowerCase() === "trà trái cây") {
                        maLoai = "TTC"
                    } else if (add_sanPham_tenLoai.toLowerCase() === "trà hương") {
                        maLoai = "TH"
                    } else if (add_sanPham_tenLoai.toLowerCase() === "khác") {
                        maLoai = "K"
                    }

                    formData = {
                        maLoai: maLoai,
                        tenLoai: add_sanPham_tenLoai,
                        name: add_sanPham_tenSP,
                        img: add_sanPham_lienKet,
                        gia: add_sanPham_gia + "đ",
                        banChay: add_sanPham_banChay,
                        moTa: add_sanPham_moTa,
                        date: date
                    }
                    create_db_ne(formData, function() {
                        add_sanPham_list_buttom_h4.innerHTML = "Tạo thành công!";
                        setTimeout(() => {
                            location.reload();
                        }, 1000);
                    })
                }
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

    //Home
    var chaoMung = $('.chaoMung')
    var chaoMung_content = $('.chaoMung_content');
    var result = $('.result');
    chaoMung.onclick = function() {
        var result = $('.result');
        result.classList.add('display');
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

function post_db_email(email) {
    var htmls = email.map(function(emails) {
        return `<li class = "">
                <h4 class = "duLieu1a">${emails.email}</h4>
            </li>`
    })

    document.querySelector('.mail_ul').innerHTML = htmls.join('');
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

//Contact

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

function post_db_contact(contact) {
    var htmls = contact.map(function(contacts) {
        return `<li class = "">
                <h4 class = "duLieu1a">Họ và tên:  ${contacts.name}</h4>
                <h4 class = "duLieu1a">Số điện thoại: ${contacts.phone}</h4>
                <h4 class = "duLieu1a">Email: ${contacts.email}</h4>
                <h4 class = "duLieu1a">Nội dung: ${contacts.content}</h4>
                <h4 class = "duLieu1a">Thời gian gửi yêu cầu: ${contacts.date}</h4>
            </li>`
    })

    document.querySelector('.contact_admin_ul').innerHTML = htmls.join('');
}