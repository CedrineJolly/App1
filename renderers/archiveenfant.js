document.getElementById('archiveEnfant').addEventListener('click', async (evt) => {
    evt.preventDefault();
    try {
        const numeroPage = parseInt(window.location.pathname.match(/(\d+)\.html/)[1]);
        window.bridge.updateEtatContrat(numeroPage, 2);
    }
    catch (error) {
        console.error(error);
    }
});