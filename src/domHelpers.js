let toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

/**
 * 
 * @param {string} selector 
 * @param {HTMLElement} element 
 * @returns {HTMLElement[]}
 */
export function qsa (selector, element = document.body) {
    return toArray(element.querySelectorAll(selector));
}

/**
 * 
 * @param {HTMLElement} el 
 * @param {string} className 
 */
export function addClass (el, className) {
    el.classList.add(className);
}

/**
 * 
 * @param {HTMLElement} el 
 * @param {string} className 
 */
export function removeClass (el, className) {
    el.classList.remove(className);
}

/**
 * 
 * @param {HTMLElement} el 
 * @param {string} type 
 * @param {Function} listener 
 * @param {boolean} [capture=false]
 */
export function on (el, type, listener, capture = false) {
    el.addEventListener(type, listener);
    return () => {
        el.removeEventListener(type, listener, capture);
    };
}

/**
 * 修改样式
 * @param {HTMLElement} el
 * @param {object<string>} obj
 */
export function css (el, obj) {
    for (let key in obj) {
        el.style[key] = obj[key];
    }
}
