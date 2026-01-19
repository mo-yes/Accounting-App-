// Fake Auth Service (دلوقتي)
// بعدين هتستبدل timeout بـ API حقيقي

export const authService = {
  login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({
            id: 1,
            name: "مستخدم تجريبي",
            email,
            token: "fake-jwt-token",
          });
        } else {
          reject(new Error("بيانات تسجيل الدخول غير صحيحة"));
        }
      }, 1500);
    });
  },

  loginWithGoogle() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 2,
          name: "Google User",
          email: "google@gmail.com",
          token: "google-fake-token",
        });
      }, 1200);
    });
  },

  logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  },
};
