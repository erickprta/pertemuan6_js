function cekUser(data_username, data_password) {
    let user = [
        ['admin', 'admin123'],
        ['santri', 'santri123'],
        ['erik', 'angkasa'],
    ]

    for (let i = 0; i < user.length; i++) {
        let u = user[1][0]; //ini adalah user
        let p = user[1][1]; //ini adalah password

        if (u === data_username && p === data_password) {
            window.location = "index.html";
            return;
        }
    }

    alert("Username atau password salah");
}

function Login() {
    let Username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (Username.length < 1 || password.length < 1) {
        alert("Isi username dan password terlebih dahulu");
    } else if (password.length < 8) {
        alert("Password harus minimal 8 karakter");
    } else {
        cekUser(Username,password);
    }
}