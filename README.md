Présentation web — Détection et suivi des lésions pulmonaires post-COVID

Contenu
- `index.html` : page de la présentation
- `css/style.css` : styles
- `js/script.js` : navigation entre diapositives
- Images : attendues dans la racine du dossier (ex. `slide 1.png`, `slide2.png`, ...)

Rappel : le fond global est blanc et la diapositive 1 a un fond bleu comme demandé.

Comment lancer
- Option 1 : Ouvrir directement `index.html` dans votre navigateur (double-clic)
- Option 2 : Lancer un serveur local (recommandé pour certains navigateurs)
  - Si vous avez Python installé, ouvrez PowerShell dans ce dossier et lancez :

```powershell
# depuis c:\Users\sohai\Desktop\prsnt
python -m http.server 8000
# puis ouvrez http://localhost:8000
```

Notes
- J'ai utilisé les images trouvées dans le dossier (`slide 1.png`, `slide2.png`, `slide3.png`, `slide6.png`, `slide7.png`).
- Pour les slides où il n'y avait pas d'image fournie (4,5,8,9), le contenu textuel a été intégré en HTML.
- Si vous voulez que toutes les diapositives utilisent vos images, placez les fichiers manquants dans ce dossier avec les noms `slide4.png`, `slide5.png`, `slide8.png`, `slide9.png` — le site les affichera automatiquement.

Si vous voulez un style différent (polices, transitions, export PDF), dites-moi et je l'ajuste.