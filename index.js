var API_dang_nhap = 'https://o3tea.glitch.me/user'
const $ = document.querySelector.bind(document);

//Phần API đăng nhập
function batDau_dang_nhap() {
    xuLi_dang_nhap();
}
batDau_dang_nhap();

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
            var admin = $('.header-thong_tin_1');
            var header_thong_tin_user_1DN = $('.header-thong_tin_user_1');
            var header_thong_tin_1DN = $('.header-thong_tin_1');
            var thong_tin_user_adminDN = $('.thong_tin_user_admin');

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
                        window.location.href = '/home/home.html';

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
        var admin = $('.header-thong_tin_1');
        var header_thong_tin_user_1DN = $('.header-thong_tin_user_1');
        var header_thong_tin_1DN = $('.header-thong_tin_1');
        var thong_tin_user_adminDN = $('.thong_tin_user_admin');

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
                    window.location.href = '/home/home.html';

                    function setCookie(cname, cvalue, exdays) {
                        const d = new Date();
                        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                        let expires = "expires=" + d.toUTCString();
                        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                    }
                    setCookie("ten", checkPast.ten, 365);
                } else {
                    nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                    alert("Đăng nhập k thành công")
                }
            } else {
                nosucces.innerHTML = "Tên đăng nhập hoặc mật khẩu sai";
                alert("Đăng nhập k thành công")
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