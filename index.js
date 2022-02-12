const $ = document.querySelector.bind(document);

//Đăng nhập
function login() {

    var dang_nhap_ten = $('.dang_nhap1_ten').value;
    var dang_nhap_pass = $('.dang_nhap1_password').value;
    var nosucces = $('.nosuccses');
    var home = $('.home');
    var dang_nhap = $('.dang_nhap')

    var dataPost = {
        name: dang_nhap_ten,
        password: dang_nhap_pass
    };

    var url_user = 'https://o3tea.herokuapp.com/auth/login';
    fetch(url_user, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataPost),
        })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('token', data.access_token);

            if (data.status == 401) {
                nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
            } else {
                home.classList.add('display')
                dang_nhap.classList.add('noneDisplay')
                location.reload();
            }

        })
        .catch((error) => {});
}

//Nhấn phím đăng nhập
var dang_nhap = $('.create_dang_nhap')
dang_nhap.onclick = function() {
    login();
}

//Nhấn phím enter
var dang_nhap1_password = $('.dang_nhap1_password');
dang_nhap1_password.onkeypress = function(e) {
    var key = e.keyCode || e.which;
    if (key == 13) {
        login();
    }
}

//Xem mật khẩu
const dang_nhap1_xemMK = $('.dang_nhap1_xemMK')
dang_nhap1_xemMK.addEventListener('click', function() {

    const currentType = dang_nhap1_password.getAttribute('type')

    dang_nhap1_password.setAttribute(
        'type',
        currentType === 'password' ? 'text' : 'password'
    )
})

//Check token
var home = $('.home');
var dang_nhap = $('.dang_nhap')

if (localStorage.token != 'undefined' && localStorage.token != null) {
    home.classList.add('display')
    dang_nhap.classList.add('noneDisplay')
    setInterval(() => {
        function reset_token() {
            var dataPost = {
                "name": "admin",
                "password": "123"
            };
            var url_user = 'https://o3tea.herokuapp.com/auth/login';

            fetch(url_user, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPost),
                })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('token', data.access_token);

                })
                .catch((error) => {});
        }
        reset_token();
    }, 600000);
}

//Tạo sản phẩm
function create_sanPham() {
    var url_ne = 'https://o3tea-api.glitch.me/list';

    fetch(url_ne, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            },
        })
        .then((response) => response.json())
        .then((data) => {

            function sent() {
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

                var check_exist = data.some(function(lists) {
                    return lists.name.toLowerCase() === add_sanPham_tenSP.toLowerCase();
                })

                var loc_NE = data.filter(function(lists) {
                    return lists.tenLoai === add_sanPham_tenLoai;
                })

                var temp0 = loc_NE.filter(function(temps) {
                    return temps.trangThai == 1;
                })

                var temp = temp0.filter(function(temps) {
                    return temps.banChay == 1;
                })

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

                        var dataPost = {
                            maLoai: maLoai,
                            tenLoai: add_sanPham_tenLoai,
                            name: add_sanPham_tenSP,
                            img: add_sanPham_lienKet,
                            gia: add_sanPham_gia,
                            banChay: add_sanPham_banChay,
                            moTa: add_sanPham_moTa,
                            trangThai: 0,
                            date: date
                        };

                        fetch(url_ne, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + localStorage.token
                                },
                                body: JSON.stringify(dataPost),
                            })
                            .then((response) => response.json())
                            .then((data) => {
                                add_sanPham_list_buttom_h4.innerHTML = "Tạo thành công!";
                                setTimeout(() => {
                                    location.reload();
                                }, 1000);
                            })
                            .catch((error) => {});
                    }
                }
            }

            var add_sanPham_list_buttom = $('.add_sanPham_list_buttom');
            add_sanPham_list_buttom.onclick = function() {
                sent();
            }

            function security() {
                var loc_NE = data.filter(function(lists) {
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
            security();
        })
        .catch((error) => {});
}
//Run
create_sanPham();

//Lấy danh sách email
function get_email() {
    var url_email = 'https://o3tea-api.glitch.me/email';
    fetch(url_email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            },
        })
        .then((response) => response.json())
        .then((data) => {
            var htmls = data.map(function(emails) {
                return `<li class = "">
                        <h4 class = "duLieu1a"> <strong>Email: </strong>${emails.email}</h4>
                        <h4 class = "duLieu1a"> <strong>Thời gian đăng ký: </strong>${emails.date}</h4>
                    </li>`
            })

            document.querySelector('.mail_ul').innerHTML = htmls.join('');
        })
        .catch((error) => {});
}
//Run
get_email();

//Lấy danh sách contact
function get_contact() {
    var url_email = 'https://o3tea-api.glitch.me/contact';
    fetch(url_email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            },
        })
        .then((response) => response.json())
        .then((data) => {
            var htmls = data.map(function(contacts) {
                return `<li class = "">
                        <h4 class = "duLieu1a"> <strong>Họ và tên: </strong>${contacts.name}</h4>
                        <h4 class = "duLieu1a"><strong>Số điện thoại: </strong> ${contacts.phone}</h4>
                        <h4 class = "duLieu1a"><strong>Email: </strong> ${contacts.email}</h4>
                        <h4 class = "duLieu1a"><strong>Nội dung: </strong> ${contacts.content}</h4>
                        <h4 class = "duLieu1a"><strong>Thời gian gửi yêu cầu: </strong> ${contacts.date}</h4>
                    </li>`
            })

            document.querySelector('.contact_admin_ul').innerHTML = htmls.join('');
        })
        .catch((error) => {});
}
//Run
get_contact();