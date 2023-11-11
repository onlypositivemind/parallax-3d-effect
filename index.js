document.addEventListener('mousemove', (ev) => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(ev.clientX - window.innerWidth / 2) * -0.005}deg;
        --move-y: ${(ev.clientY - window.innerHeight / 2) * -0.01}deg;
        `,
    });
});
