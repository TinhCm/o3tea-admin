var API_dang_nhap = 'https://o3tea.glitch.me/user'
var API_list = 'https://o3tea.glitch.me/list'
var API_email = 'https://o3tea.glitch.me/email'
var API_contact = 'https://o3tea.glitch.me/contact'
const $ = document.querySelector.bind(document);

function start() {
    xuLi_db_add();
    get_db_email(post_db_email);
    get_db_contact(post_db_contact);
    xuLi_dang_nhap();
    get_db_ne(post_db_ne);
    setInterval(() => {
        get_db_email(post_db_email);
        get_db_contact(post_db_contact);
        get_db_ne(post_db_ne);
    }, 3000);
}
start();

//Phần API đăng nhập
function layDuLieu_dang_nhap(callback) {
    fetch(API_dang_nhap)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function taoDuLieu_dang_nhap(data, callback) {
    var opption = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }

    fetch(API_dang_nhap, opption)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function xuLi_dang_nhap() {

    //Nhấn phím Enter
    var dang_nhap1_password = $('.dang_nhap1_password');
    dang_nhap1_password.onkeypress = function(e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            var dang_nhap_ten = $('.dang_nhap1_ten');
            var dang_nhap_pass = $('.dang_nhap1_password');
            var nosucces = $('.nosuccses');
            var home = $('.home');
            var dang_nhap = $('.dang_nhap')

            layDuLieu_dang_nhap(check)

            function check(user) {
                var checkten = user.findIndex(function(users) {
                    return users.ten === dang_nhap_ten.value;
                })

                if (checkten != -1) {
                    var checkPast = user.find(function(userss) {
                        return userss.id === (checkten + 1);
                    })
                    if (checkPast.password == dang_nhap_pass.value) {

                        home.classList.add('display')
                        dang_nhap.classList.add('noneDisplay')

                        function setCookie(cname, cvalue, exdays) {
                            const d = new Date();
                            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                            let expires = "expires=" + d.toUTCString();
                            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                        }
                        setCookie("ten", checkPast.ten, 365);
                    } else {
                        nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                    }
                } else {
                    nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                }
            }
        }
    }

    //Nhấn phím đăng nhập
    var dang_nhap = $('.create_dang_nhap')
    dang_nhap.onclick = function() {
        var dang_nhap_ten = $('.dang_nhap1_ten');
        var dang_nhap_pass = $('.dang_nhap1_password');
        var nosucces = $('.nosuccses');
        var home = $('.home');
        var dang_nhap = $('.dang_nhap')

        layDuLieu_dang_nhap(check)

        function check(user) {
            var checkten = user.findIndex(function(users) {
                return users.ten === dang_nhap_ten.value;
            })

            if (checkten != -1) {
                var checkPast = user.find(function(userss) {
                    return userss.id === (checkten + 1);
                })
                if (checkPast.password == dang_nhap_pass.value) {
                    home.classList.add('display')
                    dang_nhap.classList.add('noneDisplay')

                    function setCookie(cname, cvalue, exdays) {
                        const d = new Date();
                        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                        let expires = "expires=" + d.toUTCString();
                        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                    }
                    setCookie("ten", checkPast.ten, 365);
                } else {
                    nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                }
            } else {
                nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
            }
        }
    }
}

const dang_nhap1_password = $('.dang_nhap1_password')
const dang_nhap1_xemMK = $('.dang_nhap1_xemMK')

dang_nhap1_xemMK.addEventListener('click', function() {

    const currentType = dang_nhap1_password.getAttribute('type')

    dang_nhap1_password.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
    )
})

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

function post_db_ne(list) {

    var loc_NE = list.filter(function(lists) {
        return lists.trangThai === 0;
    })

    var htmls = loc_NE.map(function(lists) {
        return "<li class='content_backend width_column_5 width_row '>" + "<img " + "src='" + lists.img + "' class='content2_sanPham' >" +
            "</img>" +
            "<p class='content2_tenSanPham'>" + lists.name + "</p>" +
            "<span>" + lists.gia + "</span>" +
            "</li>"
    })


    $('.hien').innerHTML = htmls.join('');
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

            var loc_NE = list.filter(function(lists) {
                return lists.tenLoai === add_sanPham_tenLoai;
            })

            var temp0 = loc_NE.filter(function(temps) {
                return temps.trangThai == 1;
            })

            var temp = temp0.filter(function(temps) {
                return temps.banChay == 1;
            })

            console.log(temp.length);

            if (check_exist == true) {
                add_sanPham_list_buttom_h4.innerHTML = "Sản phẩm đã tồn tại!";
            } else {

                if (add_sanPham_tenSP === "") {
                    add_sanPham_tenSP_h4.innerHTML = "Vui lòng nhập tên sản phẩm!"
                } else if (add_sanPham_lienKet === "") {
                    add_sanPham_tenSP_h4.innerHTML = "";
                    add_sanPham_lienKet_h4.innerHTML = "Vui lòng nhập liên kết hình ảnh!"
                } else if (add_sanPham_banChay == 1) {

                    if (temp.length == 4) {
                        add_sanPham_banChay_h4.innerHTML = "Số lượng sản phẩm thuộc loại bán chạy đã đạt tới giới hạn!"
                    }
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

                    add_sanPham_tenSP = (add_sanPham_tenSP.charAt(0).toUpperCase() + add_sanPham_tenSP.slice(1));
                    add_sanPham_moTa = (add_sanPham_moTa.charAt(0).toUpperCase() + add_sanPham_moTa.slice(1))

                    formData = {
                        maLoai: maLoai,
                        tenLoai: add_sanPham_tenLoai,
                        name: add_sanPham_tenSP,
                        img: add_sanPham_lienKet,
                        gia: add_sanPham_gia,
                        banChay: add_sanPham_banChay,
                        moTa: add_sanPham_moTa,
                        trangThai: 0,
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
                <h4 class = "duLieu1a"> <strong>Email: </strong>${emails.email}</h4>
                <h4 class = "duLieu1a"> <strong>Thời gian đăng ký: </strong>${emails.date}</h4>
            </li>`
    })

    document.querySelector('.mail_ul').innerHTML = htmls.join('');
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
                <h4 class = "duLieu1a"> <strong>Họ và tên: </strong>${contacts.name}</h4>
                <h4 class = "duLieu1a"><strong>Số điện thoại: </strong> ${contacts.phone}</h4>
                <h4 class = "duLieu1a"><strong>Email: </strong> ${contacts.email}</h4>
                <h4 class = "duLieu1a"><strong>Nội dung: </strong> ${contacts.content}</h4>
                <h4 class = "duLieu1a"><strong>Thời gian gửi yêu cầu: </strong> ${contacts.date}</h4>
            </li>`
    })

    document.querySelector('.contact_admin_ul').innerHTML = htmls.join('');
}

var home = $('.home');
var dang_nhap = $('.dang_nhap')

if (document.cookie != '') {
    home.classList.add('display')
    dang_nhap.classList.add('noneDisplay')
}