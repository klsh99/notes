export const scrollToTop = (top = 0) => window.scrollTo({ top, behavior: 'smooth' });
export const scrollToTitle = (id) => { var _a; return scrollToTop((_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.offsetTop); };
