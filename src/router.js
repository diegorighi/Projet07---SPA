class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
  
    window.history.pushState({}, '', event.target.href);
  
    this.handle();
  
  }
  
  handle(){
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    
    fetch(route)
      .then(response => response.text())
      .then(html => {
  
        setTimeout(() => {
          html = `<div class="container-appear">${html}</div>`
          document.getElementById('app').innerHTML = html;
        }, 100);
      })
  }
  
}

export default new Router();