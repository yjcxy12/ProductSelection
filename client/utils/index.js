export function getCookieValue(key) {
    // code from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    const regex = new RegExp(`(?:(?:^|.*;\s*)${key}\s*\=\s*([^;]*).*$)|^.*$`);
    return document.cookie.replace(regex, '$1');
}
