const launchDate = new Date("August 1, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerText =
        String(days).padStart(2,"0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2,"0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2,"0");

},1000);