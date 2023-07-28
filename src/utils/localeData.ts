export interface ILocaleData {
  // For Login
  textLogin: string;
  textRegister: string;
  textLogout: string;
  textHaveAccount: string;
  textNeedAccount: string;
  textRegisterHere: string;

  // Special
  textDarkMode: string;
  textLightMode: string;

  // For Menu
  textForum: string;
  textMenu: string;
  textLeaderboardMenu: string;
  textLeaderboard: string;
  textCategoryList: string;
  textAddThread: string;

  // For Forum
  textCreatedBy: string;

  // For Leaderboard
  textUser: string;
  textScore: string;

  // For Submit
  textSubmit: string;

  // For Error
  textError: string;
  textLoginFailed: string;
  textLogoutFailed: string;
  textRegisterFailed: string;
  textErrorCreateThread: string;
  textErrorCreateComment: string;
  textErrorUpVote: string;
  textErrorDownVote: string;
  textErrorRemoveVote: string;

  // For Success
  textSuccess: string;

  // For Loading
  textLoading: string;

  // For Input
  textName: string;
  textEmail: string;
  textPassword: string;
  textSearchThread: string;

  // For Comment
  textComment: string;
  textGiveComment: string;

  // For Alert
  textLoginSuccess: string;
  textLogoutSuccess: string;
  textRegisterSuccess: string;
  textThreadCreated: string;
  textCommentCreated: string;
  textLoginToGiveComment: string;
  textLoginToVote: string;
  textUpVoteSuccess: string;
  textDownVoteSuccess: string;
  textRemoveVoteSuccess: string;
}
const localeData: {[locale: string]: ILocaleData} = {
  id: {
    textLogin: 'Masuk',
    textRegister: 'Daftar',
    textLogout: 'Keluar',
    textHaveAccount: 'Sudah punya akun?',
    textNeedAccount: 'Belum punya akun?',
    textRegisterHere: 'Daftar disini',
    textForum: 'Forum',
    textMenu: 'Menu',
    textCreatedBy: 'Dibuat oleh',
    textLeaderboard: 'Klasemen Pengguna Aktif',
    textSubmit: 'Kirim',
    textDarkMode: 'Gelap',
    textLightMode: 'Terang',
    textEmail: 'Email',
    textPassword: 'Kata sandi',
    textName: 'Nama',
    textError: 'Error',
    textSuccess: 'Sukses',
    textLoading: 'Memuat',
    textSearchThread: 'Cari thread',
    textScore: 'Skor',
    textUser: 'Pengguna',
    textLeaderboardMenu: 'Klasemen',
    textComment: 'Komentar',
    textGiveComment: 'Beri komentar',
    textLoginToGiveComment: 'untuk memberi komentar',
    textLoginToVote: 'Login untuk melakukan vote',
    textCategoryList: 'Daftar Kategori',
    textUpVoteSuccess: 'Upvote berhasil',
    textDownVoteSuccess: 'Downvote berhasil',
    textRemoveVoteSuccess: 'Vote berhasil dihapus',
    textErrorUpVote: 'Upvote gagal',
    textErrorDownVote: 'Downvote gagal',
    textErrorRemoveVote: 'Vote gagal dihapus',
    textThreadCreated: 'Thread berhasil dibuat',
    textErrorCreateThread: 'Thread gagal dibuat',
    textCommentCreated: 'Komentar berhasil dibuat',
    textErrorCreateComment: 'Komentar gagal dibuat',
    textLoginFailed: 'Login gagal',
    textLoginSuccess: 'Login berhasil',
    textLogoutFailed: 'Logout gagal',
    textLogoutSuccess: 'Logout berhasil',
    textRegisterFailed: 'Register gagal',
    textRegisterSuccess: 'Register berhasil',
    textAddThread: 'Tambah Thread',
  },
  en: {
    textLogin: 'Login',
    textRegister: 'Register',
    textLogout: 'Logout',
    textHaveAccount: 'Already have an account?',
    textNeedAccount: 'Need an account?',
    textRegisterHere: 'Register here',
    textForum: 'Forum',
    textMenu: 'Menu',
    textCreatedBy: 'Created by',
    textLeaderboard: 'Leaderboard',
    textSubmit: 'Submit',
    textDarkMode: 'Dark',
    textLightMode: 'Light',
    textEmail: 'Email',
    textPassword: 'Password',
    textName: 'Name',
    textError: 'Error',
    textSuccess: 'Success',
    textLoading: 'Loading',
    textSearchThread: 'Search thread',
    textScore: 'Score',
    textUser: 'User',
    textLeaderboardMenu: 'Leaderboard',
    textComment: 'Comment',
    textGiveComment: 'Send comment',
    textLoginToGiveComment: 'to comment',
    textLoginToVote: 'Login to vote',
    textCategoryList: 'Category List',
    textUpVoteSuccess: 'Upvote success',
    textDownVoteSuccess: 'Downvote success',
    textRemoveVoteSuccess: 'Vote removed',
    textErrorUpVote: 'Upvote failed',
    textErrorDownVote: 'Downvote failed',
    textErrorRemoveVote: 'Vote failed to remove',
    textThreadCreated: 'Thread created',
    textErrorCreateThread: 'Thread failed to create',
    textCommentCreated: 'Comment created',
    textErrorCreateComment: 'Comment failed to create',
    textLoginFailed: 'Login failed',
    textLoginSuccess: 'Login success',
    textLogoutFailed: 'Logout failed',
    textLogoutSuccess: 'Logout success',
    textRegisterFailed: 'Register failed',
    textRegisterSuccess: 'Register success',
    textAddThread: 'Add Thread',
  },
};

export default localeData;
