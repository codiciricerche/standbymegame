document.addEventListener('DOMContentLoaded', () => {
  function toggleMenu() {
    var x = document.getElementById('navDemo')
    if (x.className.indexOf('w3-show') == -1) {
      x.className += ' w3-show'
    } else {
      x.className = x.className.replace(' w3-show', '')
    }
  }

  function changeLang(event) {
    i18next.changeLanguage(event.currentTarget.id)
  }

  document.querySelector('#menu-mobile').addEventListener('click', toggleMenu)

  var langLinks = document.querySelectorAll('.change-lang-link')
  langLinks.forEach(function (link) {
    link.addEventListener('click', changeLang)
  })

  i18next.init({
    lng: 'en',
    debug: false,
    resources: {
      en: {
        translation: TEXTS_EN
      },
      it: {
        translation: TEXTS_IT
      },
      cy: {
        translation: TEXTS_CY
      },
      ro: {
        translation: TEXTS_RO
      },
      sv: {
        translation: TEXTS_SV
      }
    }
  }, function (err, t) {
    updateContent()
  })

  function updateContent() {
    var textElements = document.querySelectorAll("*[data-trans]")
    textElements.forEach(function (elem) {
      elem.innerHTML = i18next.t(elem.dataset.trans)
    })

    var downloadLinks = document.querySelectorAll("a[data-download-link]")
    downloadLinks.forEach(function (link) {
      const path = `downloads.${link.dataset.downloadLink}`
      link.href = i18next.t(path)
    })
  }


  i18next.on('languageChanged', () => {
    updateContent()
  })

})

