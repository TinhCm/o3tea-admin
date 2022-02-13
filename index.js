var _0x4bbdd4 = _0x334b;
(function(_0x30bb01, _0x4697eb) {
    var _0x49236b = _0x334b,
        _0x2128af = _0x30bb01();
    while (!![]) {
        try {
            var _0x45c26a = parseInt(_0x49236b(0x12a)) / 0x1 * (parseInt(_0x49236b(0x118)) / 0x2) + parseInt(_0x49236b(0x119)) / 0x3 * (-parseInt(_0x49236b(0xdb)) / 0x4) + -parseInt(_0x49236b(0x12f)) / 0x5 + -parseInt(_0x49236b(0x11b)) / 0x6 + parseInt(_0x49236b(0xe7)) / 0x7 + -parseInt(_0x49236b(0x12d)) / 0x8 + parseInt(_0x49236b(0xde)) / 0x9;
            if (_0x45c26a === _0x4697eb) break;
            else _0x2128af['push'](_0x2128af['shift']());
        } catch (_0x5a8f53) { _0x2128af['push'](_0x2128af['shift']()); }
    }
}(_0x29dc, 0xdf35c));
const $ = document['querySelector'][_0x4bbdd4(0xe0)](document);

function login() {
    var _0x5b4145 = _0x4bbdd4,
        _0x31e605 = $(_0x5b4145(0x100))[_0x5b4145(0x10e)],
        _0x5b9d22 = $(_0x5b4145(0xd2))['value'],
        _0xbe8af6 = $(_0x5b4145(0xe9)),
        _0x44f0bd = $(_0x5b4145(0x120)),
        _0x62734c = $(_0x5b4145(0x114)),
        _0x47f39d = { 'name': _0x31e605, 'password': _0x5b9d22 },
        _0x2dcd9c = _0x5b4145(0xff);
    fetch(_0x2dcd9c, { 'method': _0x5b4145(0xe5), 'headers': { 'Content-Type': _0x5b4145(0x129) }, 'body': JSON[_0x5b4145(0x113)](_0x47f39d) })[_0x5b4145(0x123)](_0x1ce830 => _0x1ce830[_0x5b4145(0xd0)]())[_0x5b4145(0x123)](_0x5774dd => {
        var _0x1420a2 = _0x5b4145;
        _0x5774dd[_0x1420a2(0xf9)] == 0x191 ? _0xbe8af6[_0x1420a2(0x107)] = _0x1420a2(0xfd) : (document['cookie'] = 'token=' + _0x5774dd[_0x1420a2(0xf5)], _0x44f0bd[_0x1420a2(0xfa)][_0x1420a2(0xe3)](_0x1420a2(0x108)), _0x62734c[_0x1420a2(0xfa)][_0x1420a2(0xe3)](_0x1420a2(0x133)), location[_0x1420a2(0x10c)]());
    })[_0x5b4145(0x136)](_0x39cb9e => {});
}
var dang_nhap = $(_0x4bbdd4(0x111));
dang_nhap['onclick'] = function() { login(); };
var dang_nhap1_password = $(_0x4bbdd4(0xd2));
dang_nhap1_password[_0x4bbdd4(0x126)] = function(_0x4f7a3e) {
    var _0xb9f09d = _0x4bbdd4,
        _0x3c79af = _0x4f7a3e['keyCode'] || _0x4f7a3e[_0xb9f09d(0xd3)];
    _0x3c79af == 0xd && login();
};
const dang_nhap1_xemMK = $(_0x4bbdd4(0xe8));

function _0x334b(_0x2b89c2, _0x4c4620) { var _0x29dcd3 = _0x29dc(); return _0x334b = function(_0x334b3c, _0x270c5a) { _0x334b3c = _0x334b3c - 0xd0; var _0x192b5a = _0x29dcd3[_0x334b3c]; return _0x192b5a; }, _0x334b(_0x2b89c2, _0x4c4620); }
dang_nhap1_xemMK[_0x4bbdd4(0x124)](_0x4bbdd4(0xee), function() {
    var _0x28dc32 = _0x4bbdd4;
    const _0x137ad3 = dang_nhap1_password[_0x28dc32(0xeb)](_0x28dc32(0x12b));
    dang_nhap1_password['setAttribute']('type', _0x137ad3 === _0x28dc32(0x137) ? _0x28dc32(0x112) : 'password');
});
var home = $(_0x4bbdd4(0x120)),
    dang_nhap = $('.dang_nhap');
document[_0x4bbdd4(0xf2)] != '' && (create_sanPham(), get_email(), get_contact(), home['classList'][_0x4bbdd4(0xe3)](_0x4bbdd4(0x108)), dang_nhap['classList'][_0x4bbdd4(0xe3)]('noneDisplay'));

function create_sanPham() {
    var _0x17d7d1 = _0x4bbdd4,
        _0x437128 = _0x17d7d1(0x122);
    fetch(_0x437128, { 'method': 'GET', 'headers': { 'Content-Type': _0x17d7d1(0x129), 'Authorization': _0x17d7d1(0xf6) + document['cookie'][_0x17d7d1(0x10b)](0x6) } })[_0x17d7d1(0x123)](_0x386c5a => _0x386c5a['json']())[_0x17d7d1(0x123)](_0x3448bf => {
        var _0x3720e7 = _0x17d7d1;

        function _0x14f62c() {
            var _0x203d75 = _0x334b,
                _0x1de83f, _0x2903ac = $(_0x203d75(0x10d))[_0x203d75(0x10e)],
                _0x3b0a6a = $(_0x203d75(0x116)),
                _0x21d91a = $(_0x203d75(0x131))[_0x203d75(0x10e)],
                _0x1aba46 = $(_0x203d75(0xe1)),
                _0x3294b3 = $('.add_sanPham_lienKet')['value'],
                _0x10106c = $('.add_sanPham_lienKet_h4'),
                _0x586a10 = $(_0x203d75(0xf4))[_0x203d75(0x10e)],
                _0xb0b490 = $('.add_sanPham_gia_h4'),
                _0x4f7a34 = $('.add_sanPham_banChay')[_0x203d75(0x10e)],
                _0x1704d4 = $(_0x203d75(0xea)),
                _0x52af50 = $(_0x203d75(0x106))[_0x203d75(0x10e)],
                _0x114364 = $(_0x203d75(0xef)),
                _0x291c32 = $(_0x203d75(0x102)),
                _0x801e8a = new Date(),
                _0x108c50 = _0x801e8a[_0x203d75(0xf7)]() + ':' + _0x801e8a[_0x203d75(0x128)]() + ':' + _0x801e8a[_0x203d75(0xf1)]() + '-' + _0x801e8a[_0x203d75(0xdc)]() + '/' + (_0x801e8a['getMonth']() + 0x1) + '/' + _0x801e8a['getFullYear'](),
                _0x3f52ea = _0x3448bf[_0x203d75(0x103)](function(_0x34931b) { var _0x582500 = _0x203d75; return _0x34931b[_0x582500(0xd5)][_0x582500(0xd6)]() === _0x21d91a[_0x582500(0xd6)](); }),
                _0x242733 = _0x3448bf[_0x203d75(0xd8)](function(_0x14a185) { var _0x23bb1c = _0x203d75; return _0x14a185[_0x23bb1c(0xf3)] === _0x2903ac; }),
                _0x4dc118 = _0x242733[_0x203d75(0xd8)](function(_0x3e81f3) { var _0x5ea355 = _0x203d75; return _0x3e81f3[_0x5ea355(0x12e)] == 0x1; }),
                _0x324ae8 = _0x4dc118[_0x203d75(0xd8)](function(_0x361f72) { var _0xb6d041 = _0x203d75; return _0x361f72[_0xb6d041(0x109)] == 0x1; });
            if (_0x3f52ea == !![]) _0x291c32[_0x203d75(0x107)] = 'Sản\x20phẩm\x20đã\x20tồn\x20tại!';
            else {
                if (_0x21d91a === '') _0x1aba46[_0x203d75(0x107)] = _0x203d75(0xd1);
                else {
                    if (_0x3294b3 === '') _0x1aba46[_0x203d75(0x107)] = '', _0x10106c[_0x203d75(0x107)] = 'Vui\x20lòng\x20nhập\x20liên\x20kết\x20hình\x20ảnh!';
                    else {
                        if (_0x4f7a34 == 0x1) _0x324ae8[_0x203d75(0x11c)] == 0x4 && (_0x1704d4['innerHTML'] = 'Số\x20lượng\x20sản\x20phẩm\x20thuộc\x20loại\x20bán\x20chạy\x20đã\x20đạt\x20tới\x20giới\x20hạn!');
                        else {
                            if (_0x2903ac['toLowerCase']() === 'nước\x20ép') _0x1de83f = 'NE';
                            else {
                                if (_0x2903ac[_0x203d75(0xd6)]() === _0x203d75(0x10a)) _0x1de83f = 'ST';
                                else {
                                    if (_0x2903ac[_0x203d75(0xd6)]() === _0x203d75(0x125)) _0x1de83f = 'TS';
                                    else {
                                        if (_0x2903ac[_0x203d75(0xd6)]() === _0x203d75(0x11f)) _0x1de83f = _0x203d75(0xe2);
                                        else {
                                            if (_0x2903ac['toLowerCase']() === _0x203d75(0xfc)) _0x1de83f = 'TH';
                                            else _0x2903ac[_0x203d75(0xd6)]() === 'khác' && (_0x1de83f = 'K');
                                        }
                                    }
                                }
                            }
                            _0x21d91a = _0x21d91a['charAt'](0x0)[_0x203d75(0x11a)]() + _0x21d91a[_0x203d75(0x10b)](0x1), _0x52af50 = _0x52af50[_0x203d75(0x11d)](0x0)['toUpperCase']() + _0x52af50[_0x203d75(0x10b)](0x1);
                            var _0x3280aa = { 'maLoai': _0x1de83f, 'tenLoai': _0x2903ac, 'name': _0x21d91a, 'img': _0x3294b3, 'gia': _0x586a10, 'banChay': _0x4f7a34, 'moTa': _0x52af50, 'trangThai': 0x0, 'date': _0x108c50 };
                            fetch(_0x437128, { 'method': _0x203d75(0xe5), 'headers': { 'Content-Type': _0x203d75(0x129), 'Authorization': _0x203d75(0xf6) + document['cookie']['slice'](0x6) }, 'body': JSON['stringify'](_0x3280aa) })[_0x203d75(0x123)](_0x24474a => _0x24474a['json']())[_0x203d75(0x123)](_0x584992 => {
                                var _0x58560d = _0x203d75;
                                _0x291c32[_0x58560d(0x107)] = _0x58560d(0xd9), setTimeout(() => {
                                    var _0x5d949d = _0x58560d;
                                    location[_0x5d949d(0x10c)]();
                                }, 0x3e8);
                            })[_0x203d75(0x136)](_0x29c245 => {});
                        }
                    }
                }
            }
        }
        var _0x48442a = $(_0x3720e7(0x11e));
        _0x48442a[_0x3720e7(0xfb)] = function() { _0x14f62c(); };

        function _0x1792d5() {
            var _0x371e9d = _0x3720e7,
                _0xa70fe4 = _0x3448bf[_0x371e9d(0xd8)](function(_0x37c64a) { return _0x37c64a['trangThai'] === 0x0; }),
                _0x4fbdfb = _0xa70fe4['map'](function(_0x217fcb) { var _0xbcc403 = _0x371e9d; return _0xbcc403(0x12c) + _0xbcc403(0xec) + _0xbcc403(0xda) + _0x217fcb[_0xbcc403(0xd4)] + _0xbcc403(0x105) + _0xbcc403(0xed) + '<p\x20class=\x27content2_tenSanPham\x27>' + _0x217fcb[_0xbcc403(0xd5)] + _0xbcc403(0x110) + '<span>' + _0x217fcb[_0xbcc403(0x135)] + _0xbcc403(0x127) + _0xbcc403(0xe4); });
            $(_0x371e9d(0xdd))['innerHTML'] = _0x4fbdfb['join']('');
        }
        _0x1792d5();
    })[_0x17d7d1(0x136)](_0x11e15a => {});
}

function _0x29dc() {
    var _0x52b463 = ['.dang_nhap1_xemMK', '.nosuccses', '.add_sanPham_banChay_h4', 'getAttribute', '<img\x20', '</img>', 'click', '.add_sanPham_moTa_h4', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22><strong>Email:\x20</strong>\x20', 'getSeconds', 'cookie', 'tenLoai', '.add_sanPham_gia', 'access_token', 'Bearer\x20', 'getHours', 'email', 'status', 'classList', 'onclick', 'trà\x20hương', 'Tên\x20đăng\x20nhập\x20hoặc\x20mật\x20khẩu\x20sai', 'date', 'https://o3tea.herokuapp.com/auth/login', '.dang_nhap1_ten', '.contact_admin_ul', '.add_sanPham_list_buttom_h4', 'some', 'https://o3tea-api.glitch.me/contact', '\x27\x20class=\x27content2_sanPham\x27\x20>', '.add_sanPham_moTa', 'innerHTML', 'display', 'banChay', 'sinh\x20tố', 'slice', 'reload', '.add_sanPham_tenLoai', 'value', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>', '</p>', '.create_dang_nhap', 'text', 'stringify', '.dang_nhap', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22><strong>Thời\x20gian\x20gửi\x20yêu\x20cầu:\x20</strong>\x20', '.add_sanPham_tenLoai_h4', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22><strong>Nội\x20dung:\x20</strong>\x20', '2QRiiuM', '15cyUdpE', 'toUpperCase', '6870276XNSwcq', 'length', 'charAt', '.add_sanPham_list_buttom', 'trà\x20trái\x20cây', '.home', 'map', 'https://o3tea-api.glitch.me/list', 'then', 'addEventListener', 'trà\x20sữa', 'onkeypress', '</span>', 'getMinutes', 'application/json', '630953fxaqoD', 'type', '<li\x20class=\x27content_backend\x20width_column_5\x20width_row\x20\x27>', '7619096KZUOCG', 'trangThai', '1441505iEMKXA', '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22>\x20<strong>Thời\x20gian\x20đăng\x20ký:\x20</strong>', '.add_sanPham_tenSP', 'phone', 'noneDisplay', '.mail_ul', 'gia', 'catch', 'password', 'GET', 'json', 'Vui\x20lòng\x20nhập\x20tên\x20sản\x20phẩm!', '.dang_nhap1_password', 'which', 'img', 'name', 'toLowerCase', 'querySelector', 'filter', 'Tạo\x20thành\x20công!', 'src=\x27', '266596psMXWh', 'getDate', '.hien', '11530521QZesBO', '<li\x20class\x20=\x20\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22>\x20<strong>Email:\x20</strong>', 'bind', '.add_sanPham_tenSP_h4', 'TTC', 'add', '</li>', 'POST', 'join', '12047875DagDUn'];
    _0x29dc = function() { return _0x52b463; };
    return _0x29dc();
}

function get_email() {
    var _0x4f8bbf = _0x4bbdd4,
        _0x16bd6d = 'https://o3tea-api.glitch.me/email';
    fetch(_0x16bd6d, { 'method': _0x4f8bbf(0x138), 'headers': { 'Content-Type': _0x4f8bbf(0x129), 'Authorization': 'Bearer\x20' + document[_0x4f8bbf(0xf2)][_0x4f8bbf(0x10b)](0x6) } })['then'](_0x4436e7 => _0x4436e7[_0x4f8bbf(0xd0)]())['then'](_0x2c394f => {
        var _0x25fa26 = _0x4f8bbf,
            _0x56f115 = _0x2c394f[_0x25fa26(0x121)](function(_0x13dea7) { var _0x1b70fc = _0x25fa26; return _0x1b70fc(0xdf) + _0x13dea7[_0x1b70fc(0xf8)] + _0x1b70fc(0x130) + _0x13dea7[_0x1b70fc(0xfe)] + _0x1b70fc(0x10f); });
        document[_0x25fa26(0xd7)](_0x25fa26(0x134))[_0x25fa26(0x107)] = _0x56f115['join']('');
    })[_0x4f8bbf(0x136)](_0x1dc2f2 => {});
}

function get_contact() {
    var _0x175024 = _0x4bbdd4,
        _0x2962de = _0x175024(0x104);
    fetch(_0x2962de, { 'method': 'GET', 'headers': { 'Content-Type': 'application/json', 'Authorization': 'Bearer\x20' + document[_0x175024(0xf2)][_0x175024(0x10b)](0x6) } })['then'](_0x3d5a40 => _0x3d5a40['json']())[_0x175024(0x123)](_0x466348 => {
        var _0x26b8a0 = _0x175024,
            _0x50d113 = _0x466348[_0x26b8a0(0x121)](function(_0xbd238a) { var _0x2e850a = _0x26b8a0; return '<li\x20class\x20=\x20\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22>\x20<strong>Họ\x20và\x20tên:\x20</strong>' + _0xbd238a[_0x2e850a(0xd5)] + '</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class\x20=\x20\x22duLieu1a\x22><strong>Số\x20điện\x20thoại:\x20</strong>\x20' + _0xbd238a[_0x2e850a(0x132)] + _0x2e850a(0xf0) + _0xbd238a[_0x2e850a(0xf8)] + _0x2e850a(0x117) + _0xbd238a['content'] + _0x2e850a(0x115) + _0xbd238a[_0x2e850a(0xfe)] + _0x2e850a(0x10f); });
        document[_0x26b8a0(0xd7)](_0x26b8a0(0x101))[_0x26b8a0(0x107)] = _0x50d113[_0x26b8a0(0xe6)]('');
    })[_0x175024(0x136)](_0x517491 => {});
}