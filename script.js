"use strict";
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.target = '_self';
});
