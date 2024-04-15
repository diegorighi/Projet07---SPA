import router from './router.js';

router.add('/home', './pages/home.html');
router.add('/about', './pages/about.html');
router.add('/contato', './pages/contato.html');
router.add(404, './pages/404.html');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();