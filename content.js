function getLogoURL (logo) {
    switch (logo) {
        case 'swan':
            return 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwNCIgdmlld0JveD0iMCAwIDIwNCAyMDQiIHdpZHRoPSIyMDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEwMiAwYzU2LjMzMzA0NCAwIDEwMiA0NS42NjY5NTU1IDEwMiAxMDIgMCA1Ni4zMzMwNDQtNDUuNjY2OTU2IDEwMi0xMDIgMTAyLTU2LjMzMzA0NDUgMC0xMDItNDUuNjY2OTU2LTEwMi0xMDIgMC01Ni4zMzMwNDQ1IDQ1LjY2Njk1NTUtMTAyIDEwMi0xMDJ6bS02NS4wMTIxOTU0IDgzLjkyNjE0NDljLS4yMzI0NjcxLjU1ODQzNzYtLjUzMjYwOSAxLjA5ODkzMTgtLjY4NzI5NDEgMS42NzgzNzY1LTIuMjIwNTIyNSA4LjMzMTkyNDctMi43OTE4MDI3IDE2Ljc3NDU3MzYtMS44OTQwMTM4IDI1LjM1NDY0NDYgMy4zNTAzMzkxIDMyLjAxNTE5NiAzMC4yMzQzNDk1IDU2LjcyNzM3NCA1OS4wMTg1MjU5IDU5LjUwNTU1OCA2LjI0NDUzMjkuNjAzMDc3IDEyLjQ0MjkyNDQuNDE3OTUzIDE4LjMwMTYyMjQtMi4yMzkwMDMgMTEuMjE2NDMtNS4wODY3NzEgMTMuMjg0NDY0LTE5LjA2MTcxNyAzLjg5MDQxOS0yNi45ODc1MDUtMi40OTEyMjItMi4xMDIwMTktNS4yMjk4NTEtNC4xMTA4MTktOC4xODM4MS01LjQzNzMyNy05LjI1NjA1ODMtNC4xNTc2NDctMTguNjU0NDk3OC04LjAwMzY5LTI4LjAyNTY5MTUtMTEuOTA0MDAxLTkuMjU5MTM1LTMuODUzNDgyLTE4LjQzMjEzODUtNy44NjA1NzgtMjYuNDQxMDQ4NS0xNC4wMzE4NC03Ljc5NzUzNjMtNi4wMDkzMzEtMTMuMjg3OTc5My0xMy40ODU2NTYtMTQuODA0MDY5Mi0yMy40NDIxMjY2LS4xMjQzNjMzLS44MTQ4OTg4LS4zMDIzMzkxLTEuNjIxNDgyNC0uNDU1NzA1OS0yLjQzMjAwNDd6bTk4LjA1NjA4NTQtMzguNzQ5NDg5NGMtMTUuMDUxMDM5LTkuMjEyMDMzLTMxLjMzODY3OS0xMi4wNTM2NzUzLTQ4LjY3NDM5ODUtOC45OTYyNzMtMTAuMjMxMTkwMyAxLjgwNDQxODktMTkuNDY5MjMxOCA1Ljc1NTQ5NjUtMjYuOTM4NTAxNyAxMy4xNzkzMDM2LTEyLjM4OTMxMTUgMTIuMzEzMi0xMy4wMTc3MTk3IDMxLjc1ODczNDEuNTkwNjE1OSA0My40MzA3ODEyIDQuNTk3NDg3OCAzLjk0MzIgOS44ODk3NDA1IDcuMzcwODUxNyAxNS4zODMyNTk1IDkuOTI4NDYwNyAxMC42NDUxNDg4IDQuOTU2MzU0IDIxLjY3NTY5MiA5LjA4Nzc0MiAzMi41MTMzMTc4IDEzLjY0MDU4NCA3Ljg0MTA0MiAzLjI5NDE2OSAxNS4zOTIwNDkgNy4wOTc3NiAyMS43NzEwNTMgMTIuODc5MDc3IDkuNzk5NjU0IDguODgxMTcyIDExLjU5MjU5NCAyMi40NTY5ODQgNS45NjkgMzIuMjQ2NzExLS4xNjgzMDkuMjkzMjIzLS4yMzM3ODYuNjQ1NTI5LS40MTE3NjIgMS4xNTUzODkuNTM1Njg2LjA5NjI4MS43NjQxOTguMjA3NDQ0Ljk0NDM3LjE1NDQ4OS4zNDMyMDgtLjEwMTUzNC42NzMyMzItLjI3MjIxNi45ODM5MjEtLjQ1NTE1MyA3LjAxNTMyMi00LjEzNzA3OCAxMy4xMjM2MjYtOS4yOTAzNzIgMTcuNzAwOS0xNi4wNjY0NjEgOS41MTk3MjYtMTQuMDk0NDI0IDcuNTEzNjU0LTMwLjAzMjIxNy01LjU1NzIzOS00MC45MDExODEtNC41NTk2OTYtMy43OTI2NS05LjY2MzQyNi03LjIxNzY3NTctMTUuMDM1NjU4LTkuNzAxMzIyOC0xMC44NTc0MDEtNS4wMjAyNDk0LTIyLjA3MzM5LTkuMjcwNjc3Ni0zMy4xMzI0OTgtMTMuODYwMjgyMy02LjE0MjE0MTgtMi41NDkyOTQyLTEyLjMyMzM5NDQtNS4wMjc2ODk1LTE3LjU5ODUwODYtOS4yMjk5NzY1LTguMTM2MzQ5NS02LjQ4MTk5MDYtNC4wODA2OTg5LTE1LjI3NjA3MDYgMS45MzkyNzY4LTE4LjI5NDUyMjQgMy42Mzg2MTU5LTEuODI0NTUwNiA3LjUwMzk4NjItMi4zMjA4NDIzIDExLjUxNDgxMzEtMi4wNTc4MTY1IDcuMjEzOTUxNy40NzMwOTY1IDEzLjkwMDU2NzcgMi42OTgwOTQyIDIwLjE4MjQ1MzcgNi4xNTQ2MzA3IDEyLjUyNTEgNi44OTIwNjU4IDIyLjQ1MjE5MyAxNi42ODU3MzE3IDMxLjEzNjk3MiAyNy44NTAxMDgyLjQ5NzQ1My42Mzk0MDIzIDEuMDg2MzEyIDEuMjA3NDY4MiAxLjYzMzQyMiAxLjgwODc5NTMuMTg0NTY3LS4wOTQ5Njk0LjM2OTEzNS0uMTkwMzc2NS41NTQxNDItLjI4NTM0NTktLjEyOTE5Ny0uNjUwNzgxMi0uMTk3NzUxLTEuMzIwMzgxMi0uMzk3Njk5LTEuOTQ4ODQyNC0xLjUwMDI3LTQuNzE4MjcyOS0zLjA2OTA5NC05LjQxNTUzODgtNC41MDMwMDctMTQuMTUzNTA1OS0uMjQwODE2LS43OTUyMDQ3LS4yMTMxMzEtMS45MDI0NTE3LjE2NTIzMi0yLjYxNTM3ODggMi41MjMzMDEtNC43NTE1MzQxIDIuMjk5NjIzLTkuMzc1NzEyOS0uNDA2MDQ4LTEzLjkzMTE4MTItMi41MjI0MjMtNC4yNDY5MjctNi4xNzg2MTctNy4zOTE4NTg4LTEwLjMyNzQyOS05LjkzMTA4N3oiIGZpbGw9IiNmYmZiZmIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==';
        case 'bitcoin':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png';
        default:
            return 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwNCIgdmlld0JveD0iMCAwIDIwNCAyMDQiIHdpZHRoPSIyMDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEwMiAwYzU2LjMzMzA0NCAwIDEwMiA0NS42NjY5NTU1IDEwMiAxMDIgMCA1Ni4zMzMwNDQtNDUuNjY2OTU2IDEwMi0xMDIgMTAyLTU2LjMzMzA0NDUgMC0xMDItNDUuNjY2OTU2LTEwMi0xMDIgMC01Ni4zMzMwNDQ1IDQ1LjY2Njk1NTUtMTAyIDEwMi0xMDJ6bS02NS4wMTIxOTU0IDgzLjkyNjE0NDljLS4yMzI0NjcxLjU1ODQzNzYtLjUzMjYwOSAxLjA5ODkzMTgtLjY4NzI5NDEgMS42NzgzNzY1LTIuMjIwNTIyNSA4LjMzMTkyNDctMi43OTE4MDI3IDE2Ljc3NDU3MzYtMS44OTQwMTM4IDI1LjM1NDY0NDYgMy4zNTAzMzkxIDMyLjAxNTE5NiAzMC4yMzQzNDk1IDU2LjcyNzM3NCA1OS4wMTg1MjU5IDU5LjUwNTU1OCA2LjI0NDUzMjkuNjAzMDc3IDEyLjQ0MjkyNDQuNDE3OTUzIDE4LjMwMTYyMjQtMi4yMzkwMDMgMTEuMjE2NDMtNS4wODY3NzEgMTMuMjg0NDY0LTE5LjA2MTcxNyAzLjg5MDQxOS0yNi45ODc1MDUtMi40OTEyMjItMi4xMDIwMTktNS4yMjk4NTEtNC4xMTA4MTktOC4xODM4MS01LjQzNzMyNy05LjI1NjA1ODMtNC4xNTc2NDctMTguNjU0NDk3OC04LjAwMzY5LTI4LjAyNTY5MTUtMTEuOTA0MDAxLTkuMjU5MTM1LTMuODUzNDgyLTE4LjQzMjEzODUtNy44NjA1NzgtMjYuNDQxMDQ4NS0xNC4wMzE4NC03Ljc5NzUzNjMtNi4wMDkzMzEtMTMuMjg3OTc5My0xMy40ODU2NTYtMTQuODA0MDY5Mi0yMy40NDIxMjY2LS4xMjQzNjMzLS44MTQ4OTg4LS4zMDIzMzkxLTEuNjIxNDgyNC0uNDU1NzA1OS0yLjQzMjAwNDd6bTk4LjA1NjA4NTQtMzguNzQ5NDg5NGMtMTUuMDUxMDM5LTkuMjEyMDMzLTMxLjMzODY3OS0xMi4wNTM2NzUzLTQ4LjY3NDM5ODUtOC45OTYyNzMtMTAuMjMxMTkwMyAxLjgwNDQxODktMTkuNDY5MjMxOCA1Ljc1NTQ5NjUtMjYuOTM4NTAxNyAxMy4xNzkzMDM2LTEyLjM4OTMxMTUgMTIuMzEzMi0xMy4wMTc3MTk3IDMxLjc1ODczNDEuNTkwNjE1OSA0My40MzA3ODEyIDQuNTk3NDg3OCAzLjk0MzIgOS44ODk3NDA1IDcuMzcwODUxNyAxNS4zODMyNTk1IDkuOTI4NDYwNyAxMC42NDUxNDg4IDQuOTU2MzU0IDIxLjY3NTY5MiA5LjA4Nzc0MiAzMi41MTMzMTc4IDEzLjY0MDU4NCA3Ljg0MTA0MiAzLjI5NDE2OSAxNS4zOTIwNDkgNy4wOTc3NiAyMS43NzEwNTMgMTIuODc5MDc3IDkuNzk5NjU0IDguODgxMTcyIDExLjU5MjU5NCAyMi40NTY5ODQgNS45NjkgMzIuMjQ2NzExLS4xNjgzMDkuMjkzMjIzLS4yMzM3ODYuNjQ1NTI5LS40MTE3NjIgMS4xNTUzODkuNTM1Njg2LjA5NjI4MS43NjQxOTguMjA3NDQ0Ljk0NDM3LjE1NDQ4OS4zNDMyMDgtLjEwMTUzNC42NzMyMzItLjI3MjIxNi45ODM5MjEtLjQ1NTE1MyA3LjAxNTMyMi00LjEzNzA3OCAxMy4xMjM2MjYtOS4yOTAzNzIgMTcuNzAwOS0xNi4wNjY0NjEgOS41MTk3MjYtMTQuMDk0NDI0IDcuNTEzNjU0LTMwLjAzMjIxNy01LjU1NzIzOS00MC45MDExODEtNC41NTk2OTYtMy43OTI2NS05LjY2MzQyNi03LjIxNzY3NTctMTUuMDM1NjU4LTkuNzAxMzIyOC0xMC44NTc0MDEtNS4wMjAyNDk0LTIyLjA3MzM5LTkuMjcwNjc3Ni0zMy4xMzI0OTgtMTMuODYwMjgyMy02LjE0MjE0MTgtMi41NDkyOTQyLTEyLjMyMzM5NDQtNS4wMjc2ODk1LTE3LjU5ODUwODYtOS4yMjk5NzY1LTguMTM2MzQ5NS02LjQ4MTk5MDYtNC4wODA2OTg5LTE1LjI3NjA3MDYgMS45MzkyNzY4LTE4LjI5NDUyMjQgMy42Mzg2MTU5LTEuODI0NTUwNiA3LjUwMzk4NjItMi4zMjA4NDIzIDExLjUxNDgxMzEtMi4wNTc4MTY1IDcuMjEzOTUxNy40NzMwOTY1IDEzLjkwMDU2NzcgMi42OTgwOTQyIDIwLjE4MjQ1MzcgNi4xNTQ2MzA3IDEyLjUyNTEgNi44OTIwNjU4IDIyLjQ1MjE5MyAxNi42ODU3MzE3IDMxLjEzNjk3MiAyNy44NTAxMDgyLjQ5NzQ1My42Mzk0MDIzIDEuMDg2MzEyIDEuMjA3NDY4MiAxLjYzMzQyMiAxLjgwODc5NTMuMTg0NTY3LS4wOTQ5Njk0LjM2OTEzNS0uMTkwMzc2NS41NTQxNDItLjI4NTM0NTktLjEyOTE5Ny0uNjUwNzgxMi0uMTk3NzUxLTEuMzIwMzgxMi0uMzk3Njk5LTEuOTQ4ODQyNC0xLjUwMDI3LTQuNzE4MjcyOS0zLjA2OTA5NC05LjQxNTUzODgtNC41MDMwMDctMTQuMTUzNTA1OS0uMjQwODE2LS43OTUyMDQ3LS4yMTMxMzEtMS45MDI0NTE3LjE2NTIzMi0yLjYxNTM3ODggMi41MjMzMDEtNC43NTE1MzQxIDIuMjk5NjIzLTkuMzc1NzEyOS0uNDA2MDQ4LTEzLjkzMTE4MTItMi41MjI0MjMtNC4yNDY5MjctNi4xNzg2MTctNy4zOTE4NTg4LTEwLjMyNzQyOS05LjkzMTA4N3oiIGZpbGw9IiNmYmZiZmIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==';
    }
}

function getLogoStyle(logo) {
    if(logo == 'bitcoin') {
        return "height:69px; padding:5px; border-radius: 100%;"
    } else {
        return "height:69px; padding:5px; background: #00305e; border-radius: 100%;"
    }
}
function updateLogo (logoURL, logo) {
    if (!logoURL) return;

    const betterIcon = document.createElement('img');
    betterIcon.src = logoURL;
    betterIcon.alt = "Better Twitter Icon";
    
    betterIcon.style = getLogoStyle(logo)

    const twitterIcon = document.body.querySelectorAll("a[href='/home']")[0]

    if (twitterIcon) {
        twitterIcon.innerHTML = betterIcon.outerHTML
    }
}

document.body.onload = () => {
    // Listen for messages from the options page
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'updateLogo') {
            chrome.storage.sync.get('logo', (data) => {
                const logo = data.logo || 'twitter';
                const logoURL = getLogoURL(logo);
                updateLogo(logoURL, logo);
            });
        }
    });

    setTimeout(() => {
        chrome.storage.sync.get('logo', (data) => {
            const logo = data.logo || 'swan';
            const logoURL = getLogoURL(logo);
            updateLogo(logoURL, logo);            
        });
    }, 500)
}