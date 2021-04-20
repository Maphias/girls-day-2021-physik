WA.sendChatMessage('Willkommen im Keller! In den Räumen sind ein paar Videos verteilt. Schaut euch doch mal um!', 'Mr Robot');

WA.onEnterZone('popuplevitron', () => {
    WA.openCoWebSite('https://maphias.github.io/girls-day-2021-physik/websites/textlevitron.html');
})

WA.onEnterZone('popupgenerator', () => {
    WA.openCoWebSite('https://maphias.github.io/girls-day-2021-physik/websites/textgenerator.html');
})

WA.onEnterZone('popupinduktionskanone', () => {
    WA.openCoWebSite('https://maphias.github.io/girls-day-2021-physik/websites/textinduktionskanone.html');
})
