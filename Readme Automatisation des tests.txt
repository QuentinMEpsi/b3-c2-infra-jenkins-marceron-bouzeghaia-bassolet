Pour automatiser les tests avec jenkins :
	I) Configuration de Jenkins :
		1) Naviger dans votre job, puis accédez à sa configuration.
		2) Dans général, cochez "Déclanchez les builds à distance".
		3) Survolez votre identifiant (visible en haut à droite), ouvrez le menu déroulant, et cliquez sur "Configurer".
		4) Dans la section "Jeton d'API". Cliquez sur "Ajoutez un jeton", donnez lui un nom et cliquez sur générer.
		5) Copiez le jeton d'API, et conservez le précieusement, car il ne sera pas réaffichable plus tard.

	II) Configuration de Git :
		1) Naviger dans le dossier "/.git/hooks/" dans le projet
		2) Créer un fichier "post-commit" sans extension. Tout code dans ce fichier est exécuté à chaque commit git.
		3) Placez le script suivant dans le fichier "post-commit", puis remplacez "USERNAME" par votre identifiant Jenkins et API_TOKEN par votre jeton d'API créé plus tôt.
			curl -X POST -L --user <USERNAME>:<API_TOKEN> \
    				http://localhost:8080/job/calc/build
		   Ce code permet de se connecter à Jenkins et à lancer un Build.

Jenkins est maintenant configuré pour lancer un build à chaque commit.