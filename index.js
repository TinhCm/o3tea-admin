var _0x4e2b71 = _0x756a;

function _0x756a(_0x44c482, _0x1e26f2) { var _0x15083c = _0x1508(); return _0x756a = function(_0x756a63, _0x262193) { _0x756a63 = _0x756a63 - 0x6a; var _0x3a1e7c = _0x15083c[_0x756a63]; return _0x3a1e7c; }, _0x756a(_0x44c482, _0x1e26f2); }(function(_0x251e3a, _0x27bdae) {
    var _0x3ef857 = _0x756a,
        _0x4ead1e = _0x251e3a();
    while (!![]) {
        try {
            var _0x3e3058 = parseInt(_0x3ef857(0x97)) / 0x1 + -parseInt(_0x3ef857(0xa7)) / 0x2 + -parseInt(_0x3ef857(0x8f)) / 0x3 * (-parseInt(_0x3ef857(0x8b)) / 0x4) + parseInt(_0x3ef857(0xab)) / 0x5 * (parseInt(_0x3ef857(0xa8)) / 0x6) + -parseInt(_0x3ef857(0x91)) / 0x7 * (parseInt(_0x3ef857(0xa6)) / 0x8) + parseInt(_0x3ef857(0xb1)) / 0x9 * (-parseInt(_0x3ef857(0xc7)) / 0xa) + parseInt(_0x3ef857(0xc6)) / 0xb * (parseInt(_0x3ef857(0xa5)) / 0xc);
            if (_0x3e3058 === _0x27bdae) break;
            else _0x4ead1e['push'](_0x4ead1e['shift']());
        } catch (_0xd56610) { _0x4ead1e['push'](_0x4ead1e['shift']()); }
    }
}(_0x1508, 0xa2c14));
const $ = document[_0x4e2b71(0xb6)][_0x4e2b71(0xc1)](document);

function login() {
    var _0x515aa9 = _0x4e2b71,
        _0x28afc7 = $(_0x515aa9(0xcc))[_0x515aa9(0x90)],
        _0x54586b = $(_0x515aa9(0x88))['value'],
        _0x586730 = $(_0x515aa9(0xa2)),
        _0x2b9272 = $(_0x515aa9(0x89)),
        _0x5a71ea = $(_0x515aa9(0x8e)),
        _0x2be3c8 = { 'name': _0x28afc7, 'password': _0x54586b },
        _0x4f0cd0 = _0x515aa9(0xb8);
    fetch(_0x4f0cd0, { 'method': _0x515aa9(0x82), 'headers': { 'Content-Type': _0x515aa9(0x74) }, 'body': JSON[_0x515aa9(0x78)](_0x2be3c8) })[_0x515aa9(0x77)](_0x2c207c => _0x2c207c[_0x515aa9(0x80)]())[_0x515aa9(0x77)](_0x25917c => {
        var _0x3ac090 = _0x515aa9;
        localStorage[_0x3ac090(0xd0)](_0x3ac090(0x6e), _0x25917c[_0x3ac090(0x79)]), _0x25917c[_0x3ac090(0xbd)] == 0x191 ? _0x586730[_0x3ac090(0x9f)] = _0x3ac090(0x7e) : (_0x2b9272['classList']['add']('display'), _0x5a71ea[_0x3ac090(0x8d)][_0x3ac090(0xb0)](_0x3ac090(0xa4)), location[_0x3ac090(0x76)]());
    })[_0x515aa9(0x95)](_0x437f8a => {});
}
var dang_nhap = $(_0x4e2b71(0x72));
dang_nhap[_0x4e2b71(0xc8)] = function() { login(); };
var dang_nhap1_password = $(_0x4e2b71(0x88));
dang_nhap1_password[_0x4e2b71(0x96)] = function(_0x47a36a) {
    var _0x24fe62 = _0x4e2b71,
        _0x3c25a1 = _0x47a36a[_0x24fe62(0xd1)] || _0x47a36a[_0x24fe62(0xac)];
    _0x3c25a1 == 0xd && login();
};
const dang_nhap1_xemMK = $('.dang_nhap1_xemMK');
dang_nhap1_xemMK[_0x4e2b71(0x84)]('click', function() {
    var _0x160744 = _0x4e2b71;
    const _0xedcff6 = dang_nhap1_password[_0x160744(0x94)](_0x160744(0xc9));
    dang_nhap1_password[_0x160744(0x99)](_0x160744(0xc9), _0xedcff6 === _0x160744(0x6c) ? _0x160744(0xce) : _0x160744(0x6c));
});
var home = $(_0x4e2b71(0x89)),
    dang_nhap = $(_0x4e2b71(0x8e));
localStorage['token'] != _0x4e2b71(0x8c) && localStorage[_0x4e2b71(0x6e)] != null && (home[_0x4e2b71(0x8d)][_0x4e2b71(0xb0)](_0x4e2b71(0xb2)), dang_nhap[_0x4e2b71(0x8d)]['add'](_0x4e2b71(0xa4)), setInterval(() => {
    function _0x2ffafe() {
        var _0x28cc9e = _0x756a,
            _0x2b26d4 = { 'name': 'admin', 'password': _0x28cc9e(0xd3) },
            _0x363dfb = _0x28cc9e(0xb8);
        fetch(_0x363dfb, { 'method': _0x28cc9e(0x82), 'headers': { 'Content-Type': 'application/json' }, 'body': JSON[_0x28cc9e(0x78)](_0x2b26d4) })[_0x28cc9e(0x77)](_0x2d7ecb => _0x2d7ecb[_0x28cc9e(0x80)]())[_0x28cc9e(0x77)](_0x50d5b0 => {
            var _0x4bcd7f = _0x28cc9e;
            localStorage[_0x4bcd7f(0xd0)](_0x4bcd7f(0x6e), _0x50d5b0['access_token']);
        })[_0x28cc9e(0x95)](_0x35f8c7 => {});
    }
    _0x2ffafe();
}, 0x927c0));

function create_sanPham() {
    var _0x34c968 = _0x4e2b71,
        _0x5d6539 = 'https://o3tea-api.glitch.me/list';
    fetch(_0x5d6539, { 'method': _0x34c968(0x7f), 'headers': { 'Content-Type': _0x34c968(0x74), 'Authorization': _0x34c968(0x7d) + localStorage[_0x34c968(0x6e)] } })['then'](_0x4ee511 => _0x4ee511['json']())[_0x34c968(0x77)](_0xfa04aa => {
        var _0xc24322 = _0x34c968;

        function _0x749f71() {
            var _0x49613b = _0x756a,
                _0x449ddd, _0x5c7cb3 = $(_0x49613b(0xaf))[_0x49613b(0x90)],
                _0x5114d3 = $(_0x49613b(0xc3)),
                _0x3959ce = $(_0x49613b(0x7b))[_0x49613b(0x90)],
                _0x9b6b65 = $('.add_sanPham_tenSP_h4'),
                _0x509e02 = $(_0x49613b(0xa0))[_0x49613b(0x90)],
                _0x51f590 = $(_0x49613b(0x83)),
                _0x1d6bec = $('.add_sanPham_gia')['value'],
                _0x42207a = $('.add_sanPham_gia_h4'),
                _0x5e4b84 = $('.add_sanPham_banChay')[_0x49613b(0x90)],
                _0x9b2abf = $('.add_sanPham_banChay_h4'),
                _0x17a60b = $(_0x49613b(0x6f))[_0x49613b(0x90)],
                _0x1106e4 = $('.add_sanPham_moTa_h4'),
                _0x547853 = $(_0x49613b(0xcd)),
                _0xf3bda2 = new Date(),
                _0x4e9c7a = _0xf3bda2[_0x49613b(0x93)]() + ':' + _0xf3bda2[_0x49613b(0xca)]() + ':' + _0xf3bda2[_0x49613b(0x85)]() + '-' + _0xf3bda2['getDate']() + '/' + (_0xf3bda2['getMonth']() + 0x1) + '/' + _0xf3bda2[_0x49613b(0xc0)](),
                _0x2383e5 = _0xfa04aa[_0x49613b(0x70)](function(_0xb25355) { var _0x1300e8 = _0x49613b; return _0xb25355[_0x1300e8(0x7a)][_0x1300e8(0xad)]() === _0x3959ce['toLowerCase'](); }),
                _0x5c54d2 = _0xfa04aa[_0x49613b(0xc2)](function(_0x5cfcbb) { var _0x340e80 = _0x49613b; return _0x5cfcbb[_0x340e80(0xb4)] === _0x5c7cb3; }),
                _0x233635 = _0x5c54d2[_0x49613b(0xc2)](function(_0x96fb7f) { var _0x36e35b = _0x49613b; return _0x96fb7f[_0x36e35b(0xcb)] == 0x1; }),
                _0x5404dc = _0x233635[_0x49613b(0xc2)](function(_0x3d3455) { return _0x3d3455['banChay'] == 0x1; });
            if (_0x2383e5 == !![]) _0x547853['innerHTML'] = _0x49613b(0xba);
            else {
                if (_0x3959ce === '') _0x9b6b65[_0x49613b(0x9f)] = _0x49613b(0x6a);
                else {
                    if (_0x509e02 === '') _0x9b6b65[_0x49613b(0x9f)] = '', _0x51f590[_0x49613b(0x9f)] = _0x49613b(0x9e);
                    else {
                        if (_0x5e4b84 == 0x1) _0x5404dc['length'] == 0x4 && (_0x9b2abf['innerHTML'] = _0x49613b(0xbe));
                        else {
                            if (_0x5c7cb3[_0x49613b(0xad)]() === _0x49613b(0xc5)) _0x449ddd = 'NE';
                            else {
                                if (_0x5c7cb3['toLowerCase']() === 'sinh\x20tố') _0x449ddd = 'ST';
                                else {
                                    if (_0x5c7cb3['toLowerCase']() === 'trà\x20sữa') _0x449ddd = 'TS';
                                    else {
                                        if (_0x5c7cb3[_0x49613b(0xad)]() === 'trà\x20trái\x20cây') _0x449ddd = 'TTC';
                                        else {
                                            if (_0x5c7cb3[_0x49613b(0xad)]() === 'trà\x20hương') _0x449ddd = 'TH';
                                            else _0x5c7cb3[_0x49613b(0xad)]() === _0x49613b(0x98) && (_0x449ddd = 'K');
                                        }
                                    }
                                }
                            }
                            _0x3959ce = _0x3959ce[_0x49613b(0x71)](0x0)[_0x49613b(0x9d)]() + _0x3959ce['slice'](0x1), _0x17a60b = _0x17a60b[_0x49613b(0x71)](0x0)[_0x49613b(0x9d)]() + _0x17a60b[_0x49613b(0xae)](0x1);
                            var _0x43ecd3 = { 'maLoai': _0x449ddd, 'tenLoai': _0x5c7cb3, 'name': _0x3959ce, 'img': _0x509e02, 'gia': _0x1d6bec, 'banChay': _0x5e4b84, 'moTa': _0x17a60b, 'trangThai': 0x0, 'date': _0x4e9c7a };
                            fetch(_0x5d6539, { 'method': _0x49613b(0x82), 'headers': { 'Content-Type': _0x49613b(0x74), 'Authorization': _0x49613b(0x7d) + localStorage[_0x49613b(0x6e)] }, 'body': JSON[_0x49613b(0x78)](_0x43ecd3) })[_0x49613b(0x77)](_0x1604eb => _0x1604eb['json']())[_0x49613b(0x77)](_0x35f7e2 => {
                                var _0x37e55f = _0x49613b;
                                _0x547853[_0x37e55f(0x9f)] = 'Tạo\x20thành\x20công!', setTimeout(() => { location['reload'](); }, 0x3e8);
                            })[_0x49613b(0x95)](_0xac7e6e => {});
                        }
                    }
                }
            }
        }
        var _0x42832f = $(_0xc24322(0x8a));
        _0x42832f[_0xc24322(0xc8)] = function() { _0x749f71(); };

        function _0x185733() {
            var _0x340386 = _0xc24322,
                _0x1c5431 = _0xfa04aa[_0x340386(0xc2)](function(_0x2e9a3f) { var _0xa167b = _0x340386; return _0x2e9a3f[_0xa167b(0xcb)] === 0x0; }),
                _0x1e5bf5 = _0x1c5431['map'](function(_0x17cda0) { var _0x34a476 = _0x340386; return '<li\x20class=\x27content_backend\x20width_column_5\x20width_row\x20\x27>' + '<img\x20' + _0x34a476(0x86) + _0x17cda0[_0x34a476(0x9a)] + _0x34a476(0xb7) + _0x34a476(0x87) + _0x34a476(0xbb) + _0x17cda0[_0x34a476(0x7a)] + _0x34a476(0x92) + _0x34a476(0x9b) + _0x17cda0[_0x34a476(0xcf)] + _0x34a476(0xb5) + _0x34a476(0xaa); });
            $(_0x340386(0xb3))[_0x340386(0x9f)] = _0x1e5bf5['join']('');
        }
        _0x185733();
    })[_0x34c968(0x95)](_0x6d1f71 => {});
}
create_sanPham();

function get_email() {
    var _0x1ca05f = _0x4e2b71,
        _0x1a236f = 'https://o3tea-api.glitch.me/email';
    fetch(_0x1a236f, { 'method': _0x1ca05f(0x7f), 'headers': { 'Content-Type': _0x1ca05f(0x74), 'Authorization': 'Bearer\x20' + localStorage['token'] } })[_0x1ca05f(0x77)](_0x48353e => _0x48353e[_0x1ca05f(0x80)]())[_0x1ca05f(0x77)](_0x254981 => {
        var _0x3b2de8 = _0x1ca05f,
            _0x3334f7 = _0x254981[_0x3b2de8(0xa9)](function(_0xc79ce3) { var _0x1e16c5 = _0x3b2de8; return _0x1e16c5(0x81) + _0xc79ce3[_0x1e16c5(0xa3)] + _0x1e16c5(0xc4) + _0xc79ce3[_0x1e16c5(0x73)] + '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>'; });
        document['querySelector'](_0x3b2de8(0xbc))[_0x3b2de8(0x9f)] = _0x3334f7[_0x3b2de8(0x9c)]('');
    })['catch'](_0x3e285e => {});
}

function _0x1508() {
    var _0x528af0 = ['querySelector', '\x27\x20class=\x27content2_sanPham\x27\x20>', 'https://o3tea.herokuapp.com/auth/login', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22><strong>Số\x20điện\x20thoại:\x20</strong>\x20', 'Sản\x20phẩm\x20đã\x20tồn\x20tại!', '<p\x20class=\x27content2_tenSanPham\x27>', '.mail_ul', 'status', 'Số\x20lượng\x20sản\x20phẩm\x20thuộc\x20loại\x20bán\x20chạy\x20đã\x20đạt\x20tới\x20giới\x20hạn!', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22><strong>Nội\x20dung:\x20</strong>\x20', 'getFullYear', 'bind', 'filter', '.add_sanPham_tenLoai_h4', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22>\x20<strong>Thời\x20gian\x20đăng\x20ký:\x20</strong>', 'nước\x20ép', '11LRmvde', '220510CQNtEp', 'onclick', 'type', 'getMinutes', 'trangThai', '.dang_nhap1_ten', '.add_sanPham_list_buttom_h4', 'text', 'gia', 'setItem', 'keyCode', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22><strong>Thời\x20gian\x20gửi\x20yêu\x20cầu:\x20</strong>\x20', '123', 'Vui\x20lòng\x20nhập\x20tên\x20sản\x20phẩm!', '.contact_admin_ul', 'password', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>', 'token', '.add_sanPham_moTa', 'some', 'charAt', '.create_dang_nhap', 'date', 'application/json', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22><strong>Email:\x20</strong>\x20', 'reload', 'then', 'stringify', 'access_token', 'name', '.add_sanPham_tenSP', 'content', 'Bearer\x20', 'Tên\x20đăng\x20nhập\x20hoặc\x20mật\x20khẩu\x20sai', 'GET', 'json', '<li\x20class\x20=\x20\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22>\x20<strong>Email:\x20</strong>', 'POST', '.add_sanPham_lienKet_h4', 'addEventListener', 'getSeconds', 'src=\x27', '</img>', '.dang_nhap1_password', '.home', '.add_sanPham_list_buttom', '3811732AhsuUG', 'undefined', 'classList', '.dang_nhap', '3BOXpIm', 'value', '59542VTqJsb', '</p>', 'getHours', 'getAttribute', 'catch', 'onkeypress', '188884umjyAY', 'khác', 'setAttribute', 'img', '<span>', 'join', 'toUpperCase', 'Vui\x20lòng\x20nhập\x20liên\x20kết\x20hình\x20ảnh!', 'innerHTML', '.add_sanPham_lienKet', '<li\x20class\x20=\x20\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22>\x20<strong>Họ\x20và\x20tên:\x20</strong>', '.nosuccses', 'email', 'noneDisplay', '6239172BlUHHb', '448sAPGQl', '998832ypjjDM', '6lyJFNL', 'map', '</li>', '3321145NjmdIh', 'which', 'toLowerCase', 'slice', '.add_sanPham_tenLoai', 'add', '279PxytLi', 'display', '.hien', 'tenLoai', '</span>'];
    _0x1508 = function() { return _0x528af0; };
    return _0x1508();
}
get_email();

function get_contact() {
    var _0x454ed9 = _0x4e2b71,
        _0xc92275 = 'https://o3tea-api.glitch.me/contact';
    fetch(_0xc92275, { 'method': 'GET', 'headers': { 'Content-Type': 'application/json', 'Authorization': _0x454ed9(0x7d) + localStorage[_0x454ed9(0x6e)] } })[_0x454ed9(0x77)](_0x288100 => _0x288100[_0x454ed9(0x80)]())[_0x454ed9(0x77)](_0x238b29 => {
        var _0x483069 = _0x454ed9,
            _0x1500d6 = _0x238b29[_0x483069(0xa9)](function(_0x4a4231) { var _0xd387f5 = _0x483069; return _0xd387f5(0xa1) + _0x4a4231[_0xd387f5(0x7a)] + _0xd387f5(0xb9) + _0x4a4231['phone'] + _0xd387f5(0x75) + _0x4a4231[_0xd387f5(0xa3)] + _0xd387f5(0xbf) + _0x4a4231[_0xd387f5(0x7c)] + _0xd387f5(0xd2) + _0x4a4231[_0xd387f5(0x73)] + _0xd387f5(0x6d); });
        document[_0x483069(0xb6)](_0x483069(0x6b))[_0x483069(0x9f)] = _0x1500d6[_0x483069(0x9c)]('');
    })[_0x454ed9(0x95)](_0x32dd0b => {});
}
get_contact();