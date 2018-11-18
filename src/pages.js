
import { qsa, addClass, removeClass, on } from './domHelpers';

const CACHED = 'cached';

function resolveEvents ({ container, events }) {
    const resolved = events(container);

    return resolved
        ? Object.entries(resolved).map(([key, listener]) => {
            const [selector, type] = key.split(':');
            return on(container.querySelector(selector), type, listener);
        })
        : [];
}

/**
 * @typedef {Object} Page
 * @prop {HTMLElement} container
 * @prop {(container: HTMLElement) => Object} events
 * @prop {(container: HTMLElement, param) => void} render
 * @prop {(container: HTMLElement) => void} cached
 *
 * @param {Page} page 
 */
export function loadPage (page, param) {
    const notCached = qsa('.page:not(.cached)');
    notCached.map(el => {
        addClass(el, CACHED); // cached
        if (el._unlistens) { // unlisten
            el._unlistens.forEach(f => f());
            el._unlistens = null;
        }
        el._onCached && el._onCached(el); // cache hook
    });

    removeClass(page.container, CACHED);
    page.container._unlistens = resolveEvents(page);
    page.render(page.container, param);
    page.container._onCached = page.cached;
}
